import { Link } from 'react-router-dom'
import { profile } from '../profile.js'

export default function ContactCta() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div>
        <h2 id="cta-title">Hiring in power systems or embedded engineering?</h2>
        <p>I would like to hear about the role. I reply within a day.</p>
      </div>
      <div className="cta-actions">
        <a className="btn btn-inverse" href={`mailto:${profile.email}`}>Email me</a>
        <Link className="btn btn-ghost" to="/contact">Contact page</Link>
      </div>
    </section>
  )
}
