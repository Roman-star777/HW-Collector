import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { BottomNav } from './components/BottomNav'
import { Home } from './screens/Home'
import { Garage } from './screens/Garage'
import { Auction } from './screens/Auction'
import { Profile } from './screens/Profile'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/profile" element={<Profile />} />
          {/* каталог, картка товару, адмінка, оформлення — наступні кроки, див. README */}
          <Route path="/catalog" element={<Home />} />
        </Routes>
      </main>
      <BottomNav />
    </>
  )
}
