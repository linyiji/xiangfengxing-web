import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { PendingPage } from './components/PendingPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => { if (!location.state) window.scrollTo(0,0) }, [location.pathname, location.state])
  return null
}

export default function App() {
  return <>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/vefin" element={<PendingPage routeKey="vefin" />} />
      <Route path="/products/voice" element={<PendingPage routeKey="voice" />} />
      <Route path="/products/brand-ip" element={<PendingPage routeKey="brand" />} />
      <Route path="/developers" element={<PendingPage routeKey="developers" />} />
      <Route path="/developers/api" element={<PendingPage routeKey="api" />} />
      <Route path="/developers/mcp" element={<PendingPage routeKey="mcp" />} />
      <Route path="/work/web3" element={<PendingPage routeKey="work" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
}
