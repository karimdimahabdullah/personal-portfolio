import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { profile } from '../profile.js'

const items = [
  ['Home', '/'],
  ['Work', '/work'],
  ['About', '/about'],
  ['Contact', '/contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <NavLink className="nav-name" to="/" end onClick={() => setOpen(false)}>
        {profile.name}
      </NavLink>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Close' : 'Menu'}
      </button>
      <nav
        id="primary-nav"
        aria-label="Primary"
        className={open ? 'nav-panel is-open' : 'nav-panel'}
      >
        <div className="nav-links">
          {items.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? 'is-current' : undefined)}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
