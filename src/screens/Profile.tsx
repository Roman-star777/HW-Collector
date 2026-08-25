import { Card } from '../components/Card'
import { ListItem } from '../components/ListItem'
import { Button } from '../components/Button'
import { LevelBadge } from '../components/LevelBadge'
import { ProgressBar } from '../components/ProgressBar'
import { levelTierOf } from '../data/levels'
import { Link } from 'react-router-dom'
import './shared.css'
import './Profile.css'

const CURRENT_LEVEL = 37
const XP_CURRENT = 2740
const XP_NEXT = 4000

const ACTIVITY = [
  { title: 'Історія покупок', subtitle: 'Переглянути всі покупки', icon: 'M3 4h18v17H3z M3 9h18' },
  { title: 'Історія виграшів', subtitle: 'Твої перемоги в ефірах', icon: 'M8 4h8v5a4 4 0 0 1-8 0z' },
  { title: 'Переглянуті лоти', subtitle: 'Останні перегляди', icon: 'M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0 M12 7v5l3.5 2' },
  { title: 'Обране', subtitle: 'Лоти та машинки в обраному', icon: 'M12 20s-7-4.4-9.3-8.8C1.4 8 3 5 6.2 5c1.9 0 3.3 1 4.4 2.7C11.7 6 13.1 5 15 5c3.2 0 4.8 3 3.5 6.2C16.2 15.6 12 20 12 20z' },
]

const SETTINGS = [
  { title: 'Редагувати профіль', subtitle: 'Зміна аватара, імені та інформації', icon: 'M12 8m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0 M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6' },
  { title: 'Безпека', subtitle: 'Пароль та захист акаунта', icon: 'M5 11h14v9H5z M8 11V8a4 4 0 0 1 8 0v3' },
]

const COLLECTION_STATS = [
  { label: 'Машинки', value: 78 },
  { label: 'Стелажі', value: 2 },
  { label: 'Рідкісні', value: 12 },
  { label: 'Обмін', value: 4 },
]

export function Profile() {
  const tier = levelTierOf(CURRENT_LEVEL)
  return (
    <div className="pad">
      <Card variant="premium" className="profile-avatar-card">
        <span className="profile-avatar">АК</span>
        <div className="profile-avatar__info">
          <b>Андрій К.</b>
          <span>
            Рівень {CURRENT_LEVEL} · {tier.name.toLowerCase()}
          </span>
          <ProgressBar value={(XP_CURRENT / XP_NEXT) * 100} label={`${XP_CURRENT} / ${XP_NEXT} XP`} />
        </div>
        <LevelBadge level={CURRENT_LEVEL} size="sm" showLabel={false} />
      </Card>

      <div className="stat-row">
        <div>
          <b>14</b>
          <span>покупок</span>
        </div>
        <div>
          <b>3</b>
          <span>виграшів</span>
        </div>
      </div>

      <Card variant="premium" className="club-card">
        <b>Клуб колекціонерів</b>
        <span>Отримуй ексклюзивні можливості та бонуси щомісяця!</span>
        <Button variant="gold" size="sm" style={{ marginTop: 12, width: '100%' }}>
          Вступити в клуб
        </Button>
      </Card>

      <h2 className="section-title">Моя колекція</h2>
      <div className="collection-grid">
        {COLLECTION_STATS.map((s) => (
          <div key={s.label} className="collection-tile">
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <h2 className="section-title">Моя активність</h2>
      <Card className="list-card">
        {ACTIVITY.map((a) => (
          <ListItem
            key={a.title}
            title={a.title}
            subtitle={a.subtitle}
            icon={
              <svg viewBox="0 0 24 24">
                <path d={a.icon} />
              </svg>
            }
            onClick={() => {}}
          />
        ))}
      </Card>

      <h2 className="section-title">Налаштування</h2>
      <Card className="list-card">
        {SETTINGS.map((a) => (
          <ListItem
            key={a.title}
            title={a.title}
            subtitle={a.subtitle}
            icon={
              <svg viewBox="0 0 24 24">
                <path d={a.icon} />
              </svg>
            }
            onClick={() => {}}
          />
        ))}
      </Card>

      <Link to="/admin" className="admin-link">
        Для власника · відкрити адмінку
      </Link>
    </div>
  )
}
