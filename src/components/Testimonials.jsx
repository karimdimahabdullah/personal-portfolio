import { profile } from '../profile.js'

export default function Testimonials() {
  if (!profile.testimonials.length) return null
  return (
    <section className="section section-tint">
      <h2 className="section-title">What clients say</h2>
      <div className="quotes">
        {profile.testimonials.map((t) => (
          <blockquote key={t.name}>
            <p>{t.quote}</p>
            <footer>{t.name}, {t.title}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
