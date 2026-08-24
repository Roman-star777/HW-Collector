import type { ReactNode, CSSProperties } from 'react'
import './Card.css'

interface CardProps {
  variant?: 'default' | 'active' | 'premium' | 'disabled'
  children: ReactNode
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

/**
 * Єдиний картковий компонент застосунку (п.7, п.30 дизайн-системи).
 * Замінює 8 незалежних card-класів з прототипу (.plate/.actplate/
 * .colwrap2/.clubcard2/.bay/...) — один компонент, чотири стани.
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
