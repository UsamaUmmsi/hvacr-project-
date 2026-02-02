import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import CaseStudies from './pages/CaseStudies'
import Loader from './Components/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    // Check if this is the first load
    const hasLoaded = sessionStorage.getItem('hasLoaded')
    
    if (hasLoaded) {
      setIsLoading(false)
      setIsFirstLoad(false)
    } else {
      // Simulate loading time for first visit
      const timer = setTimeout(() => {
        setIsLoading(false)
        sessionStorage.setItem('hasLoaded', 'true')
      }, 3000) // Minimum 3 seconds loading

      return () => clearTimeout(timer)
    }
  }, [])

  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  if (isLoading && isFirstLoad) {
    return <Loader onComplete={handleLoaderComplete} />
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App