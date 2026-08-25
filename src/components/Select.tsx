import type { SelectHTMLAttributes } from 'react'
import './Inputs.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

/** Випадаючий список (розділ 09 дизайн-системи). */
export function Select(props: SelectProps) {
  return (
    <div className="select">
      <select {...props} />
      <svg viewBox="0 0 24 24">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </div>
  )
}
