import { profile } from '../profile.js'
import Hero from './Hero.jsx'
import SectionHead from './SectionHead.jsx'
import ProjectCard from './ProjectCard.jsx'
import SkillGrid from './SkillGrid.jsx'
import ContactCta from './ContactCta.jsx'

export default function Home() {
  return (
    <>
      <Hero />

      {profile.projects.length > 0 && (
        <section>
          <SectionHead
            eyebrow="Projects"
            title="Selected work"
            to="/work"
            linkLabel="View all work"
          />
          <div className="card-grid">
            {profile.projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </section>
      )}

      <section>
        <SectionHead
          eyebrow="Capabilities"
          title="What I work with"
          to="/about"
          linkLabel="More about me"
        />
        <SkillGrid />
      </section>

      <ContactCta />
    </>
  )
}
