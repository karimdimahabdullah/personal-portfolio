import { profile } from '../profile.js'
import BackHome from './BackHome.jsx'

export default function Work() {
  return (
    <section className="section page-top">
      <BackHome />
      <h2 className="section-title">Selected work</h2>
      {!profile.projects.length ? (
        <p className="prose">Projects are being added here soon.</p>
      ) : (
        <ul className="projects">
          {profile.projects.map((p) => (
            <li key={p.title} className="project">
              <div className="project-head">
                <h3>{p.title}</h3>
                <span className="project-meta">{p.kind}, {p.year}</span>
              </div>
              <p className="project-summary">{p.summary}</p>
              <ul className="chips">
                {p.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>
              {(p.href || p.repo) && (
                <div className="project-links">
                  {p.href && <a href={p.href} target="_blank" rel="noreferrer">Visit site</a>}
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Read the code</a>}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
