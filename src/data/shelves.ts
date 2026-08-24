import type { ShelfConfig } from '../types'

// 5 стартових стелажів (п.19 дизайн-системи). Кожен — незалежний
// об'єкт: зміна стелажа НЕ змінює автомобілі, тільки presentation
// layer. Архітектура не обмежена цими 5 — premium/seasonal/event
// стелажі додаються сюди ж, без зміни Garage/Level System.
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
    id: 'underground',
    name: 'Underground',
    type: 'UNDERGROUND',
    capacity: 9,
    background: 'linear-gradient(180deg,#0f1214,#08090a)',
    frameColor: '#2b2f34',
    glowColor: '#4c8dff',
    isUnlocked: false,
    requiredLevel: 21,
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
    requiredLevel: 41,
  },
  {
    id: 'luxury',
    name: 'Luxury',
    type: 'LUXURY',
    capacity: 9,
    background: 'linear-gradient(180deg,#1c1610,#100d09)',
    frameColor: '#6e4a20',
    glowColor: '#ffb020',
    isUnlocked: false,
    requiredLevel: 61,
  },
  {
    id: 'vault',
    name: 'Collector Vault',
    type: 'VAULT',
    capacity: 9,
    background: 'linear-gradient(180deg,#14100a,#0a0806)',
    frameColor: '#a56a28',
    glowColor: '#ffd27a',
    isUnlocked: false,
    requiredLevel: 81,
  },
]

export function shelfConfig(id: string): ShelfConfig | undefined {
  return SHELVES.find((s) => s.id === id)
}
