import { profile } from '../profile.js'

export default function Testimonials() {
  if (!profile.testimonials.length) return null
  return (
    <section>
      <div className="section-head">
        <h2 className="section-title">What others say</h2>
      </div>
      <div className="card-grid">
        {profile.testimonials.map((t, i) => (
          <blockquote key={t.name} className="card quote" style={{ '--i': i, margin: 0 }}>
            <p>{t.quote}</p>
            <footer>{t.name}, {t.title}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
