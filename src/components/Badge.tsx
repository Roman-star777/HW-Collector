import type { ReactNode } from 'react'
import './Badge.css'

export type BadgeVariant =
  | 'new' // НОВИНКА
  | 'rare' // РІДКІСНА
  | 'exclusive' // EXCLUSIVE
  | 'live' // LIVE / НА АУКЦІОНІ
  | 'sold' // ПРОДАНО
  | 'discount' // ЗНИЖКА
  | 'premium' // ПРЕМІУМ
  | 'club' // КЛУБ
  | 'limited' // LIMITED

interface BadgeProps {
  variant: BadgeVariant
  children: ReactNode
}

/**
 * Єдиний компонент для всіх бейджів застосунку (розділ 5).
 * Колір визначається виключно варіантом.
 */
export function Badge({ variant, children }: BadgeProps) {
  return <span className={`badge badge--${variant}`}>{children}</span>
}
