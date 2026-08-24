const PATHS: Record<string, string> = {
  muscle:
    'M4 31c0-4 3-6 8-7l17-1 13-9c3-2 6-3 10-3h20c4 0 7 1 9 4l9 9 17 2c4 1 6 3 6 6v4c0 2-1 3-3 3H7c-2 0-3-1-3-3z',
  suv: 'M5 31c0-4 2-6 7-7l4-1 9-11c2-3 5-4 9-4h27c4 0 7 1 9 4l8 11 22 2c4 1 6 3 6 6v4c0 2-1 3-3 3H8c-2 0-3-1-3-3z',
  pickup:
    'M4 31c0-4 3-6 8-7l4-1 8-10c2-3 5-4 9-4h17c3 0 5 2 5 5v10h52c3 0 5 2 5 5v3c0 2-1 3-3 3H7c-2 0-3-1-3-3z',
  hatch:
    'M6 31c0-4 3-6 8-7l12-1 14-11c3-2 6-3 10-3h14c4 0 7 2 9 5l10 10 15 2c4 1 5 3 5 6v3c0 2-1 3-3 3H9c-2 0-3-1-3-3z',
}

let gid = 0

function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16)
  let r = (n >> 16) + amt
  let g = ((n >> 8) & 255) + amt
  let b = (n & 255) + amt
  r = Math.max(0, Math.min(255, r))
  g = Math.max(0, Math.min(255, g))
  b = Math.max(0, Math.min(255, b))
  return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)
}

interface CarIconProps {
  shape?: keyof typeof PATHS
  color: string
  glossy?: boolean
  className?: string
}

/** Силует машинки. glossy=true — градієнтна "лакова" версія (гараж, ефір). */
export function CarIcon({ shape = 'muscle', color, glossy, className }: CarIconProps) {
  const path = PATHS[shape] ?? PATHS.muscle

  if (!glossy) {
    return (
      <svg viewBox="0 0 128 48" className={className} aria-hidden="true">
        <path d={path} fill={color} />
        <circle cx="34" cy="38" r="8" fill="#0a0b0c" />
        <circle cx="34" cy="38" r="3" fill="rgba(255,255,255,.4)" />
        <circle cx="96" cy="38" r="8" fill="#0a0b0c" />
        <circle cx="96" cy="38" r="3" fill="rgba(255,255,255,.4)" />
      </svg>
    )
  }

  const id = `carg-${gid++}`
  const light = shade(color, 46)
  const dark = shade(color, -46)
  return (
    <svg viewBox="0 0 128 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={light} />
          <stop offset=".5" stopColor={color} />
          <stop offset="1" stopColor={dark} />
        </linearGradient>
      </defs>
      <path d={path} fill={`url(#${id})`} />
      <path d={path} fill="none" stroke={light} strokeWidth={1} opacity={0.5} />
      <ellipse cx="52" cy="17" rx="30" ry="4" fill="#fff" opacity={0.22} />
      <circle cx="34" cy="38" r="8.5" fill="#0a0b0c" />
      <circle cx="34" cy="38" r="3.4" fill="#4a4d52" />
      <circle cx="96" cy="38" r="8.5" fill="#0a0b0c" />
      <circle cx="96" cy="38" r="3.4" fill="#4a4d52" />
    </svg>
  )
}
