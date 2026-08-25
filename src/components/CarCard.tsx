import { useState } from 'react'
import type { CarItem } from '../types'
import { SERIES } from '../data/items'
import { CarIcon } from './CarIcon'
import { Badge } from './Badge'
import './CarCard.css'

interface CarCardProps {
  item: CarItem
  onClick?: () => void
}

/**
 * Єдина структура картки авто (розділ 6/12): image, категорія,
 * назва, рік, ціна, статус. Той самий компонент у Home/Catalog/
 * Garage — змінюється тільки інформація, не структура.
 */
export function CarCard({ item, onClick }: CarCardProps) {
  const series = SERIES[item.series]
  const sold = item.status === 'sold'
  const [fav, setFav] = useState(false)

  return (
    <div className={`car-card${sold ? ' car-card--sold' : ''}`}>
      <button className="car-card__hit" onClick={onClick} aria-label={item.name} />
      <div className="car-card__art">
        <span className="car-card__glow" style={{ background: series.color }} />
        <span className="car-card__tag">{series.name}</span>
        {item.isNew && (
          <span className="car-card__badge">
            <Badge variant="new">Новинка</Badge>
          </span>
        )}
        {!item.isNew && item.discount && (
          <span className="car-card__badge">
            <Badge variant="discount">-{item.discount}%</Badge>
          </span>
        )}
        <button
          className={`car-card__fav${fav ? ' car-card__fav--on' : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            setFav((f) => !f)
          }}
          aria-label="Обране"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 20s-7-4.4-9.3-8.8C1.4 8 3 5 6.2 5c1.9 0 3.3 1 4.4 2.7C11.7 6 13.1 5 15 5c3.2 0 4.8 3 3.5 6.2C16.2 15.6 12 20 12 20z" />
          </svg>
        </button>
        <CarIcon shape={item.art} color={series.color} glossy />
      </div>
      <div className="car-card__body">
        <div className="car-card__name">{item.name}</div>
        <div className="car-card__year">{item.year}</div>
        {item.status === 'live' ? (
          <span className="car-card__price car-card__price--live">Аукціон</span>
        ) : (
          <span className={`car-card__price${sold ? ' car-card__price--out' : ''}`}>
            {item.price} ₴
          </span>
        )}
      </div>
    </div>
  )
}
