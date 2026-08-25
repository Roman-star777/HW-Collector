import { levelTierOf } from '../data/levels'
import './LevelBadge.css'

interface LevelBadgeProps {
  level: number
  size?: 'sm' | 'md'
  showLabel?: boolean
}

/**
 * <LevelBadge level={37} /> сама визначає tier через levelTierOf() —
 * компонент НЕ знає деталей мапінгу, тільки викликає чисту функцію.
 * Іконка — щит із зіркою, колір/назва tier-у з таблиці рівнів
 * (розділ 10, 10 tier-ів). Графіку можна замінити на 10 індивіду-
 * альних бейджів пізніше, не чіпаючи логіку рівнів.
 */
export function LevelBadge({ level, size = 'md', showLabel = true }: LevelBadgeProps) {
  const tier = levelTierOf(level)
  return (
    <div className={`level-badge level-badge--${size}`}>
      <svg viewBox="0 0 40 44" className="level-badge__shield" style={{ color: tier.color }}>
        <defs>
          <linearGradient id={`shield-${tier.tier}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <path
          d="M20 2 L37 8 V21 C37 32 30 39 20 43 C10 39 3 32 3 21 V8 Z"
          fill={`url(#shield-${tier.tier})`}
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
