import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import { SHELVES } from '../data/shelves'
import './shared.css'
import './GarageSkins.css'

const CURRENT_LEVEL = 37

export function GarageSkins() {
  const navigate = useNavigate()
  const [active, setActive] = useState('factory')

  return (
    <div className="pad">
      <button className="back-link" onClick={() => navigate('/garage')}>
        <svg viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Гараж
      </button>
      <h1 className="screen-title">Оформлення</h1>
      <p className="screen-sub">Оберіть, який стелаж показувати першим у гаражі.</p>

      <div className="skins-grid">
        {SHELVES.map((s) => {
          const unlocked = CURRENT_LEVEL >= s.requiredLevel
          return (
            <Card
              key={s.id}
              variant={active === s.id ? 'active' : unlocked ? 'default' : 'disabled'}
              className="skin-card"
              onClick={() => unlocked && setActive(s.id)}
              style={{ background: s.background, borderColor: s.frameColor }}
            >
              <span className="skin-card__dot" style={{ background: s.glowColor }} />
              <b>{s.name}</b>
              <span>{s.type}</span>
              {!unlocked && <span className="skin-card__lock">рівень {s.requiredLevel}</span>}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
