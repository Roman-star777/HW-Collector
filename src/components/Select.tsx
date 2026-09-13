import type { SelectHTMLAttributes } from 'react'
import './Inputs.css'
export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <div className="select-input"><select {...props} /><svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg></div>
}
