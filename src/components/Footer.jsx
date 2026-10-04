import { profile } from '../profile.js'

export default function Footer() {
  return (
    <footer className="foot">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <ul>
        {profile.links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
