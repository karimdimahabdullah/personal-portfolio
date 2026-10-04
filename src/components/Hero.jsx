import { Link } from 'react-router-dom'
import { profile } from '../profile.js'

export default function Hero() {
  return (
    <section className="hero">
      {profile.photo && (
        <img
          className="hero-photo"
          src={profile.photo}
          alt={profile.name}
        />
      )}
      <p className="hero-status">
        <span className="dot" aria-hidden="true" />
        {profile.availability}
      </p>
      <h1 className="hero-line">{profile.pitch}</h1>
      <p className="hero-meta">{profile.role}, based in {profile.location}.</p>
      <div className="hero-actions">
        <a className="btn btn-solid" href={`mailto:${profile.email}`}>Get in touch</a>
        <Link className="btn btn-quiet" to="/work">See the work</Link>
      </div>
    </section>
  )
}
