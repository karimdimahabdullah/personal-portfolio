import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import ScrollToTop from './components/ScrollToTop.jsx'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import Work from './components/Work.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

/* Keyed on the path so each page remounts and replays its entrance animation. */
function Pages() {
  const { pathname } = useLocation()

  return (
    <main id="main" key={pathname} className="page" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  )
}

export default function App() {
  /* A plain "#main" link would break HashRouter, so skip via focus instead. */
  const skipToContent = () => document.getElementById('main')?.focus()

  return (
    <HashRouter>
      <ScrollToTop />
      <button type="button" className="skip-link" onClick={skipToContent}>
        Skip to content
      </button>
      <Nav />
      <Pages />
      <Footer />
    </HashRouter>
  )
}
