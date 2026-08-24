import { Card } from './Card'
import { Badge } from './Badge'
import { Button } from './Button'
import './AuctionCard.css'

interface AuctionCardProps {
  title: string
  subtitle: string
  timer?: string
  ctaLabel: string
  onCta?: () => void
  onClick?: () => void
}

/**
 * Auction Card (розділ 13 дизайн-системи): dark metal, червоний
 * LIVE-бейдж + таймер, заголовок, опис, CTA. Один компонент для
 * банера на Головній і будь-якого іншого місця, де показується
 * "зараз триває ефір" — замість ручного дублювання розмітки.
 */
export function AuctionCard({ title, subtitle, timer, ctaLabel, onCta, onClick }: AuctionCardProps) {
  return (
    <Card variant="active" className="auction-card" onClick={onClick}>
      <div className="auction-card__top">
        <Badge variant="live">● Live</Badge>
        {timer && <span className="auction-card__timer">{timer}</span>}
      </div>
      <b className="auction-card__title">{title}</b>
      <span className="auction-card__subtitle">{subtitle}</span>
      <Button
        variant="primary"
        size="sm"
        style={{ marginTop: 10 }}
        onClick={(e) => {
          e.stopPropagation()
          onCta?.()
        }}
      >
        {ctaLabel}
      </Button>
    </Card>
  )
}
