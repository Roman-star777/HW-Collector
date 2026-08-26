let gid = 0

function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16)
  let r = (n >> 16) + amt, g = ((n >> 8) & 255) + amt, b = (n & 255) + amt
  r = Math.max(0, Math.min(255, r)); g = Math.max(0, Math.min(255, g)); b = Math.max(0, Math.min(255, b))
  return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)
}

const PATHS: Record<string, string> = {
  muscle: 'M4 31c0-4 3-6 8-7l17-1 13-9c3-2 6-3 10-3h20c4 0 7 1 9 4l9 9 17 2c4 1 6 3 6 6v4c0 2-1 3-3 3H7c-2 0-3-1-3-3z',
  suv: 'M5 31c0-4 2-6 7-7l4-1 9-11c2-3 5-4 9-4h27c4 0 7 1 9 4l8 11 22 2c4 1 6 3 6 6v4c0 2-1 3-3 3H8c-2 0-3-1-3-3z',
  pickup: 'M4 31c0-4 3-6 8-7l4-1 8-10c2-3 5-4 9-4h17c3 0 5 2 5 5v10h52c3 0 5 2 5 5v3c0 2-1 3-3 3H7c-2 0-3-1-3-3z',
  hatch: 'M6 31c0-4 3-6 8-7l12-1 14-11c3-2 6-3 10-3h14c4 0 7 2 9 5l10 10 15 2c4 1 5 3 5 6v3c0 2-1 3-3 3H9c-2 0-3-1-3-3z',
}

interface ProductShotProps {
  shape?: keyof typeof PATHS
  color: string
}

/**
 * "Товарний знімок" машинки для карток Новинок на Home screen —
 * не абстрактний плаский силует: перспективна підкладка (блістер),
 * сильніший градієнт/блік/тінь під колесами, щоб читалось як product
 * shot, а не як іконка. Використовується ТІЛЬКИ тут, CarIcon в інших
 * екранах не чіпається.
 */
export function ProductShot({ shape = 'muscle', color }: ProductShotProps) {
  const path = PATHS[shape] ?? PATHS.muscle
  const id = `shot-${gid++}`
  const light = shade(color, 70)
  const dark = shade(color, -60)
  return (
    <svg viewBox="0 0 128 60" className="product-shot">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={light} />
          <stop offset=".45" stopColor={color} />
          <stop offset="1" stopColor={dark} />
        </linearGradient>
        <radialGradient id={`${id}-shadow`} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#000" stopOpacity="0.55" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="64" cy="47" rx="46" ry="7" fill={`url(#${id}-shadow)`} />
      <g transform="translate(0,4)">
        <path d={path} fill={`url(#${id})`} />
        <path d={path} fill="none" stroke={light} strokeWidth="1" opacity="0.6" />
        <ellipse cx="50" cy="16" rx="28" ry="3.6" fill="#fff" opacity="0.35" />
        <circle cx="34" cy="38" r="8.5" fill="#0a0b0c" />
        <circle cx="34" cy="38" r="3.4" fill="#5a5d62" />
        <circle cx="96" cy="38" r="8.5" fill="#0a0b0c" />
        <circle cx="96" cy="38" r="3.4" fill="#5a5d62" />
      </g>
    </svg>
  )
}
