import { Link } from 'react-router-dom'
import { Rivets } from './Rivets'
import { LevelBadge } from '../components/LevelBadge'
import { ProgressBar } from '../components/ProgressBar'
import { levelTierOf } from '../data/levels'
import './shared.css'
import './metal-panel.css'
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
  { label: 'Машинки', value: 78, icon: 'M5 17h14M5 17V9l2-4h10l2 4v8M5 13h14 M8 17a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2M16 17a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2', color: 'var(--red)' },
  { label: 'Стелажі', value: 2, icon: 'M4 4h16v16H4z M4 10h16M4 16h16M8 4v4M8 16v4M16 4v4M16 16v4', color: 'var(--accent)' },
  { label: 'Рідкісні', value: 12, icon: 'M12 2l7 7-7 13L5 9z', color: 'var(--status-purple)' },
  { label: 'Обмін', value: 4, icon: 'M17 2l4 4-4 4M21 6H3M7 22l-4-4 4-4M3 18h18', color: 'var(--status-success)' },
]

function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-sectionhead">
      <span className="p-sectionhead__dash" />
      <h2>{children}</h2>
      <span className="p-sectionhead__hatch" />
    </div>
  )
}

export function Profile() {
  const tier = levelTierOf(CURRENT_LEVEL)

  return (
    <div className="pad profile-pad">
      <div className="metal-panel player-row mt16">
        <Rivets />
        <LevelBadge level={CURRENT_LEVEL} size="md" />
        <div className="player-row__info">
          <b>Андрій К.</b>
          <span>Рівень {CURRENT_LEVEL} · {tier.name.charAt(0) + tier.name.slice(1).toLowerCase()}</span>
          <ProgressBar value={(XP_CURRENT / XP_NEXT) * 100} variant="primary" />
        </div>
        <svg className="player-row__chevron" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
      </div>

      <SectionHead>Моя колекція</SectionHead>
      <div className="metal-panel tiles-panel">
        <Rivets />
        {COLLECTION_STATS.map((s) => (
          <div key={s.label} className="metal-panel mini-tile">
            <b style={{ color: s.color }}><svg viewBox="0 0 24 24" style={{ stroke: s.color }}><path d={s.icon} /></svg></b>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <SectionHead>Моя активність</SectionHead>
      <div className="p-rows">
        {ACTIVITY.map((a) => (
          <div key={a.title} className="metal-panel p-row">
            <Rivets />
            <span className="p-row__icon"><svg viewBox="0 0 24 24"><path d={a.icon} /></svg></span>
            <div className="p-row__text"><b>{a.title}</b><span>{a.subtitle}</span></div>
            <svg className="p-row__chevron" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
          </div>
        ))}
      </div>

      <SectionHead>Налаштування</SectionHead>
      <div className="p-rows">
        {SETTINGS.map((a) => (
          <div key={a.title} className="metal-panel p-row">
            <Rivets />
            <span className="p-row__icon"><svg viewBox="0 0 24 24"><path d={a.icon} /></svg></span>
            <div className="p-row__text"><b>{a.title}</b><span>{a.subtitle}</span></div>
            <svg className="p-row__chevron" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
          </div>
        ))}
        <Link to="/admin" className="metal-panel metal-panel--gold p-row p-row--admin">
          <Rivets />
          <span className="p-row__icon p-row__icon--gold"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1z" /></svg></span>
          <div className="p-row__text"><b>Для власника · відкрити адмінку</b></div>
          <svg className="p-row__chevron" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
        </Link>
      </div>
    </div>
  )
}
