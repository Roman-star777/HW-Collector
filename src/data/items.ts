import type { CarItem, Series, SeriesKey } from '../types'

// Кольори серій — окремий, свідомо дозволений шар кольору поза
// UI-палітрою дизайн-системи (категорійні кольори товару).
export const SERIES: Record<SeriesKey, Series> = {
  muscle: { key: 'muscle', name: 'Muscle', color: '#ff6b54' },
  offroad: { key: 'offroad', name: 'Off-road', color: '#20b486' },
  trucks: { key: 'trucks', name: 'Trucks', color: '#5b8cff' },
  classics: { key: 'classics', name: 'Classics', color: '#ffb020' },
  exotics: { key: 'exotics', name: 'Exotics', color: '#a57bff' },
}

export const ITEMS: CarItem[] = [
  { id: '1', name: "Спорткар 69', синій", series: 'muscle', year: '2024', art: 'muscle', price: 240, rarity: 2, status: 'stock', isNew: true },
  { id: '2', name: 'Позашляховик 4×4', series: 'offroad', year: 'тираж 5', art: 'suv', price: 0, rarity: 3, status: 'live' },
  { id: '3', name: "Пікап 80', чорний", series: 'trucks', year: '2023', art: 'pickup', price: 180, rarity: 1, status: 'stock' },
  { id: '4', name: "Хетчбек 87', жовтий", series: 'classics', year: '2022', art: 'hatch', price: 210, rarity: 1, status: 'sold' },
  { id: '5', name: "Купе 71', зелений", series: 'muscle', year: '2025', art: 'muscle', price: 320, rarity: 3, status: 'stock', isNew: true },
  { id: '6', name: 'Фургон доставки', series: 'trucks', year: '2024', art: 'pickup', price: 150, rarity: 1, status: 'stock' },
  { id: '7', name: 'Родстер Targa', series: 'exotics', year: '2025', art: 'muscle', price: 380, rarity: 3, status: 'stock', isNew: true },
  { id: '8', name: 'Баггі Dune', series: 'offroad', year: '2024', art: 'suv', price: 190, rarity: 1, status: 'stock' },
]

export const PRICE_TIERS = [
  { key: 't1', label: 'До 150', test: (p: number) => p > 0 && p <= 150 },
  { key: 't2', label: '150–200', test: (p: number) => p > 150 && p <= 200 },
  { key: 't3', label: '200–300', test: (p: number) => p > 200 && p <= 300 },
  { key: 't4', label: 'Ексклюзив', test: (p: number) => p > 300 || p === 0 },
]
