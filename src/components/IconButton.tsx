import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './IconButton.css'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  active?: boolean
}

/** Кругла іконка-кнопка (розділ 4: ICON BUTTON, inactive/active). */
export function IconButton({ children, active, className, ...rest }: IconButtonProps) {
  return (
    <button className={['icon-btn', active ? 'icon-btn--active' : '', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </button>
  )
}
