import { levelTierOf } from '../data/levels'
import './LevelBadge.css'

interface LevelBadgeProps {
  level: number
  size?: 'sm' | 'md'
  showLabel?: boolean
}

/**
 * Кругла металева бляха з рівнем — використовується лише в Профілі.
 * Сама визначає tier через levelTierOf(), графіку можна замінити
 * на 10 індивідуальних бейджів пізніше, не чіпаючи логіку рівнів.
 */
export function LevelBadge({ level, size = 'md', showLabel = true }: LevelBadgeProps) {
  const tier = levelTierOf(level)
  return (
    <div className={`level-badge level-badge--${size}`}>
      <div className="level-badge__ring" style={{ borderColor: tier.color, boxShadow: `0 0 14px ${tier.color}55, inset 0 0 10px ${tier.color}33` }}>
        <svg viewBox="0 0 24 24" className="level-badge__shield" style={{ color: tier.color }}>
          <path d="M12 2l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V5z" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeWidth="1.3" />
          <path d="M12 6l1.5 3 3.3.4-2.5 2.3.7 3.2L12 13.4 9 14.9l.7-3.2L7.2 9.4l3.3-.4z" fill="currentColor" />
        </svg>
        <span className="level-badge__num">{level}</span>
      </div>
      {showLabel && <span className="level-badge__tier" style={{ color: tier.color }}>{tier.name}</span>}
    </div>
  )
}
