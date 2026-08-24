import './Chip.css'

interface ChipProps {
  label: string
  active?: boolean
  onClick?: () => void
}

/**
 * Єдина функція фільтра-чипа. У прототипі цей патерн був
 * реалізований 3 рази окремим inline-темплейтом (Головна, Каталог,
 * Адмінка) — тут одна крапка правди.
 */
export function Chip({ label, active, onClick }: ChipProps) {
  return (
    <button className="chip" aria-pressed={active} onClick={onClick}>
      {label}
    </button>
  )
}
