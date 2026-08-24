import type { ButtonHTMLAttributes } from 'react'
import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold'
  size?: 'md' | 'sm'
}

/**
 * Рівно два основних типи за п.8-9: Primary (червона, для live/
 * критичних дій та сильних CTA) і Secondary (темна металева, для
 * другорядних дій). "gold" — задокументований виняток для premium
 * CTA (Club), не третій випадковий стиль.
 */
export function Button({ variant = 'primary', size = 'md', className, ...rest }: ButtonProps) {
  return (
    <button
      className={['btn', `btn--${variant}`, `btn--${size}`, className].filter(Boolean).join(' ')}
      {...rest}
    />
  )
}
