import { Link } from 'react-router-dom'
import { profile } from '../profile.js'

export default function Footer() {
  return (
    <footer className="foot">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <nav aria-label="Footer">
        <ul>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {profile.links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
