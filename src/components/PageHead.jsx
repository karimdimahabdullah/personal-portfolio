import BackHome from './BackHome.jsx'

/* Top of every inner page: link home, then eyebrow, title and a short intro. */
export default function PageHead({ eyebrow, title, lede }) {
  return (
    <header className="page-head">
      <BackHome />
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="section-title">{title}</h1>
      {lede && <p className="lede">{lede}</p>}
    </header>
  )
}
