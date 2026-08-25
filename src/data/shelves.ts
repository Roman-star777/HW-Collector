import type { ShelfConfig } from '../types'

// 5 стартових стелажів (розділ 11 дизайн-системи v1.6): FACTORY,
// BLACK GARAGE, CARBON, RACING, ELITE. Кожен — незалежний об'єкт:
// зміна стелажа НЕ змінює автомобілі, тільки presentation layer.
// Архітектура не обмежена цими 5 — premium/seasonal/event стелажі
// додаються сюди ж, без зміни Garage/Level System.
export const SHELVES: ShelfConfig[] = [
  {
    id: 'factory',
    name: 'Factory',
    type: 'FACTORY',
    capacity: 9,
    background: 'linear-gradient(180deg,#171b20,#0d1013)',
    frameColor: '#252a30',
    glowColor: '#ffb020',
    isUnlocked: true,
    requiredLevel: 1,
  },
  {
    id: 'black_garage',
    name: 'Black Garage',
    type: 'BLACK_GARAGE',
    capacity: 9,
    background: 'linear-gradient(180deg,#0d0e10,#050506)',
    frameColor: '#1c1f24',
    glowColor: '#4c8dff',
    isUnlocked: false,
    requiredLevel: 21,
  },
  {
    id: 'carbon',
    name: 'Carbon',
    type: 'CARBON',
    capacity: 9,
    background: 'linear-gradient(180deg,#14161a,#0a0b0d)',
    frameColor: '#2b2f34',
    glowColor: '#9b6cff',
    isUnlocked: false,
    requiredLevel: 41,
  },
  {
    id: 'racing',
    name: 'Racing',
    type: 'RACING',
    capacity: 9,
    background: 'linear-gradient(180deg,#1a1210,#0d0908)',
    frameColor: '#3a2620',
    glowColor: '#ff2d20',
    isUnlocked: false,
    requiredLevel: 61,
  },
  {
    id: 'elite',
    name: 'Elite',
    type: 'ELITE',
    capacity: 9,
    background: 'linear-gradient(180deg,#1c1610,#100d09)',
    frameColor: '#6e4a20',
    glowColor: '#ffd27a',
    isUnlocked: false,
    requiredLevel: 81,
  },
]

export function shelfConfig(id: string): ShelfConfig | undefined {
  return SHELVES.find((s) => s.id === id)
}
