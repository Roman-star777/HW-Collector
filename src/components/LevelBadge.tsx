import { levelTierOf } from '../data/levels'
import './LevelBadge.css'

interface LevelBadgeProps {
  level: number
  size?: 'sm' | 'md'
  showLabel?: boolean
}

/**
 * <LevelBadge level={37} /> сама визначає tier через levelTierOf() —
 * компонент НЕ знає деталей мапінгу, тільки викликає чисту функцію
 * (п.17). Іконка — зірка в щиті, колір і назва tier-у беруться з
 * таблиці рівнів (розділ 14 дизайн-системи). Графіку можна замінити
 * на індивідуальні 10 бейджів пізніше, не чіпаючи логіку рівнів.
 */
export function LevelBadge({ level, size = 'md', showLabel = true }: LevelBadgeProps) {
  const tier = levelTierOf(level)
  return (
    <div className={`level-badge level-badge--${size}`}>
      <svg viewBox="0 0 40 44" className="level-badge__shield" style={{ color: tier.color }}>
        <path
          d="M20 2 L37 8 V21 C37 32 30 39 20 43 C10 39 3 32 3 21 V8 Z"
          fill="currentColor"
          fillOpacity="0.14"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M20 12l2.5 5.2 5.7.6-4.3 3.9 1.2 5.6L20 24.6l-5.1 2.7 1.2-5.6-4.3-3.9 5.7-.6z"
          fill="currentColor"
        />
      </svg>
      <span className="level-badge__num">{level}</span>
      {showLabel && (
        <span className="level-badge__tier" style={{ color: tier.color }}>
          {tier.name}
        </span>
      )}
    </div>
  )
}
