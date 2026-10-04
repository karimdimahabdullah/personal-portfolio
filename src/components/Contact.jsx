import { profile } from '../profile.js'
import BackHome from './BackHome.jsx'

export default function Contact() {
  return (
    <section className="section page-top">
      <BackHome />
      <h2 className="section-title">Get in touch</h2>
      <p className="prose">
        Reviewing me for an internship or graduate role in power systems or
        embedded engineering? Reach out below — I reply within a day.
      </p>
      <a className="btn btn-solid" href={`mailto:${profile.email}`}>{profile.email}</a>
      <p className="contact-alt">
        Or call <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
      </p>
    </section>
  )
}
