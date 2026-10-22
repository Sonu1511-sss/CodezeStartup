import { ShieldCheck, Zap, Cpu, Layers, MapPin, ArrowRight } from 'lucide-react'
import { aboutContent } from '../data/about'

/** Splits a heading into words so GSAP can animate them */
function Split({ children }: { children: string }) {
  return (
    <h2 className="split">
      {children.split(' ').map((w, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'top',
            marginRight: '.25em',
          }}
        >
          <span className="w" style={{ display: 'inline-block' }}>
            {w}
          </span>
        </span>
      ))}
    </h2>
  )
}

const principleIcons = {
  ShieldCheck,
  Zap,
  Cpu,
  Layers,
}

export default function About() {
  const { header, story, stats, principles, commitment } = aboutContent

  return (
    <section id="about" className="about-sec">
      <div className="wrap">
        {/* 1. Section Header */}
        <div className="about-header">
          <p className="lab">{header.eyebrow}</p>
          <Split>{header.heading}</Split>
          <p className="lead rv about-lead">{header.supporting}</p>
        </div>

        {/* 2. Our Story & Clean Visual Brand Card */}
        <div className="about-story-row">
          <div className="about-story-copy rv">
            {story.paragraphs.map((p, idx) => (
              <p key={idx} className="about-story-p">
                {p}
              </p>
            ))}
          </div>

          <aside className="about-brand-card rv" aria-label="About CODEZA Overview">
            <div className="about-brand-card-glow" aria-hidden="true" />
            
            {/* Header: Logo, Brand & Status */}
            <div className="about-brand-top">
              <div className="about-brand-identity">
                <div className="about-logo-wrapper">
                  <svg viewBox="0 0 32 32" className="about-logo-svg" aria-hidden="true">
                    <path
                      d="M16 2 29 9.5v13L16 30 3 22.5v-13z"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="2.2"
                    />
                    <path
                      d="M20 12.5a5.5 5.5 0 1 0 0 7"
                      fill="none"
                      stroke="#22D3EE"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="about-brand-name">{story.card.brand}</h3>
                  <span className="about-brand-sub">{story.card.tagline}</span>
                </div>
              </div>

              <div className="about-status-pill" title="Current Operational Status">
                <span className="status-pulse-dot" aria-hidden="true" />
                <span>{story.card.status}</span>
              </div>
            </div>

            {/* Location row */}
            <div className="about-location-row">
              <MapPin size={15} className="location-icon" aria-hidden="true" />
              <span>Location: {story.card.location}</span>
            </div>

            {/* Metric Blocks (2026 Founded, 20+ Delivered, 3 Core Team) */}
            <div className="about-metrics-grid">
              {story.card.metrics.map((metric, i) => (
                <div key={i} className="about-metric-block">
                  <div className="metric-number">{metric.value}</div>
                  <div className="metric-name">{metric.label}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* 3. Company Statistics */}
        <div className="about-stats-container">
          <div className="about-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="about-stat-card rv">
                <div className="stat-card-glow" aria-hidden="true" />
                <span className="stat-val">{s.value}</span>
                <span className="stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. What Drives Us */}
        <div className="about-principles-block">
          <div className="about-principles-head rv">
            <h3 className="about-principles-title">{principles.heading}</h3>
            <p className="about-principles-sub">{principles.description}</p>
          </div>

          <div className="about-principles-grid">
            {principles.items.map((item) => {
              const Icon = principleIcons[item.iconName]
              return (
                <article key={item.title} className="about-principle-card rv">
                  <div className="principle-card-sheen" aria-hidden="true" />
                  <div className="principle-icon-badge">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h4 className="principle-title">{item.title}</h4>
                  <p className="principle-desc">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>

        {/* 5. Our Commitment (Built for Your Next Milestone) */}
        <div className="about-commitment-card rv">
          <div className="commitment-glow" aria-hidden="true" />
          <div className="commitment-content">
            <div className="commitment-text-side">
              <h3 className="commitment-title">{commitment.title}</h3>
              <p className="commitment-desc">{commitment.text}</p>
            </div>
            <div className="commitment-actions">
              <a href={commitment.ctaPrimary.href} className="btn p commitment-btn-primary">
                <span>{commitment.ctaPrimary.label}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href={commitment.ctaSecondary.href} className="btn commitment-btn-secondary">
                {commitment.ctaSecondary.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
