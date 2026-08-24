import { useState } from 'react'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { CarIcon } from '../components/CarIcon'
import type { Bid } from '../types'
import './Auction.css'

const INITIAL_BIDS: Bid[] = [
  { user: '@kolektsioner_ua', amount: 420 },
  { user: '@maks_hw', amount: 390 },
  { user: '@olena.toys', amount: 350 },
]

export function Auction() {
  const [bids, setBids] = useState(INITIAL_BIDS)
  const current = bids[0].amount

  function placeBid() {
    setBids((prev) => [{ user: 'Ви', amount: prev[0].amount + 30 }, ...prev])
  }

  return (
    <div className="pad">
      <div className="live-bar">
        <span className="live-bar__dot">
          <i /> Ефір іде · 37 глядачів
        </span>
        <span className="live-bar__clock">00:27</span>
      </div>

      <h1 className="lot-title">Лот 7 з 24</h1>
      <p className="lot-sub">Позашляховик 4×4 · рідкісний, тираж 5</p>

      <div className="stage">
        <CarIcon shape="suv" color="#20b486" glossy className="stage__car" />
      </div>

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
            <Button variant="primary" size="sm" onClick={placeBid}>
              Ставка {current + 30}
            </Button>
            <Button variant="secondary" size="sm">
              Авто
            </Button>
          </div>
        </div>
      </Card>
      <p className="note">
        Ставка в останні 15 секунд продовжує таймер. Виграш стає на полицю гаража.
      </p>
    </div>
  )
}
