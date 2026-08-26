import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { CarIcon } from '../components/CarIcon'
import { ASYNC_LOTS } from '../data/asyncLots'
import { SERIES } from '../data/items'
import './shared.css'
import './OffAuction.css'

export function OffAuction() {
  const navigate = useNavigate()
  const [lots, setLots] = useState(ASYNC_LOTS)

  function bid(id: string) {
    setLots((prev) => prev.map((l) => (l.id === id ? { ...l, bid: l.bid + 30, bids: l.bids + 1 } : l)))
  }

  return (
    <div className="pad">
      <button className="back-link" onClick={() => navigate(-1)}>
        <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
        Назад
      </button>
      <h1 className="screen-title">Аукціон без ефіру</h1>
      <p className="screen-sub">Ставте будь-коли, без прив'язки до прямого ефіру. Лот закривається за таймером.</p>

      <div className="lots-list">
        {lots.map((lot) => {
          const series = SERIES[lot.series]
          return (
            <Card key={lot.id} className="lot-row">
              <div className="lot-row__art">
                <CarIcon shape={lot.art} color={series.color} glossy />
              </div>
              <div className="lot-row__body">
                <b>{lot.name}</b>
                <span>{series.name} · закриється через {lot.endsIn} · {lot.bids} ставок</span>
                <div className="lot-row__bottom">
                  <div>
                    <span className="lot-row__label">поточна ставка</span>
                    <b className="lot-row__amount">{lot.bid} ₴</b>
                  </div>
                  <Button variant="primary" size="sm" onClick={() => bid(lot.id)}>
                    Ставка +30
                  </Button>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
