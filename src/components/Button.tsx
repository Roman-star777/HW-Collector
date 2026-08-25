import type { ButtonHTMLAttributes } from 'react'
import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold'
  size?: 'md' | 'sm'
}

/**
 * Рівно два основних типи (розділ 4): Primary (червона, live/
 * критичні дії, сильні CTA) і Secondary (темна металева, другорядні
 * дії). "gold" — задокументований виняток для premium CTA (Club).
 */
export function Button({ variant = 'primary', size = 'md', className, ...rest }: ButtonProps) {
  return (
    <button
      className={['btn', `btn--${variant}`, `btn--${size}`, className].filter(Boolean).join(' ')}
      {...rest}
    />
  )
}
