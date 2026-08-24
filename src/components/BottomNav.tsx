import { NavLink } from 'react-router-dom'
import './BottomNav.css'

const TABS = [
  {
    to: '/',
    label: 'Головна',
    icon: 'M3 11l9-7 9 7v8a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  },
  {
    to: '/garage',
    label: 'Гараж',
    icon: 'M3 10 12 4l9 6v10H3z M7 20v-5h10v5',
  },
  {
    to: '/auction',
    label: 'Ефір',
    icon: 'M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0 M6.5 6.5a8 8 0 0 0 0 11 M17.5 6.5a8 8 0 0 1 0 11',
  },
  {
    to: '/profile',
    label: 'Профіль',
    icon: 'M12 8m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0 M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6',
  },
]

/** Однакова навігація на всіх екранах. */
export function BottomNav() {
  return (
    <nav className="bottom-nav">
      {TABS.map((t) => (
        <NavLink key={t.to} to={t.to} end={t.to === '/'} className="bottom-nav__tab">
          <svg viewBox="0 0 24 24">
            <path d={t.icon} />
          </svg>
          {t.label}
        </NavLink>
      ))}
    </nav>
  )
}
