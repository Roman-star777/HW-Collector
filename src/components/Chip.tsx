import './Chip.css'

interface ChipProps {
  label: string
  active?: boolean
  onClick?: () => void
}

/** Єдина функція фільтра-чипа — одна крапка правди по всьому застосунку. */
export function Chip({ label, active, onClick }: ChipProps) {
  return (
    <button className="chip" aria-pressed={active} onClick={onClick}>
      {label}
    </button>
  )
}
