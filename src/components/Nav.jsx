import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { profile } from '../profile.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const items = [
    ['Home', '/'],
    ['Work', '/work'],
    ['About', '/about'],
    ['Contact', '/contact'],
  ]

  return (
    <header className="nav">
      <NavLink className="nav-name" to="/" end>{profile.name}</NavLink>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Close' : 'Menu'}
      </button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'}>
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
      </nav>
    </header>
  )
}
