import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { CarIcon } from '../components/CarIcon'
import { RECOGNIZED_BATCH } from '../data/recognizedBatch'
import { SERIES } from '../data/items'
import './shared.css'
import './Admin.css'

const UNPAID = [
  { id: 'u1', name: "Позашляховик 4×4", price: 260, buyer: '@olena.toys' },
  { id: 'u2', name: "Купе 71', зелений", price: 320, buyer: '@maks_hw' },
]

export function Admin() {
  const navigate = useNavigate()
  const [scanned, setScanned] = useState(false)

  return (
    <div className="pad">
      <button className="back-link" onClick={() => navigate('/profile')}>
        <svg viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Профіль
      </button>
      <h1 className="screen-title">Адмінка</h1>
      <p className="screen-sub">Прийом партії, ручне додавання, неоплачені замовлення.</p>

      <h2 className="section-title">Прийом партії</h2>
      <Card>
        {!scanned ? (
          <>
            <p className="admin-hint">Сфотографуйте лоток із машинками — система розпізнає назву й серію за блістером.</p>
            <Button variant="primary" size="sm" style={{ width: '100%' }} onClick={() => setScanned(true)}>
              Розпізнати партію (демо)
            </Button>
          </>
        ) : (
          <>
            <p className="admin-hint">
              Розпізнано {RECOGNIZED_BATCH.length} з {RECOGNIZED_BATCH.length} · 4 секунди
            </p>
            <div className="scan-list">
              {RECOGNIZED_BATCH.map((r) => (
                <div key={r.id} className="scan-row">
                  <span className="scan-row__art">
                    <CarIcon shape={r.art} color={SERIES[r.series].color} />
                  </span>
                  <div className="scan-row__body">
                    <b>{r.name}</b>
                    <span>{SERIES[r.series].name}</span>
                  </div>
                  <span className={`scan-row__conf${r.confidence < 85 ? ' scan-row__conf--low' : ''}`}>
                    {r.confidence}%
                  </span>
                </div>
              ))}
            </div>
            <Button variant="primary" size="sm" style={{ width: '100%', marginTop: 12 }}>
              Опублікувати всі
            </Button>
          </>
        )}
      </Card>

      <h2 className="section-title">Неоплачені замовлення</h2>
      <Card style={{ padding: '4px 16px' }}>
        {UNPAID.map((u) => (
          <div key={u.id} className="unpaid-row">
            <div>
              <b>{u.name}</b>
              <span>{u.buyer}</span>
            </div>
            <span className="unpaid-row__price">{u.price} ₴</span>
          </div>
        ))}
      </Card>
    </div>
  )
}
