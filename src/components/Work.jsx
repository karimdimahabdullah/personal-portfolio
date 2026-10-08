import { profile } from '../profile.js'
import PageHead from './PageHead.jsx'
import ProjectCard from './ProjectCard.jsx'
import ContactCta from './ContactCta.jsx'

export default function Work() {
  return (
    <>
      <PageHead
        eyebrow="Projects"
        title="Selected work"
        lede="Hands-on builds in power-system monitoring, from the sensor to the data."
      />

      {profile.projects.length === 0 ? (
        <p>Projects are being added here soon.</p>
      ) : (
        <div className="card-grid">
          {profile.projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      )}

      <ContactCta />
    </>
  )
}
