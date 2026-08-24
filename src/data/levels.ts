import type { LevelTier } from '../types'

// 10 рівних tier-ів по 10 рівнів (1-100), за п.16-17 дизайн-системи.
// Бізнес-логіка (скільки стелажів/бонусів на tier) НЕ зашита сюди —
// це чиста таблиця "рівень → tier → назва → бейдж". Інші правила
// (кількість відкритих стелажів тощо) рахуються окремо, дивись shelves.ts.
export const LEVEL_TIERS: LevelTier[] = [
  { tier: 1, name: 'Новачок', minLevel: 1, maxLevel: 10, badge: 'badge_01' },
  { tier: 2, name: 'Любитель', minLevel: 11, maxLevel: 20, badge: 'badge_02' },
  { tier: 3, name: 'Стажист', minLevel: 21, maxLevel: 30, badge: 'badge_03' },
  { tier: 4, name: 'Колекціонер', minLevel: 31, maxLevel: 40, badge: 'badge_04' },
  { tier: 5, name: 'Ентузіаст', minLevel: 41, maxLevel: 50, badge: 'badge_05' },
  { tier: 6, name: 'Знавець', minLevel: 51, maxLevel: 60, badge: 'badge_06' },
  { tier: 7, name: 'Експерт', minLevel: 61, maxLevel: 70, badge: 'badge_07' },
  { tier: 8, name: 'Майстер', minLevel: 71, maxLevel: 80, badge: 'badge_08' },
  { tier: 9, name: 'Елітний', minLevel: 81, maxLevel: 90, badge: 'badge_09' },
  { tier: 10, name: 'Легенда', minLevel: 91, maxLevel: 100, badge: 'badge_10' },
]

/**
 * 1-100 → відповідний tier. Єдина точка правди для визначення
 * рівня користувача — компонент LevelBadge викликає саме цю функцію,
 * а не тримає свою копію таблиці.
 */
export function levelTierOf(level: number): LevelTier {
  const clamped = Math.min(100, Math.max(1, level))
  return (
    LEVEL_TIERS.find((t) => clamped >= t.minLevel && clamped <= t.maxLevel) ??
    LEVEL_TIERS[0]
  )
}
