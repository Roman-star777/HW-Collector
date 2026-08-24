import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { BottomNav } from './components/BottomNav'
import { Home } from './screens/Home'
import { Garage } from './screens/Garage'
import { GarageSkins } from './screens/GarageSkins'
import { Auction } from './screens/Auction'
import { OffAuction } from './screens/OffAuction'
import { Catalog } from './screens/Catalog'
import { ItemDetail } from './screens/ItemDetail'
import { Profile } from './screens/Profile'
import { Admin } from './screens/Admin'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/garage/skins" element={<GarageSkins />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/offauction" element={<OffAuction />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <BottomNav />
    </>
  )
}
