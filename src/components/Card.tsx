import type { ReactNode, CSSProperties } from 'react'
import './Card.css'
interface CardProps { variant?: 'default' | 'active' | 'selected' | 'premium' | 'disabled'; children: ReactNode; className?: string; style?: CSSProperties; onClick?: () => void }
export function Card({ variant = 'default', children, className, style, onClick }: CardProps) {
  return <div className={['card', `card--${variant}`, className].filter(Boolean).join(' ')} style={style} onClick={onClick}>{children}</div>
}
