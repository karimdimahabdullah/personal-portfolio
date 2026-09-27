import { useState } from 'react'
import './App.css'


const profile = {
  name: 'Karim Dimah Abdullah',
  role: 'Frontend and embedded-systems developer',
  location: 'Ghana',
  pitch:
    'I build fast web interfaces and the embedded hardware behind them, from React dashboards to ESP32 monitoring units.',
  availability: 'Taking new projects from October',
  email: 'karimdimahabdullah0@gmail.com',
  phone: '+233 50 914 3569',
  links: [
    { label: 'GitHub', href: 'https://github.com/karimdimahabdullah?tab=repositories' },
  ],

  // 3 to 6 projects. Each one needs an outcome, not a description.
  projects: [
    {
      title: 'Household Load Profiler',
      year: '2025',
      kind: 'Embedded',
      summary:
        'ESP32 and CT-sensor unit that logs household load current and pushes readings to a dashboard for profiling energy use.',
      stack: ['ESP32', 'C++', 'MQTT'],
      href: '',
      repo: '',
    },
    {
      title: 'Grid Power Quality Monitor',
      year: '2025',
      kind: 'Simulation',
      summary:
        'Wokwi-based ESP32 simulation tracking voltage sags, harmonics, and frequency drift on a mock grid feed.',
      stack: ['ESP32', 'Wokwi', 'C++'],
      href: '',
      repo: '',
    },
  ],

  services: [
    {
      title: 'Web interfaces',
      body: 'React and vanilla builds that load fast on mobile data and stay readable after handover.',
    },
    {
      title: 'Embedded and IoT',
      body: 'Microcontroller firmware, sensor integration, and the dashboards that read from them.',
    },
    {
      title: 'Rescue work',
      body: 'Half-finished codebase? I audit it, fix what is broken, and document what is left.',
    },
  ],

  skills: [
    'JavaScript', 'React', 'Vite', 'HTML', 'CSS',
    'C++', 'Python', 'ESP32 / Arduino', 'Git', 'Figma',
  ],

  // Leave empty until you have real ones. Never invent a quote.
  testimonials: [],
}

  function Nav() {
  const [open, setOpen] = useState(false)
  const items = [
    ['Work', '#work'],
    ['Services', '#services'],
    ['About', '#about'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="nav">
      <a className="nav-name" href="#top">{profile.name}</a>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Close' : 'Menu'}
      </button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'}>
        {items.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  )
}


function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-status">
        <span className="dot" aria-hidden="true" />
        {profile.availability}
      </p>
      <h1 className="hero-line">{profile.pitch}</h1>
      <p className="hero-meta">{profile.role}, based in {profile.location}.</p>
      <div className="hero-actions">
        <a className="btn btn-solid" href={`mailto:${profile.email}`}>Start a project</a>
        <a className="btn btn-quiet" href="#work">See the work</a>
      </div>
    </section>
  )
}

function Work() {
  if (!profile.projects.length) return null
  return (
    <section id="work" className="section">
      <h2 className="section-title">Selected work</h2>
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
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section section-tint">
      <h2 className="section-title">What I take on</h2>
      <div className="services">
        {profile.services.map((s) => (
          <article key={s.title} className="service">
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about">
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
    </section>
  )
}

function Testimonials() {
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

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Hire me</h2>
      <p className="prose">
        Send a short note with what you are building and when you need it.
        I reply within a day, and I will say straight away if it is not a fit.
      </p>
      <a className="btn btn-solid" href={`mailto:${profile.email}`}>{profile.email}</a>
      <p className="contact-alt">
        Or call <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
      </p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="foot">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <ul>
        {profile.links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
