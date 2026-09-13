import type { ShelfConfig } from '../types'
export const SHELVES: ShelfConfig[] = [
  { id: 'factory', name: 'Factory', type: 'FACTORY', capacity: 6, background: 'linear-gradient(180deg,#171b20,#0d1013)', frameColor: '#252a30', glowColor: '#ffb020', isUnlocked: true, requiredLevel: 1 },
  { id: 'black-garage', name: 'Black Garage', type: 'BLACK_GARAGE', capacity: 6, background: 'linear-gradient(180deg,#0f1214,#08090a)', frameColor: '#2b2f34', glowColor: '#8b9098', isUnlocked: false, requiredLevel: 21 },
  { id: 'carbon', name: 'Carbon', type: 'CARBON', capacity: 6, background: 'linear-gradient(180deg,#14161a,#0a0b0d)', frameColor: '#3a3f46', glowColor: '#4c8dff', isUnlocked: false, requiredLevel: 41 },
  { id: 'racing', name: 'Racing', type: 'RACING', capacity: 6, background: 'linear-gradient(180deg,#1a1210,#0d0908)', frameColor: '#3a2620', glowColor: '#ff2d20', isUnlocked: false, requiredLevel: 61 },
  { id: 'elite', name: 'Elite', type: 'ELITE', capacity: 6, background: 'linear-gradient(180deg,#1c1610,#100d09)', frameColor: '#6e4a20', glowColor: '#ffd27a', isUnlocked: false, requiredLevel: 81 },
]
export function shelfConfig(id: string) { return SHELVES.find((s) => s.id === id) }
