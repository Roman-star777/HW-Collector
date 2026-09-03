import { ITEMS } from './items'

// Скринька: вибрані машинки, що чекають оплати. 2 заповнені слоти
// з 6 — ті самі товари, що в референс-макеті.
export const BOX_ITEMS = [ITEMS.find((i) => i.id === '1')!, ITEMS.find((i) => i.id === '3')!]
export const BOX_CAPACITY = 6
