import './ProgressBar.css'
interface ProgressBarProps { value: number; variant?: 'primary' | 'secondary' | 'success' | 'danger'; label?: string; showPercent?: boolean }
export function ProgressBar({ value, variant = 'primary', label, showPercent }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value))
  return (
    <div className="progress-bar">
      {(label || showPercent) && <div className="progress-bar__head">{label && <span>{label}</span>}{showPercent && <b>{Math.round(clamped)}%</b>}</div>}
      <div className="progress-bar__track"><div className={`progress-bar__fill progress-bar__fill--${variant}`} style={{ width: `${clamped}%` }} /></div>
    </div>
  )
}
