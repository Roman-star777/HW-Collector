import './Inputs.css'
export function FilterButton({ onClick, active }: { onClick?: () => void; active?: boolean }) {
  return <button className={`filter-btn${active ? ' filter-btn--active' : ''}`} onClick={onClick}><svg viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4" /></svg>Фільтри</button>
}
