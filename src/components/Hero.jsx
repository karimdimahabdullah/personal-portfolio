import { Link } from 'react-router-dom'
import { profile } from '../profile.js'

export default function Hero() {
  return (
    <section className="hero">
      {profile.photo && (
        <img className="hero-photo" src={profile.photo} alt={profile.name} />
      )}
      <p className="hero-status">
        <span className="dot" aria-hidden="true" />
        {profile.availability}
      </p>
      <h1 className="hero-line">{profile.pitch}</h1>
      <p className="hero-meta">{profile.role}, based in {profile.location}.</p>
      <div className="hero-actions">
        <Link className="btn btn-solid" to="/contact">Get in touch</Link>
        <Link className="btn btn-quiet" to="/work">See the work</Link>
        {profile.resume && (
          <a className="btn btn-quiet" href={profile.resume} download>Download CV</a>
        )}
      </div>
    </section>
  )
}
