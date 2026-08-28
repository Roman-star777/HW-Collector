import { Badge } from './Badge'
import './AuctionCard.css'

interface AuctionCardProps {
  title: string
  subtitle: string
  timer?: string
  ctaLabel?: string
  onCta?: () => void
  onClick?: () => void
}

/** Auction Card — горизонтальний LIVE-рядок: бейдж + заголовок/опис + таймер + шеврон. */
export function AuctionCard({ title, subtitle, timer, onClick }: AuctionCardProps) {
  return (
    <div className="auction-row" onClick={onClick}>
      <span className="auction-row__rivet auction-row__rivet--tl" />
      <span className="auction-row__rivet auction-row__rivet--br" />
      <div className="auction-row__badge">
        <Badge variant="live">● Live</Badge>
      </div>
      <div className="auction-row__text">
        <b>{title}</b>
        <span>{subtitle}</span>
      </div>
      {timer && <span className="auction-row__timer">{timer}</span>}
      <svg className="auction-row__chevron" viewBox="0 0 24 24">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </div>
  )
}
