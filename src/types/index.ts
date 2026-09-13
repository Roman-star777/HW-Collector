export type SeriesKey = 'muscle' | 'offroad' | 'trucks' | 'classics' | 'exotics'
export interface Series { key: SeriesKey; name: string; color: string }
export type ItemStatus = 'stock' | 'live' | 'sold'
export interface CarItem {
  id: string; name: string; series: SeriesKey; year: string
  art: 'muscle' | 'suv' | 'pickup' | 'hatch'; price: number; rarity: 1 | 2 | 3
  status: ItemStatus; isNew?: boolean; discount?: number
}
export interface LevelTier { tier: number; name: string; minLevel: number; maxLevel: number; badge: string; color: string }
export interface ShelfConfig {
  id: string; name: string; type: 'FACTORY' | 'BLACK_GARAGE' | 'CARBON' | 'RACING' | 'ELITE'
  capacity: number; background: string; frameColor: string; glowColor: string
  isUnlocked: boolean; requiredLevel: number
}
export interface BoxEntry { id: string; item: CarItem; paid: boolean }
export interface Bid { user: string; amount: number }
export interface AsyncLot {
  id: string; name: string; series: SeriesKey; art: 'muscle' | 'suv' | 'pickup' | 'hatch'
  bid: number; endsIn: string; bids: number
}
export interface RecognizedItem {
  id: string; name: string; series: SeriesKey; art: 'muscle' | 'suv' | 'pickup' | 'hatch'; confidence: number
}
