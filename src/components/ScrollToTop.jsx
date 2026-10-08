import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Without this, navigating to a new page keeps the old scroll position. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
