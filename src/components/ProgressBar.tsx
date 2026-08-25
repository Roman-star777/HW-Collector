import './ProgressBar.css'

interface ProgressBarProps {
  value: number // 0-100
  variant?: 'primary' | 'secondary' | 'success' | 'danger'
  label?: string
  showPercent?: boolean
}

/**
 * Прогрес-бар (розділ 7): primary (золото/помаранч) — XP/рівень;
 * success (зелений) — завершені дії; danger (червоний) — критичні/
 * таймер, що спливає; secondary — нейтральний прогрес. Один
 * компонент для всіх прогресів застосунку, а не окремий XP-бар
 * лише на Головній.
 */
export function ProgressBar({ value, variant = 'primary', label, showPercent }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value))
  return (
    <div className="progress-bar">
      {(label || showPercent) && (
        <div className="progress-bar__head">
          {label && <span>{label}</span>}
          {showPercent && <b>{Math.round(clamped)}%</b>}
        </div>
      )}
      <div className="progress-bar__track">
        <div className={`progress-bar__fill progress-bar__fill--${variant}`} style={{ width: `${clamped}%` }} />
      </div>
    </div>
  )
}
