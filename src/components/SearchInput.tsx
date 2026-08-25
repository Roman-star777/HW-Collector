import type { InputHTMLAttributes } from 'react'
import './Inputs.css'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

/** Поле пошуку (розділ 09 дизайн-системи): іконка + placeholder. */
export function SearchInput(props: SearchInputProps) {
  return (
    <div className="search-input">
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input type="text" placeholder="Пошук машинки…" {...props} />
    </div>
  )
}
