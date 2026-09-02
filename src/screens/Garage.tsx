import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CarIcon } from '../components/CarIcon'
import { SHELVES } from '../data/shelves'
import { ITEMS, SERIES } from '../data/items'
import { BOX_ITEMS, BOX_CAPACITY } from '../data/box'
import * as G from './garageAssets'
import './shared.css'
import './Garage.css'

const CURRENT_LEVEL = 37
const unlockedShelves = SHELVES.map((s) => ({ ...s, isUnlocked: CURRENT_LEVEL >= s.requiredLevel }))
const garageItems = ITEMS.slice(0, 6)
const BOX_TOTAL = BOX_ITEMS.reduce((sum, i) => sum + i.price, 0)

export function Garage() {
  const navigate = useNavigate()
  const [active, setActive] = useState(0)
  const dragStart = useRef<number | null>(null)
  const [dragOffset, setDragOffset] = useState(0)
  const shelf = unlockedShelves[active]

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
    <div className="pad garage-pad">
      {/* Заголовок "Гараж" — з макета, реальний клік по "Мої стелажі" */}
      <div className="g-imgpanel mt10" style={{ aspectRatio: `1 / ${G.GRATIOS.gtitle}`, backgroundImage: `url(${G.G_TITLE})` }}>
        <button className="g-hit g-hit-shelves" onClick={() => navigate('/garage/skins')} aria-label="Мої стелажі" />
      </div>

      <div className="shelf-outer">
        {/* Селектор стелажа — рамка з макета, реальні динамічні назва й заповненість */}
        <div className="g-imgpanel" style={{ aspectRatio: `1 / ${G.GRATIOS.gselector}`, backgroundImage: `url(${G.G_SELECTOR})` }}>
          <div className="g-selector-text">
            <b>{shelf.name}</b>
            <span>{shelf.isUnlocked ? garageItems.length : 0} / {shelf.capacity}</span>
          </div>
        </div>

        {/* Полиця з машинками — CSS, кольори підсвітки з даних стелажа */}
        <div
          className="shelf-stage"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <div className="shelf-track">
            {unlockedShelves.map((s, i) => {
              const offset = i - active
              const x = offset * 100 + (offset === 0 ? dragOffset / 3.9 : 0)
              return (
                <div
                  key={s.id}
                  className="shelf-bay"
                  style={{
                    transform: `translateX(${x}%)`,
                    opacity: Math.abs(offset) > 1 ? 0 : offset === 0 ? 1 : 0.35,
                    zIndex: offset === 0 ? 2 : 1,
                    ['--glow' as string]: s.glowColor,
                  }}
                >
                  <div className="shelf-bay__grid">
                    {Array.from({ length: s.capacity }).map((_, slot) => {
                      const item = s.isUnlocked ? garageItems[slot] : undefined
                      return (
                        <div key={slot} className="shelf-slot">
                          {item && <CarIcon shape={item.art} color={SERIES[item.series].color} glossy />}
                        </div>
                      )
                    })}
                  </div>
                  {!s.isUnlocked && (
                    <div className="shelf-bay__lock">
                      <svg viewBox="0 0 24 24">
                        <rect x="5" y="11" width="14" height="9" rx="2" />
                        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                      </svg>
                      <b>Закрито</b>
                      <span>рівень {s.requiredLevel}</span>
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

        {/* Кнопка "Змінити оформлення" — з макета */}
        <div
          className="g-imgpanel g-skinbtn"
          style={{ aspectRatio: `1 / ${G.GRATIOS.gskinbtn}`, backgroundImage: `url(${G.G_SKINBTN})` }}
          onClick={() => navigate('/garage/skins')}
        />
      </div>

      {/* Скринька */}
      <div className="box-outer mt10">
        <div className="g-imgpanel" style={{ aspectRatio: `1 / ${G.GRATIOS.gboxhead}`, backgroundImage: `url(${G.G_BOXHEAD})` }}>
          <span className="g-box-count">{BOX_ITEMS.length} з {BOX_CAPACITY}</span>
          <div className="g-box-timer">
            <span>23</span>:<span>47</span>:<span>18</span>
          </div>
        </div>

        <div className="box-grid">
          {BOX_ITEMS.map((item) => {
            const series = SERIES[item.series]
            return (
              <div key={item.id} className="box-slot box-slot--filled">
                <span className="box-slot__new">NEW</span>
                <button className="box-slot__x" aria-label="Прибрати">
                  <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" /></svg>
                </button>
                <div className="box-slot__art">
                  <CarIcon shape={item.art} color={series.color} glossy />
                </div>
                <b>{item.name}</b>
                <span className="box-slot__price">{item.price} грн</span>
              </div>
            )
          })}
          {Array.from({ length: BOX_CAPACITY - BOX_ITEMS.length }).map((_, i) => (
            <button key={i} className="box-slot box-slot--add" onClick={() => navigate('/catalog')}>
              <span>+</span>
              Додати машинку
            </button>
          ))}
        </div>

        <div className="box-footer">
          <span>
            Всього: <b>{BOX_TOTAL} грн</b>
          </span>
          <div
            className="g-imgpanel g-paybtn"
            style={{ aspectRatio: `1 / ${G.GRATIOS.gpaybtn}`, backgroundImage: `url(${G.G_PAYBTN})` }}
          />
        </div>
        <p className="box-note">
          <svg viewBox="0 0 24 24" className="box-note__icon"><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v5h1" /></svg>
          Після оплати скринька звільниться і ви зможете додати нові машинки.
        </p>
      </div>
    </div>
  )
}
