import type { ReactNode } from 'react'
import './ListItem.css'

interface ListItemProps {
  icon: ReactNode
  title: string
  subtitle?: string
  right?: ReactNode
  onClick?: () => void
  showChevron?: boolean
}

/** Один компонент для всіх списків застосунку (розділ 8). */
export function ListItem({ icon, title, subtitle, right, onClick, showChevron = true }: ListItemProps) {
  return (
    <div className="list-item" onClick={onClick} role={onClick ? 'button' : undefined}>
      <span className="list-item__icon">{icon}</span>
      <div className="list-item__text">
        <b>{title}</b>
        {subtitle && <span>{subtitle}</span>}
      </div>
      {right}
      {showChevron && onClick && (
        <svg className="list-item__chevron" viewBox="0 0 24 24">
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </div>
  )
}
