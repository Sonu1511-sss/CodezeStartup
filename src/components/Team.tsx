import { useState } from 'react'
import { team } from '../data/team'
import { ExternalLink } from 'lucide-react'

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

export default function Team() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // Map each member to varied heights for the wave skyline rhythm (koi bada, koi chota)
  const sizeClasses: Record<string, string> = {
    'chandrabhan-gadeshwar': 'wave-big',    // 390px
    'sanjay-sende': 'wave-small',          // 310px
    'shubham-uprade': 'wave-hero',         // 420px (Center Hero)
    'nikhil-waghade': 'wave-small',        // 310px
    'dharamchand-patle': 'wave-mid',       // 360px
  }

  return (
    <section id="team" className="team-sec">
      <div className="wrap">
        <p className="lab">Meet Our Team</p>
        <Split>The Developers Behind Codeze</Split>
        <p className="lead rv" style={{ marginTop: '1.25rem' }}>
          Our dedicated engineering team crafts modern web applications, scalable digital products, and intelligent AI solutions with precision and care.
        </p>

        {/* Single-Line Skyline Wave: Compact & Refined */}
        <div className="team-wave-container rv">
          <div className="team-wave-track">
            {team.map((m) => {
              const isHovered = hoveredId === m.id
              const sizeClass = sizeClasses[m.id] || 'wave-mid'

              return (
                <a
                  key={m.id}
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`team-wave-card ${sizeClass} ${isHovered ? 'is-active' : ''}`}
                  onMouseEnter={() => setHoveredId(m.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  aria-label={`${m.name} - ${m.role}. Click to open LinkedIn profile`}
                >
                  {/* 1. Full Cover Image */}
                  <div className="team-wave-img-box">
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      className="team-wave-img"
                      style={{
                        objectPosition: m.imagePosition || 'center 20%',
                      }}
                    />
                    <div className="team-wave-vignette" aria-hidden="true" />
                  </div>

                  {/* 2. Top-Right LinkedIn Badge */}
                  <div className="team-wave-in-badge" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.88 0-1.6.72-1.6 1.6 0 .88.72 1.6 1.6 1.6.88 0 1.6-.72 1.6-1.6 0-.88-.72-1.6-1.6-1.6Z" />
                    </svg>
                  </div>

                  {/* 3. Subtle Name Badge before hover */}
                  <div className="team-wave-peek">
                    <span className="team-wave-peek-pill">
                      <span className="team-wave-dot" aria-hidden="true" />
                      {m.name.split(' ')[0]}
                    </span>
                  </div>

                  {/* 4. Full Overlay: Naam & Kaam & LinkedIn Link on Hover/Click */}
                  <div className="team-wave-overlay">
                    <div className="team-wave-overlay-content">
                      {/* Naam */}
                      <h3 className="team-wave-name">{m.name}</h3>

                      {/* Kaam (Role) */}
                      <div className="team-wave-role">
                        <span className="role-cyan-dot" aria-hidden="true" />
                        <span>{m.role}</span>
                      </div>

                      {/* Kaam (Specialty) */}
                      {m.specialty && (
                        <p className="team-wave-spec">{m.specialty}</p>
                      )}

                      {/* Direct LinkedIn Button */}
                      <div className="team-wave-btn">
                        <span>LinkedIn</span>
                        <ExternalLink size={12} aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
