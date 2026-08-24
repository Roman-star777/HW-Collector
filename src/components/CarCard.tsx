import type { CarItem } from '../types'
import { SERIES } from '../data/items'
import { CarIcon } from './CarIcon'
import './CarCard.css'

interface CarCardProps {
  item: CarItem
  onClick?: () => void
}

/**
 * Єдина структура картки авто (п.13): image, категорія, назва,
 * рік, ціна, статус. Той самий компонент у Home/Catalog/Garage —
 * змінюється тільки інформація, не структура.
 */
export function CarCard({ item, onClick }: CarCardProps) {
  const series = SERIES[item.series]
  const sold = item.status === 'sold'
  return (
    <button className={`car-card${sold ? ' car-card--sold' : ''}`} onClick={onClick}>
      <div className="car-card__art">
        <span className="car-card__glow" style={{ background: series.color }} />
        <span className="car-card__tag">{series.name}</span>
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
    </button>
  )
}
