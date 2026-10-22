import type { ReactNode } from 'react'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { steps, why } from '../data/content'
import type { Showcase } from '../types'

/** Splits a heading into words so GSAP can animate them (see App.tsx). */
function Split({ children }: { children: string }) {
  return <h2 className="split">{children.split(' ').map((w, i) => <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '.25em' }}><span className="w" style={{ display: 'inline-block' }}>{w}</span></span>)}</h2>
}
const Head = ({ label, title }: { label: string; title: string }) => <><p className="lab">{label}</p><Split>{title}</Split></>
const Sec = ({ id, bg, children }: { id: string; bg?: boolean; children: ReactNode }) => <section id={id} style={bg ? { background: 'var(--bg2)' } : undefined}>{children}</section>

export { default as About } from './About'

export function Services() {
  return (
    <Sec id="services" bg><div className="wrap">
      <Head label="What we do" title="Technology built around your ambition." />
      <div className="sv">
        {services.map((s, i) => (
          <article key={s.title} className="sc" onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--x', e.clientX - r.left + 'px'); e.currentTarget.style.setProperty('--y', e.clientY - r.top + 'px') }}>
            <span className="no">0{i + 1}</span>
            <div><h3>{s.title}</h3><p>{s.description}</p></div>
            <ul>{s.capabilities.map((c) => <li key={c}>{c}</li>)}</ul>
          </article>
        ))}
      </div>
    </div></Sec>
  )
}

function Card({ item, cta }: { item: Showcase; cta: string }) {
  return (
    <article className="card rv">
      <div className="pv">
        {item.image ? (
          <img src={item.image} alt={item.name} loading="lazy" />
        ) : (
          <div className="mock"><b /><b /><b /></div>
        )}
      </div>
      <div className="cb">
        {item.placeholder && <span className="tag">Placeholder content</span>}
        <h3>{item.name}</h3>
        <p>{item.category}. {item.description}</p>
        <div className="tg">{item.tech.map((t) => <span key={t}>{t}</span>)}</div>
        {item.url && <p style={{ marginTop: '1rem' }}><a href={item.url} target="_blank" rel="noopener noreferrer">{cta}</a></p>}
      </div>
    </article>
  )
}

export const Work = () => <Sec id="work"><div className="wrap"><Head label="Selected work" title="Real projects. Thoughtful solutions." /><div className="cards">{projects.map((p, i) => <Card key={i} item={p} cta="View project" />)}</div></div></Sec>

export const Process = () => (
  <Sec id="process"><div className="wrap">
    <Head label="How we work" title="From first idea to final launch." />
    <div className="tl" id="tl"><div className="pg" />
      {steps.map((s, i) => <div className="st" key={s.title}><h3><span>0{i + 1}</span>{s.title}</h3><p>{s.text}</p></div>)}
    </div>
  </div></Sec>
)

export const Why = () => (
  <Sec id="why" bg><div className="wrap">
    <Split>Creative thinking. Solid engineering.</Split>
    <div className="wg">{why.map(({ icon: Icon, title, text }) => <div className="rv" key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></div>)}</div>
  </div></Sec>
)
