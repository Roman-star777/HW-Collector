import './Inputs.css'

interface FilterButtonProps {
  label?: string
  onClick?: () => void
}

/** Кнопка фільтрів (розділ 09 дизайн-системи): іконка повзунків + текст. */
export function FilterButton({ label = 'Фільтри', onClick }: FilterButtonProps) {
  return (
    <button className="filter-button" onClick={onClick}>
      <svg viewBox="0 0 24 24">
        <path d="M4 6h16M7 12h10M10 18h4" />
      </svg>
      {label}
    </button>
  )
}
