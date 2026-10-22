import { company } from '../data/content'
export default function Footer() {
  return (
    <footer><div className="wrap">
      <div className="fg">
        <div><a className="logo" href="#home">Codeze Startup</a><p style={{ color: 'var(--mu)', maxWidth: '34ch' }}>Custom software, AI solutions and SaaS products for businesses.</p></div>
        <div><h3>Navigate</h3><ul><li><a href="#about">About</a></li><li><a href="#services">Services</a></li><li><a href="#work">Our Work</a></li><li><a href="#team">Team</a></li></ul></div>
        <div><h3>Services</h3><ul><li><a href="#services">Software Development</a></li><li><a href="#services">AI &amp; Automation</a></li><li><a href="#services">SaaS Products</a></li></ul></div>
        <div><h3>Contact</h3><ul>
          <li><a href="#contact">Send an inquiry</a></li>
          {company.email && <li><a href={'mailto:' + company.email}>{company.email}</a></li>}
          {company.socials.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
          {company.privacyUrl && <li><a href={company.privacyUrl}>Privacy Policy</a></li>}
          {company.termsUrl && <li><a href={company.termsUrl}>Terms and Conditions</a></li>}
        </ul></div>
      </div>
      <div className="cp">© {new Date().getFullYear()} Codeze Startup. All rights reserved.</div>
    </div></footer>
  )
}
