import type { InputHTMLAttributes } from 'react'
import './Inputs.css'
export function SearchInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <div className="search-input"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg><input type="text" {...props} /></div>
}
