import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Chip } from '../components/Chip'
import { CarCard } from '../components/CarCard'
import { LevelBadge } from '../components/LevelBadge'
import { ITEMS, PRICE_TIERS, SERIES } from '../data/items'
import type { SeriesKey } from '../types'
import './shared.css'
import './Home.css'

const CURRENT_LEVEL = 37
const XP_CURRENT = 2740
const XP_NEXT = 4000

export function Home() {
  const navigate = useNavigate()
  const [freshFilter, setFreshFilter] = useState<SeriesKey | 'all'>('all')

  const freshItems = useMemo(
    () =>
      ITEMS.filter((i) => i.status === 'stock').filter(
        (i) => freshFilter === 'all' || i.series === freshFilter
      ),
    [freshFilter]
  )

  const tierCounts = PRICE_TIERS.map((t) => ({
    ...t,
    count: ITEMS.filter((i) => i.status !== 'sold' && t.test(i.price)).length,
  }))

  return (
    <div className="pad">
      {/* Картка гравця */}
      <Card variant="premium" className="player-card">
        <LevelBadge level={CURRENT_LEVEL} size="sm" />
        <div className="player-card__info">
          <b>Андрій К.</b>
          <div className="player-card__xp-track">
            <div className="player-card__xp-fill" style={{ width: `${(XP_CURRENT / XP_NEXT) * 100}%` }} />
          </div>
          <span className="player-card__xp-text">
            {XP_CURRENT} / {XP_NEXT} XP
          </span>
        </div>
      </Card>

      {/* Банер ефіру */}
      <Card variant="active" className="live-banner" onClick={() => navigate('/auction')}>
        <span className="live-banner__dot">● LIVE</span>
        <b>Аукціон сьогодні о 20:00</b>
        <span>24 лоти · один під плахтою</span>
        <Button variant="primary" size="sm" style={{ marginTop: 10 }}>
          Підключитись
        </Button>
      </Card>

      {/* Аукціон без ефіру */}
      <Card className="row-card" onClick={() => navigate('/offauction')}>
        <span className="row-card__icon">
          <svg viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 4v4M16 4v4M4 10h16" />
          </svg>
        </span>
        <div className="row-card__text">
          <b>Аукціон без ефіру</b>
          <span>6 лотів чекають ставок</span>
        </div>
        <svg className="row-card__chevron" viewBox="0 0 24 24">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </Card>

      {/* Цінові категорії */}
      <div className="tier-grid">
        {tierCounts.map((t) => (
          <button key={t.key} className="tier-tile" onClick={() => navigate('/catalog')}>
            <b>{t.label}</b>
            <span>{t.count} шт</span>
          </button>
        ))}
      </div>

      {/* Новинки */}
      <h2 className="section-title">Новинки</h2>
      <div className="chip-row">
        <Chip label="Усі" active={freshFilter === 'all'} onClick={() => setFreshFilter('all')} />
        {Object.values(SERIES).map((s) => (
          <Chip
            key={s.key}
            label={s.name}
            active={freshFilter === s.key}
            onClick={() => setFreshFilter(s.key)}
          />
        ))}
      </div>
      <div className="fresh-rail">
        {freshItems.map((item) => (
          <div key={item.id} style={{ minWidth: 150 }}>
            <CarCard item={item} onClick={() => navigate('/catalog')} />
          </div>
        ))}
      </div>
    </div>
  )
}
