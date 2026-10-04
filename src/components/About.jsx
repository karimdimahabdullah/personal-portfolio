import { profile } from '../profile.js'
import BackHome from './BackHome.jsx'
import Testimonials from './Testimonials.jsx'

export default function About() {
  return (
    <>
      <section className="section page-top">
        <BackHome />
        <div className="about-grid">
          <div>
            <h2 className="section-title">How I work</h2>
            <p className="prose">
              I scope the problem before writing code, ship in pieces you can see,
              and hand over something you can run without me. You get working
              builds and plain updates.
            </p>
            <p className="prose">
              Replace this with your own story: what you studied, what pulled you
              into building, and the kind of problem you want next.
            </p>
          </div>
          <div>
            <h3 className="skills-title">Tools I reach for</h3>
            <ul className="chips chips-wide">
              {profile.skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  )
}
