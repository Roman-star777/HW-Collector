import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Chip } from '../components/Chip'
import { ProductShot } from './ProductShot'
import { ITEMS, SERIES } from '../data/items'
import type { SeriesKey } from '../types'
import * as A from './homeAssets'
import './shared.css'
import './Home.css'

// картки з референс-макета, що збігаються з реальними товарами за назвою
const MATCHED_CARD_BG: Record<string, string> = {
  '1': A.BG_CARD1, // Спорткар 69', червоний
  '3': A.BG_CARD2, // Пікап 80', чорний
  '5': A.BG_CARD3, // Купе 71', зелений
}

interface ImgPanelProps {
  src: string
  ratio: number
  className?: string
  onClick?: () => void
  children?: React.ReactNode
}

/** Панель з макета як фон, з фіксованим співвідношенням сторін (щоб проценти дітей завжди влучали в те саме місце). */
function ImgPanel({ src, ratio, className, onClick, children }: ImgPanelProps) {
  return (
    <div
      className={['img-panel', className].filter(Boolean).join(' ')}
      style={{ aspectRatio: `1 / ${ratio}`, backgroundImage: `url(${src})` }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export function Home() {
  const navigate = useNavigate()
  const [freshFilter, setFreshFilter] = useState<SeriesKey | 'all'>('all')

  const freshItems = useMemo(
    () =>
      ITEMS.filter((i) => i.status === 'stock').filter(
        (i) => freshFilter === 'all' || i.series === freshFilter
      ),
    [freshFilter]
  )

  return (
    <div className="pad home-pad2">
      {/* Картка гравця — макет як є (демо-дані XP/рівня зараз статичні й в коді, і в макеті) */}
      <ImgPanel src={A.BG_LEVEL} ratio={A.RATIOS.bg_level} className="mt16" />

      {/* Статистика */}
      <ImgPanel src={A.BG_STATS} ratio={A.RATIOS.bg_stats} className="mt10" />

      {/* Клуб колекціонерів — реальна кнопка поверх намальованої */}
      <ImgPanel src={A.BG_CLUB} ratio={A.RATIOS.bg_club} className="mt10">
        <button className="hit hit-club" onClick={() => {}} aria-label="Вступити в клуб" />
      </ImgPanel>

      {/* Моя колекція — реальний клік по "Переглянути всю" */}
      <ImgPanel src={A.BG_COLLECTION} ratio={A.RATIOS.bg_collection} className="mt10">
        <button className="hit hit-collection-link" onClick={() => navigate('/catalog')} aria-label="Переглянути всю колекцію" />
      </ImgPanel>

      {/* Новинки: заголовок з макета + реальні чіпи */}
      <ImgPanel src={A.BG_NEWHEAD} ratio={A.RATIOS.bg_newhead} className="mt16">
        <button className="hit hit-newhead-link" onClick={() => navigate('/catalog')} aria-label="Усі категорії" />
      </ImgPanel>
      <div className="chip-row mt8">
        <Chip label="Усі" active={freshFilter === 'all'} onClick={() => setFreshFilter('all')} />
        {Object.values(SERIES).map((s) => (
          <Chip key={s.key} label={s.name} active={freshFilter === s.key} onClick={() => setFreshFilter(s.key)} />
        ))}
      </div>

      <div className="products-rail mt10">
        {freshItems.map((item) => {
          const series = SERIES[item.series]
          const matchedBg = MATCHED_CARD_BG[item.id]
          return (
            <div key={item.id} className="product-card3" onClick={() => navigate(`/item/${item.id}`)}>
              {matchedBg ? (
                <img src={matchedBg} alt={item.name} className="product-card3__img" />
              ) : (
                <div className="product-card3__fallback">
                  {item.isNew && <span className="pc3-new">NEW</span>}
                  <button className="pc3-fav" onClick={(e) => e.stopPropagation()} aria-label="Обране">
                    <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9.3-8.8C1.4 8 3 5 6.2 5c1.9 0 3.3 1 4.4 2.7C11.7 6 13.1 5 15 5c3.2 0 4.8 3 3.5 6.2C16.2 15.6 12 20 12 20z" /></svg>
                  </button>
                  <div className="pc3-art">
                    <ProductShot shape={item.art} color={series.color} />
                  </div>
                  <div className="pc3-body">
                    <b>{item.name}</b>
                    <span>{item.year}</span>
                    <div className="pc3-bottom">
                      <span className="pc3-price">{item.price} грн</span>
                      <button className="pc3-cart" onClick={(e) => e.stopPropagation()} aria-label="У кошик">
                        <svg viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.6L21 7H6" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className="rail-dots">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className={i === 0 ? 'rail-dot rail-dot--on' : 'rail-dot'} />
        ))}
      </div>

      {/* Ефір зараз */}
      <ImgPanel src={A.BG_LIVE} ratio={A.RATIOS.bg_live} className="mt10" onClick={() => navigate('/auction')} />

      {/* Аукціон без ефіру */}
      <ImgPanel src={A.BG_OFF} ratio={A.RATIOS.bg_off} className="mt10" onClick={() => navigate('/offauction')} />
    </div>
  )
}
