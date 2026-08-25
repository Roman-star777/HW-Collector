import type { ReactNode, CSSProperties } from 'react'
import './Card.css'

interface CardProps {
  variant?: 'default' | 'active' | 'selected' | 'premium' | 'disabled'
  children: ReactNode
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

/**
 * Єдиний картковий компонент застосунку (розділ 6, "однакова
 * card language"). "active" = LIVE CARD з документа (червона рамка,
 * тільки для live/аукціонних станів). "selected" = обраний елемент
 * у списку вибору (бурштинова рамка) — не плутати з active.
 */
export function Card({ variant = 'default', children, className, style, onClick }: CardProps) {
  return (
    <div
      className={['card', `card--${variant}`, className].filter(Boolean).join(' ')}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
