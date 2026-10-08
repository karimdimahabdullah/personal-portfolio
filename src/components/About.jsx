import { profile } from '../profile.js'
import PageHead from './PageHead.jsx'
import SectionHead from './SectionHead.jsx'
import SkillGrid from './SkillGrid.jsx'
import Testimonials from './Testimonials.jsx'
import ContactCta from './ContactCta.jsx'

export default function About() {
  const { education: ed } = profile

  return (
    <>
      <PageHead eyebrow="About" title="About me" />

      <div className="about-layout">
        <div className="about-prose">
          {profile.about.map((para) => <p key={para}>{para}</p>)}
        </div>
        <article className="card">
          <span className="fact-label">Education</span>
          <p className="fact-title">{ed.school}</p>
          <p>{ed.field}</p>
          <p>{ed.place} · {ed.period}</p>
        </article>
      </div>

      <section>
        <SectionHead eyebrow="Skills" title="Tools I reach for" />
        <SkillGrid />
      </section>

      <Testimonials />
      <ContactCta />
    </>
  )
}
