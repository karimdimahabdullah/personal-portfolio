import { profile } from '../profile.js'

export default function SkillGrid() {
  return (
    <div className="card-grid card-grid--tight">
      {profile.skillGroups.map((g, i) => (
        <article key={g.title} className="card" style={{ '--i': i }}>
          <h3>{g.title}</h3>
          <ul className="chips">
            {g.items.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </article>
      ))}
    </div>
  )
}
