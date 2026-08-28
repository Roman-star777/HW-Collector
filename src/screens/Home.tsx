import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Chip } from '../components/Chip'
import { Badge } from '../components/Badge'
import { LevelBadge } from '../components/LevelBadge'
import { AuctionCard } from '../components/AuctionCard'
import { ProgressBar } from '../components/ProgressBar'
import { ProductShot } from './ProductShot'
import { Rivets } from './Rivets'
import { ITEMS, SERIES } from '../data/items'
import type { SeriesKey } from '../types'
import './shared.css'
import './metal-panel.css'
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

  return (
    <div className="pad home-pad">
      {/* Картка гравця */}
      <div className="metal-panel player-card2">
        <Rivets />
        <div className="level-plate">
          <LevelBadge level={CURRENT_LEVEL} size="md" />
        </div>
        <div className="player-card2__mid">
          <b>Андрій К.</b>
          <ProgressBar value={(XP_CURRENT / XP_NEXT) * 100} variant="primary" />
          <span className="player-card2__xp">
            {XP_CURRENT} / {XP_NEXT} XP
          </span>
        </div>
        <div className="player-card2__next">
          <span>До наступного рівня</span>
          <b>{XP_NEXT - XP_CURRENT} XP</b>
        </div>
      </div>

      {/* Статистика */}
      <div className="stats-row2">
        <div className="metal-panel stat-card2">
          <Rivets />
          <span className="stat-card2__icon stat-card2__icon--amber">
            <svg viewBox="0 0 24 24"><path d="M5 17h14M5 17V9l2-4h10l2 4v8M5 13h14" /><circle cx="8" cy="17" r="1.6" /><circle cx="16" cy="17" r="1.6" /></svg>
          </span>
          <div>
            <b>14</b>
            <span>покупок за весь час</span>
          </div>
        </div>
        <div className="metal-panel stat-card2">
          <Rivets />
          <span className="stat-card2__icon stat-card2__icon--red">
            <svg viewBox="0 0 24 24"><path d="M8 4h8v5a4 4 0 0 1-8 0z" /><path d="M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3M12 13v3m-3 3h6" /></svg>
          </span>
          <div>
            <b>3</b>
            <span>виграшів на аукціонах</span>
          </div>
        </div>
      </div>

      {/* Клуб колекціонерів */}
      <div className="metal-panel metal-panel--gold club-card2">
        <Rivets />
        <div className="club-card2__bg" />
        <span className="club-card2__icon">
          <svg viewBox="0 0 24 24"><path d="M12 21c-4.5-1.8-7-5.2-7-9.5V6l7-2.5L19 6v5.5c0 4.3-2.5 7.7-7 9.5z" /><path d="M8 8l1.3 2.3L12 7l2.7 3.3L16 8v3H8z" /></svg>
        </span>
        <div className="club-card2__body">
          <b>Клуб колекціонерів</b>
          <span>Отримуй ексклюзивні можливості та бонуси щомісяця!</span>
          <button className="club-card2__btn">Вступити в клуб</button>
        </div>
      </div>

      {/* Моя колекція */}
      <div className="section-head2">
        <h2>Моя колекція</h2>
        <button onClick={() => navigate('/catalog')}>
          Переглянути всю
          <svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
      <div className="metal-panel collection-card2">
        <Rivets />
        <div className="collection-card2__col">
          <b>78</b>
          <svg viewBox="0 0 24 24" className="col-icon col-icon--red"><path d="M5 17h14M5 17V9l2-4h10l2 4v8M5 13h14" /><circle cx="8" cy="17" r="1.6" /><circle cx="16" cy="17" r="1.6" /></svg>
          <span>Машинки</span>
        </div>
        <div className="collection-card2__col">
          <b>2</b>
          <svg viewBox="0 0 24 24" className="col-icon col-icon--amber"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16M4 15h16" /></svg>
          <span>Стелажі</span>
        </div>
        <div className="collection-card2__col">
          <b>12</b>
          <svg viewBox="0 0 24 24" className="col-icon col-icon--purple"><path d="M12 2l7 7-7 13L5 9z" /></svg>
          <span>Рідкісні</span>
        </div>
        <div className="collection-card2__col">
          <b>4</b>
          <svg viewBox="0 0 24 24" className="col-icon col-icon--green"><path d="M17 2l4 4-4 4M21 6H3M7 22l-4-4 4-4M3 18h18" /></svg>
          <span>Обмін</span>
        </div>
      </div>

      {/* Новинки */}
      <div className="section-head2">
        <h2>Новинки</h2>
        <button onClick={() => navigate('/catalog')}>
          Усі категорії
          <svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
      <div className="chip-row">
        <Chip label="Усі" active={freshFilter === 'all'} onClick={() => setFreshFilter('all')} />
        {Object.values(SERIES).map((s) => (
          <Chip key={s.key} label={s.name} active={freshFilter === s.key} onClick={() => setFreshFilter(s.key)} />
        ))}
      </div>
      <div className="products-rail">
        {freshItems.map((item) => {
          const series = SERIES[item.series]
          return (
            <div key={item.id} className="product-card2" onClick={() => navigate(`/item/${item.id}`)}>
              {item.isNew && <span className="product-card2__new"><Badge variant="new">New</Badge></span>}
              <button className="product-card2__fav" onClick={(e) => e.stopPropagation()} aria-label="Обране">
                <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9.3-8.8C1.4 8 3 5 6.2 5c1.9 0 3.3 1 4.4 2.7C11.7 6 13.1 5 15 5c3.2 0 4.8 3 3.5 6.2C16.2 15.6 12 20 12 20z" /></svg>
              </button>
              <div className="product-card2__art">
                <ProductShot shape={item.art} color={series.color} />
              </div>
              <div className="product-card2__body">
                <b>{item.name}</b>
                <span>{item.year}</span>
                <div className="product-card2__bottom">
                  <span className="product-card2__price">{item.price} грн</span>
                  <button className="product-card2__cart" onClick={(e) => e.stopPropagation()} aria-label="У кошик">
                    <svg viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 7H6" /></svg>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="rail-dots">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className={i === 0 ? 'rail-dot rail-dot--on' : 'rail-dot'} />
        ))}
      </div>

      {/* Ефір зараз */}
      <AuctionCard
        title="Аукціон сьогодні о 20:00"
        subtitle="24 лоти · один під плахтою"
        timer="00:23:45"
        onClick={() => navigate('/auction')}
      />

      {/* Аукціон без ефіру */}
      <div className="metal-panel row-card2" onClick={() => navigate('/offauction')}>
        <Rivets />
        <span className="row-card2__icon">
          <svg viewBox="0 0 24 24">
            <line x1="7" y1="5" x2="15" y2="5" />
            <line x1="11" y1="5" x2="11" y2="17" />
            <line x1="7" y1="20" x2="15" y2="20" />
            <line x1="11" y1="17" x2="11" y2="20" />
          </svg>
        </span>
        <div className="row-card2__text">
          <b>Аукціон без ефіру</b>
          <span>6 лотів чекають ставок</span>
        </div>
        <svg className="row-card2__chevron" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      </div>
    </div>
  )
}
