# HW Collector

React + TypeScript + Vite версія застосунку. Побудована за
`HW COLLECTOR — MASTER DESIGN SYSTEM v1.0`.

## Що вже готово

- Дизайн-токени (`src/styles/tokens.css`) — кольори/шрифти/радіуси/
  відступи точно за документом.
- Базові компоненти: `Card`, `Button` (primary/secondary/gold),
  `Chip`, `ListItem`, `LevelBadge`, `CarCard`, `Header`, `BottomNav`.
- Система рівнів: `src/data/levels.ts` — 10 tier-ів по 10 рівнів,
  функція `levelTierOf(level)`.
- Система стелажів: `src/data/shelves.ts` — 5 іменованих стелажів
  (Factory/Underground/Racing/Luxury/Vault), незалежних від
  автомобілів.
- 4 основні екрани (відповідають нижній навігації): Головна, Гараж
  (карусель стелажів), Ефір (ставки), Профіль.
- Навігація через `react-router-dom`.

## Що ще НЕ перенесено з прототипу

Каталог (окремий екран з фільтром за серією), картка товару, екран
«Аукціон без ефіру», вибір оформлення (`s-skins`), адмінка
(прийом партії). Зараз `/catalog` тимчасово веде на Головну —
заглушка, щоб роутинг не падав. Кожен з цих екранів будується за
тим самим патерном: нова папка в `src/screens/`, ті самі базові
компоненти (`Card`, `Button`, `ListItem`, `Chip`, `CarCard`).

## Встановлення й запуск

Потрібен Node.js 18+.

```bash
npm install
npm run dev
```
Відкриє застосунок на `http://localhost:5173`.

Production-збірка (перевірка, що все компілюється без помилок):
```bash
npm run build
npm run preview
```

## Завантаження на GitHub

```bash
git init
git add .
git commit -m "HW Collector: React foundation"
git branch -M main
git remote add origin https://github.com/ВАШ_ЛОГІН/НАЗВА_РЕПО.git
git push -u origin main
```
`node_modules` і `dist` вже в `.gitignore` — не потраплять у репозиторій.

## Структура проєкту

```
src/
  components/   — переюзабельні UI-компоненти (Card, Button, Chip…)
  data/         — дані застосунку (levels.ts, shelves.ts, items.ts)
  screens/      — екрани (Home, Garage, Auction, Profile)
  styles/       — дизайн-токени (tokens.css)
  types/        — спільні TypeScript-типи
  App.tsx       — маршрутизація
  main.tsx      — точка входу
```

## Наступні кроки (рекомендований порядок)

1. Перенести Каталог + картку товару, перевикористовуючи `CarCard`.
2. Перенести «Аукціон без ефіру» — той самий `bid`-патерн, що в Ефірі.
3. Перенести вибір оформлення гаража — вибір `shelfConfig` для
   конкретного слота (зараз усі 9 слотів одного стелажа показують
   один і той самий контент — це демо-заглушка).
4. Підключити реальні дані (Supabase) замість `src/data/*.ts`-заглушок.
