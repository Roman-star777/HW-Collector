import './Chip.css'
interface ChipProps { label: string; active?: boolean; onClick?: () => void }
export function Chip({ label, active, onClick }: ChipProps) {
  return <button className="chip" aria-pressed={active} onClick={onClick}>{label}</button>
}
