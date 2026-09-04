import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Badge } from '../components/Badge'
import * as A from './auctionAssets'
import type { Bid } from '../types'
import './shared.css'
import './Auction.css'

const INITIAL_BIDS: Bid[] = [
  { user: '@kolektsioner_ua', amount: 420 },
  { user: '@maks_hw', amount: 390 },
  { user: '@olena.toys', amount: 350 },
]

export function Auction() {
  const [bids, setBids] = useState(INITIAL_BIDS)
  const current = bids[0].amount

  function bid() {
    setBids((prev) => [{ user: 'Ви', amount: prev[0].amount + 30 }, ...prev])
  }

  return (
    <div className="pad">
      <div className="live-bar">
        <Badge variant="live">● Ефір іде · 37 глядачів</Badge>
        <span className="live-bar__clock">00:27</span>
      </div>

      <h1 className="screen-title">Лот 7 з 24</h1>
      <p className="screen-sub">Позашляховик 4×4 · рідкісний, тираж 5</p>

      {/* Сцена з макета — актуальний лот (позашляховик, зелений) збігається з демо-даними */}
      <div className="stage2" style={{ aspectRatio: `1 / ${A.A_STAGE_RATIO}`, backgroundImage: `url(${A.A_STAGE})` }} />

      <Card className="bid-card">
        <div className="bid-grid">
          <div className="bid-left">
            <div className="bid-amount">
              <span className="bid-amount__num">{current}</span>
              <span className="bid-amount__unit">₴ · {bids[0].user}</span>
            </div>
            <div className="bid-list">
              {bids.slice(0, 3).map((b, i) => (
                <div key={i}>
                  <span>{b.user}</span>
                  <span>{b.amount} ₴</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bid-right">
            <Button variant="primary" size="sm" onClick={bid}>
              Ставка {current + 30}
            </Button>
            <Button variant="secondary" size="sm">
              Авто
            </Button>
          </div>
        </div>
      </Card>

      {/* Рядок статистики ефіру — новий блок за референсом */}
      <div className="live-stats">
        <div className="live-stats__col">
          <svg viewBox="0 0 24 24"><path d="M17 20v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" /><circle cx="10" cy="7" r="3.5" /><path d="M21 20v-1a4 4 0 0 0-3-3.9" /><path d="M16.5 3.6A3.5 3.5 0 0 1 19 7a3.5 3.5 0 0 1-2.5 3.4" /></svg>
          <div>
            <b>37</b>
            <span>глядачів</span>
          </div>
        </div>
        <div className="live-stats__col">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
          <div>
            <b>15 сек</b>
            <span>до кінця ставки</span>
          </div>
        </div>
        <div className="live-stats__col">
          <svg viewBox="0 0 24 24"><path d="M12 21c-4.5-1.8-7-5.2-7-9.5V6l7-2.5L19 6v5.5c0 4.3-2.5 7.7-7 9.5z" /><path d="M9 11l2 2 4-4" /></svg>
          <div>
            <span className="live-stats__label">полиця гаража</span>
            <b className="live-stats__ok">активна</b>
          </div>
        </div>
      </div>

      <p className="note">Ставка в останні 15 секунд продовжує таймер. Виграш стає на полицю гаража.</p>
    </div>
  )
}
