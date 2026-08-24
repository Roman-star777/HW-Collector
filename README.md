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
- **9 екранів**: Головна, Гараж (карусель стелажів), Оформлення
  гаража, Ефір (ставки), Аукціон без ефіру (окремі асинхронні
  ставки), Каталог (фільтр за серією), Картка товару, Профіль,
  Адмінка (розпізнавання партії, неоплачені замовлення).
- Навігація через `react-router-dom`, спільні класи (`.card`,
  `.chip`, `.section-title`, `.back-link`) винесені в
  `src/screens/shared.css`, щоб не дублювались по екранах.

## Що ще НЕ перенесено

Реальні дані — усе ще в `src/data/*.ts`-заглушках. Підключення
Supabase (авторизація, реальний каталог, реальні ставки/скринька) —
наступний великий крок.

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

## Наступний крок

Підключити реальні дані (Supabase) замість `src/data/*.ts`-заглушок:
авторизація, реальний каталог, реальні ставки й скринька.
