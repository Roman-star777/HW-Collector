// Спільні типи застосунку HW Collector

export type SeriesKey = 'muscle' | 'offroad' | 'trucks' | 'classics' | 'exotics'

export interface Series {
  key: SeriesKey
  name: string
  color: string
}

export type ItemStatus = 'stock' | 'live' | 'sold'

export interface CarItem {
  id: string
  name: string
  series: SeriesKey
  year: string
  art: 'muscle' | 'suv' | 'pickup' | 'hatch'
  price: number
  rarity: 1 | 2 | 3
  status: ItemStatus
}

// ---- Рівні колекціонера: 10 tier-ів по 10 рівнів (1-100) ----
export interface LevelTier {
  tier: number // 1..10
  name: string
  minLevel: number
  maxLevel: number
  badge: string // ключ графіки бейджа (badge_01..badge_10)
}

// ---- Стелажі гаража: незалежні від автомобілів оформлення ----
export interface ShelfConfig {
  id: string
  name: string
  type: 'FACTORY' | 'UNDERGROUND' | 'RACING' | 'LUXURY' | 'VAULT'
  capacity: number
  background: string
  frameColor: string
  glowColor: string
  isUnlocked: boolean
  requiredLevel: number
}

export interface BoxEntry {
  id: string
  item: CarItem
  paid: boolean
}

export interface Bid {
  user: string
  amount: number
}

// ---- Асинхронні лоти (аукціон без ефіру) ----
export interface AsyncLot {
  id: string
  name: string
  series: SeriesKey
  art: 'muscle' | 'suv' | 'pickup' | 'hatch'
  bid: number
  endsIn: string
  bids: number
}

// ---- Розпізнана партія (адмінка) ----
export interface RecognizedItem {
  id: string
  name: string
  series: SeriesKey
  art: 'muscle' | 'suv' | 'pickup' | 'hatch'
  confidence: number
}
