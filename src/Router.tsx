import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Sucess } from './pages/Sucess'
import { useContext } from 'react'
import { OrderContext } from './contexts/OrderContext'

export function Router() {
  const { newClientOrder } = useContext(OrderContext)
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        {newClientOrder && <Route path="/sucess" element={<Sucess />} />}
      </Route>
    </Routes>
  )
}
