import { team } from '../data/team'

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
  return (
    <section id="team">
      <div className="wrap">
        <p className="lab">Meet Our Team</p>
        <Split>The Developers Behind Codeze</Split>
        <p className="lead rv" style={{ marginTop: '1.25rem' }}>
          Our dedicated engineering team crafts modern web applications, scalable digital products, and intelligent AI solutions with precision and care.
        </p>
<div className="team-grid">
  {team.map((m) => (
    <article key={m.id} className="team-card rv">
      <div className="team-avatar-wrap">
        <img
          src={m.image}
          alt={m.name}
          loading="lazy"
          className="team-avatar-img"
          style={{
            objectPosition: m.imagePosition || 'center 20%',
          }}
        />
      </div>

      <h3 className="team-name">{m.name}</h3>

      <div className="team-role">
        <span
          className="team-role-dot"
          aria-hidden="true"
        />

        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>

        <span>{m.role}</span>
      </div>

      {m.specialty && (
        <p className="team-spec">{m.specialty}</p>
      )}
    </article>
  ))}
</div>
      </div>
    </section>
  )
}
