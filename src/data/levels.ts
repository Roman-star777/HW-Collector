import type { LevelTier } from '../types'

// 10 рівних tier-ів по 10 рівнів (1-100), за п.16-17 дизайн-системи.
// Перші 4 назви й кольори — прямо з еталону (розділ 14: ROOKIE/
// STREET/PRO/ELITE). Тир 5-10 — узгоджене продовження того самого
// стилю (англомовні, ігрові), до отримання окремого пакету 10
// іконок-бейджів. Бізнес-логіка (стелажі/бонуси на tier) НЕ зашита
// сюди — це чиста таблиця "рівень → tier → назва → колір/бейдж".
export const LEVEL_TIERS: LevelTier[] = [
  { tier: 1, name: 'ROOKIE', minLevel: 1, maxLevel: 10, badge: 'badge_01', color: '#a56a28' },
  { tier: 2, name: 'STREET', minLevel: 11, maxLevel: 20, badge: 'badge_02', color: '#b9c2cc' },
  { tier: 3, name: 'PRO', minLevel: 21, maxLevel: 30, badge: 'badge_03', color: '#ffb020' },
  { tier: 4, name: 'ELITE', minLevel: 31, maxLevel: 40, badge: 'badge_04', color: '#4c8dff' },
  { tier: 5, name: 'MASTER', minLevel: 41, maxLevel: 50, badge: 'badge_05', color: '#9b6cff' },
  { tier: 6, name: 'CHAMPION', minLevel: 51, maxLevel: 60, badge: 'badge_06', color: '#ff5a32' },
  { tier: 7, name: 'LEGEND', minLevel: 61, maxLevel: 70, badge: 'badge_07', color: '#19b77a' },
  { tier: 8, name: 'ICON', minLevel: 71, maxLevel: 80, badge: 'badge_08', color: '#ffb020' },
  { tier: 9, name: 'MYTHIC', minLevel: 81, maxLevel: 90, badge: 'badge_09', color: '#ffd27a' },
  { tier: 10, name: 'GOAT', minLevel: 91, maxLevel: 100, badge: 'badge_10', color: '#ffffff' },
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
