import { Link } from 'react-router-dom'
import Hero from './Hero.jsx'

const quickLinks = [
  { to: '/work', title: 'Selected work', body: 'Two power-systems builds, with the technical detail behind each.' },
  { to: '/about', title: 'About', body: 'How I work, and the tools I reach for.' },
  { to: '/contact', title: 'Contact', body: 'Reviewing me for a role? Get in touch here.' },
]

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="quick-links">
          {quickLinks.map((q) => (
            <Link key={q.to} to={q.to} className="quick-link">
              <h3>{q.title}</h3>
              <p>{q.body}</p>
              <span className="quick-link-arrow">View →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
