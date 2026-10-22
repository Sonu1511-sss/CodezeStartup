import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'
import { z } from 'zod'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const PORT = process.env.PORT || 8787
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM, CLIENT_ORIGIN } = process.env

app.use(helmet({ contentSecurityPolicy: false }))
app.use(cors({ origin: CLIENT_ORIGIN || true }))
app.use(express.json({ limit: '20kb' }))

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(150).optional().default(''),
  type: z.enum(['Software or website', 'AI or automation', 'SaaS product', 'Not sure yet']),
  budget: z.string().trim().max(100).optional().default(''),
  description: z.string().trim().min(20).max(5000),
  website: z.string().optional().default('') // honeypot
})

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false,
  message: { ok: false, error: 'Too many requests. Please try again later.' } })

const configured = SMTP_HOST && SMTP_USER && SMTP_PASS && CONTACT_TO && CONTACT_FROM
const transport = configured ? nodemailer.createTransport({
  host: SMTP_HOST, port: Number(SMTP_PORT) || 587, secure: Number(SMTP_PORT) === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASS } }) : null

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

app.get('/api/health', (_req, res) => res.json({ ok: true, mailConfigured: Boolean(configured) }))

app.post('/api/contact', limiter, async (req, res) => {
  const parsed = schema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ ok: false, error: 'Please check the form fields.', fields: parsed.error.flatten().fieldErrors })
  const d = parsed.data
  if (d.website) return res.json({ ok: true }) // bot: pretend success, send nothing
  if (!transport) return res.status(503).json({ ok: false, error: 'Email delivery is not configured on the server.' })
  try {
    await transport.sendMail({
      from: CONTACT_FROM, to: CONTACT_TO, replyTo: d.email,
      subject: `New inquiry: ${d.type} from ${d.name}`,
      text: `Name: ${d.name}\nEmail: ${d.email}\nCompany: ${d.company}\nType: ${d.type}\nBudget: ${d.budget}\n\n${d.description}`,
      html: `<p><b>Name:</b> ${esc(d.name)}<br><b>Email:</b> ${esc(d.email)}<br><b>Company:</b> ${esc(d.company)}<br><b>Type:</b> ${esc(d.type)}<br><b>Budget:</b> ${esc(d.budget)}</p><p>${esc(d.description).replace(/\n/g, '<br>')}</p>`
    })
    res.json({ ok: true })
  } catch (e) {
    console.error('Mail error:', e.message)
    res.status(502).json({ ok: false, error: 'Could not send your inquiry. Please try again.' })
  }
})

// Serve the built frontend in production
const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist')
app.use(express.static(dist))
app.get('*', (req, res, next) => (req.path.startsWith('/api') ? next() : res.sendFile(path.join(dist, 'index.html'), (err) => err && next())))

app.listen(PORT, () => console.log(`API on http://localhost:${PORT} (mail ${configured ? 'configured' : 'NOT configured'})`))
