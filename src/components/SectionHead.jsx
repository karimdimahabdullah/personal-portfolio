import { Link } from 'react-router-dom'

/* Heading row for a section on the home page, with an optional link onward. */
export default function SectionHead({ eyebrow, title, to, linkLabel }) {
  return (
    <div className="section-head">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="section-title">{title}</h2>
      </div>
      {to && (
        <Link className="link-arrow" to={to}>
          {linkLabel} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  )
}
