import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { CarIcon } from '../components/CarIcon'
import { SHELVES } from '../data/shelves'
import { ITEMS, SERIES } from '../data/items'
import './shared.css'
import './Garage.css'

const CURRENT_LEVEL = 37
const unlockedShelves = SHELVES.map((s) => ({ ...s, isUnlocked: CURRENT_LEVEL >= s.requiredLevel }))
const garageItems = ITEMS.slice(0, 6)

export function Garage() {
  const navigate = useNavigate()
  const [active, setActive] = useState(0)
  const dragStart = useRef<number | null>(null)
  const [dragOffset, setDragOffset] = useState(0)

  function go(dir: number) {
    setActive((a) => Math.max(0, Math.min(unlockedShelves.length - 1, a + dir)))
  }
  function onPointerDown(e: React.PointerEvent) {
    dragStart.current = e.clientX
  }
  function onPointerMove(e: React.PointerEvent) {
    if (dragStart.current === null) return
    setDragOffset(e.clientX - dragStart.current)
  }
  function onPointerUp() {
    if (dragOffset < -60) go(1)
    else if (dragOffset > 60) go(-1)
    dragStart.current = null
    setDragOffset(0)
  }

  return (
    <div className="pad">
      <div className="shelf-stage" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp}>
        <div className="shelf-track">
          {unlockedShelves.map((shelf, i) => {
            const offset = i - active
            const x = offset * 100 + (offset === 0 ? dragOffset / 3.9 : 0)
            return (
              <div
                key={shelf.id}
                className="shelf-bay"
                style={{
                  transform: `translateX(${x}%)`,
                  opacity: Math.abs(offset) > 1 ? 0 : offset === 0 ? 1 : 0.35,
                  background: shelf.background,
                  borderColor: shelf.frameColor,
                  zIndex: offset === 0 ? 2 : 1,
                }}
              >
                <div className="shelf-bay__top">
                  <b>{shelf.name}</b>
                  <span style={{ color: shelf.glowColor }}>{shelf.type.replace('_', ' ')}</span>
                </div>
                <div className="shelf-bay__grid" style={{ ['--glow' as string]: shelf.glowColor }}>
                  {Array.from({ length: shelf.capacity }).map((_, slot) => {
                    const item = shelf.isUnlocked ? garageItems[slot] : undefined
                    return (
                      <div key={slot} className="shelf-slot">
                        {item && <CarIcon shape={item.art} color={SERIES[item.series].color} glossy />}
                      </div>
                    )
                  })}
                </div>
                {!shelf.isUnlocked && (
                  <div className="shelf-bay__lock">
                    <svg viewBox="0 0 24 24">
                      <rect x="5" y="11" width="14" height="9" rx="2" />
                      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                    </svg>
                    <b>Закрито</b>
                    <span>рівень {shelf.requiredLevel}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <button className="shelf-arrow shelf-arrow--l" onClick={() => go(-1)} aria-label="Попередній">
          <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button className="shelf-arrow shelf-arrow--r" onClick={() => go(1)} aria-label="Наступний">
          <svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>

      <div className="shelf-dots">
        {unlockedShelves.map((_, i) => (
          <span key={i} className={`shelf-dot${i === active ? ' shelf-dot--on' : ''}`} />
        ))}
      </div>

      <Button variant="secondary" size="sm" style={{ width: '100%', marginTop: 14 }} onClick={() => navigate('/garage/skins')}>
        Змінити оформлення
      </Button>

      <h2 className="section-title">Готово до відправки</h2>
      <Card>
        <div className="box-head">
          <b>Скринька · 2 з 6</b>
          <span className="box-head__sum">420 ₴</span>
        </div>
        <p className="box-note">Зберігання безкоштовне 60 днів.</p>
      </Card>
    </div>
  )
}
