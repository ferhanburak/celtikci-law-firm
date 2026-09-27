import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Sayfa değiştiğinde (route değişiminde) otomatik olarak en üste kaydırır.
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
