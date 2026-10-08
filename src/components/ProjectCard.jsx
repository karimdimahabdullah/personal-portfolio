export default function ProjectCard({ project: p, index = 0 }) {
  return (
    <article className="card project-card" style={{ '--i': index }}>
      <div className="card-top">
        <span className="tag">{p.kind}</span>
        <span className="card-meta">{p.year}</span>
      </div>
      <h3>{p.title}</h3>
      <p>{p.summary}</p>
      <ul className="chips" aria-label="Technologies">
        {p.stack.map((s) => <li key={s}>{s}</li>)}
      </ul>
      {(p.href || p.repo) && (
        <div className="card-links">
          {p.href && <a href={p.href} target="_blank" rel="noreferrer">Visit site</a>}
          {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Read the code</a>}
        </div>
      )}
    </article>
  )
}
