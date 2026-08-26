import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { CarIcon } from '../components/CarIcon'
import { ITEMS, SERIES } from '../data/items'
import './shared.css'
import './ItemDetail.css'

export function ItemDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = ITEMS.find((i) => i.id === id)
  const [bought, setBought] = useState(false)

  if (!item) {
    return (
      <div className="pad">
        <p className="note">Товар не знайдено.</p>
        <Button variant="secondary" size="sm" onClick={() => navigate(-1)}>Назад</Button>
      </div>
    )
  }

  const series = SERIES[item.series]

  return (
    <div className="pad">
      <button className="back-link" onClick={() => navigate(-1)}>
        <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
        Назад
      </button>

      <div className="item-stage">
        <span className="item-stage__glow" style={{ background: series.color }} />
        <CarIcon shape={item.art} color={series.color} glossy className="item-stage__car" />
      </div>

      <div className="item-info">
        <span className="item-info__series">{series.name}</span>
        <h1 className="item-info__name">{item.name}</h1>
        <p className="item-info__year">{item.year}</p>
      </div>

      <Card className="item-buy">
        {item.status === 'live' ? (
          <>
            <b>Цей лот зараз на аукціоні</b>
            <Button variant="primary" size="sm" style={{ width: '100%', marginTop: 10 }} onClick={() => navigate('/auction')}>
              Перейти в ефір
            </Button>
          </>
        ) : item.status === 'sold' ? (
          <b className="item-buy__sold">Уже продано</b>
        ) : (
          <>
            <div className="item-buy__price">
              <span>Ціна</span>
              <b>{item.price} ₴</b>
            </div>
            <Button variant="primary" size="sm" style={{ width: '100%', marginTop: 12 }} disabled={bought} onClick={() => setBought(true)}>
              {bought ? 'Додано в скриньку' : 'Купити'}
            </Button>
          </>
        )}
      </Card>
    </div>
  )
}
