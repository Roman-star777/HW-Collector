import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Chip } from '../components/Chip'
import { CarCard } from '../components/CarCard'
import { ITEMS, SERIES } from '../data/items'
import type { SeriesKey } from '../types'
import './shared.css'
import './Catalog.css'

export function Catalog() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<SeriesKey | 'all'>('all')

  const items = useMemo(
    () => ITEMS.filter((i) => filter === 'all' || i.series === filter),
    [filter]
  )

  return (
    <div className="pad">
      <h1 className="screen-title">Каталог</h1>
      <p className="screen-sub">Усі машинки колекції</p>

      <div className="chip-row" style={{ marginTop: 16 }}>
        <Chip label="Усі серії" active={filter === 'all'} onClick={() => setFilter('all')} />
        {Object.values(SERIES).map((s) => (
          <Chip key={s.key} label={s.name} active={filter === s.key} onClick={() => setFilter(s.key)} />
        ))}
      </div>

      <div className="catalog-grid">
        {items.map((item) => (
          <CarCard key={item.id} item={item} onClick={() => navigate(`/item/${item.id}`)} />
        ))}
      </div>

      {items.length === 0 && <p className="note">У цій серії поки порожньо.</p>}
    </div>
  )
}
