import { useState } from 'react'
import { profile } from '../profile.js'
import PageHead from './PageHead.jsx'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked: the mailto link still works */
    }
  }

  return (
    <button type="button" className="copy-btn" onClick={copy} aria-live="polite">
      {copied ? 'Copied' : 'Copy email'}
    </button>
  )
}

export default function Contact() {
  const github = profile.links.find((l) => l.label === 'GitHub')

  return (
    <>
      <PageHead
        eyebrow="Contact"
        title="Get in touch"
        lede="Reviewing me for an internship or graduate role in power systems or embedded engineering? Reach out. I reply within a day."
      />

      <div className="card-grid">
        <article className="card card--link" style={{ '--i': 0 }}>
          <span className="tag">Email</span>
          <a className="stretch contact-value" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <CopyButton text={profile.email} />
        </article>

        <article className="card card--link" style={{ '--i': 1 }}>
          <span className="tag">Phone</span>
          <a
            className="stretch contact-value"
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
          >
            {profile.phone}
          </a>
          <span className="contact-action">Tap to call on mobile</span>
        </article>

        {github && (
          <article className="card card--link" style={{ '--i': 2 }}>
            <span className="tag">GitHub</span>
            <a
              className="stretch contact-value"
              href={github.href}
              target="_blank"
              rel="noreferrer"
            >
              {github.href.replace(/^https?:\/\//, '')}
            </a>
            <span className="contact-action">Code for my projects</span>
          </article>
        )}

        {profile.resume && (
          <article className="card card--link" style={{ '--i': 3 }}>
            <span className="tag">CV</span>
            <a className="stretch contact-value" href={profile.resume} download>
              Download my CV
            </a>
            <span className="contact-action">PDF</span>
          </article>
        )}
      </div>
    </>
  )
}
