import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Chip } from '../components/Chip'
import { CarCard } from '../components/CarCard'
import { SearchInput } from '../components/SearchInput'
import { Select } from '../components/Select'
import { FilterButton } from '../components/FilterButton'
import { ITEMS, SERIES } from '../data/items'
import type { SeriesKey } from '../types'
import './shared.css'
import './Catalog.css'

export function Catalog() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<SeriesKey | 'all'>('all')
  const [query, setQuery] = useState('')

  const items = useMemo(
    () =>
      ITEMS.filter((i) => filter === 'all' || i.series === filter).filter((i) =>
        i.name.toLowerCase().includes(query.toLowerCase())
      ),
    [filter, query]
  )

  return (
    <div className="pad">
      <h1 className="screen-title">Каталог</h1>
      <p className="screen-sub">Усі машинки колекції</p>

      <div className="catalog-controls">
        <SearchInput
          placeholder="Пошук машинки..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="catalog-controls__row">
          <Select defaultValue="all" onChange={(e) => setFilter(e.target.value as SeriesKey | 'all')}>
            <option value="all">Всі категорії</option>
            {Object.values(SERIES).map((s) => (
              <option key={s.key} value={s.key}>
                {s.name}
              </option>
            ))}
          </Select>
        </div>
        <FilterButton />
      </div>

      <div className="chip-row" style={{ marginTop: 14 }}>
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

      {items.length === 0 && <p className="note">Нічого не знайдено.</p>}
    </div>
  )
}
