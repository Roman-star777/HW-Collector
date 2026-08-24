import { levelTierOf } from '../data/levels'
import './LevelBadge.css'

interface LevelBadgeProps {
  level: number
  size?: 'sm' | 'md'
}

/**
 * <LevelBadge level={37} /> сама визначає tier через levelTierOf() —
 * компонент НЕ знає деталей мапінгу, тільки викликає чисту функцію
 * (п.17). Графіку бейджа можна міняти, не чіпаючи логіку рівнів.
 */
export function LevelBadge({ level, size = 'md' }: LevelBadgeProps) {
  const tier = levelTierOf(level)
  return (
    <div className={`level-badge level-badge--${size}`} data-tier={tier.tier}>
      <span className="level-badge__label">РІВЕНЬ</span>
      <span className="level-badge__num">{level}</span>
      <span className="level-badge__tier">{tier.name.toUpperCase()}</span>
    </div>
  )
}
