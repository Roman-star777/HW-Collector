import { IconButton } from './IconButton'
import './Header.css'

/** Header. На Home — металева текстура з заклепками (референс). */
export function Header() {
  return (
    <header className="app-header">
      <span className="app-header__rivet app-header__rivet--tl" />
      <span className="app-header__rivet app-header__rivet--tr" />
      <span className="app-header__rivet app-header__rivet--bl" />
      <span className="app-header__rivet app-header__rivet--br" />
      <div>
        <div className="app-header__logo">
          HW <em>COLLECTOR</em>
        </div>
        <div className="app-header__tag">колекційні машинки 1:64</div>
      </div>
      <div className="app-header__icons">
        <IconButton aria-label="Сповіщення" className="app-header__bell">
          <svg viewBox="0 0 24 24">
            <path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" />
            <path d="M10 21a2 2 0 0 0 4 0" />
          </svg>
          <span className="app-header__dot" />
        </IconButton>
        <IconButton aria-label="Профіль">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
          </svg>
        </IconButton>
      </div>
    </header>
  )
}
