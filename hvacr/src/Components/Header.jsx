import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 shadow-md safe-area-top" style={{backdropFilter: 'blur(10px)'}}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-xl">HVAC</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-primary">CoolAir</h1>
              <p className="text-xs text-gray-600 hidden sm:block">HVACR Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition-colors hover:text-primary text-sm xl:text-base ${
                    isActive ? 'text-primary border-b-2 border-primary' : 'text-gray-900'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <div>
                <p className="text-xs font-semibold">24/7 Service</p>
                <p className="text-primary font-bold text-sm">1-800-COOL-AIR</p>
              </div>
            </div>
            <Link to="/contact" className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm">
              Get Quote
            </Link>
          </div>

          {/* Tablet Contact Info */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            <Link to="/contact" className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden lg:flex xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden lg:flex xl:hidden border-t bg-white/10 backdrop-blur-lg absolute left-0 right-0 top-full shadow-lg">
            <div className="container-custom">
              <div className="flex flex-col py-4 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `font-medium py-3 px-2 rounded-lg transition-colors ${
                        isActive 
                          ? 'text-primary bg-blue-50' 
                          : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
                
                {/* Mobile Contact Section */}
                <div className="pt-4 mt-4 border-t space-y-3">
                  <div className="flex items-center space-x-3 px-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">24/7 Emergency</p>
                      <p className="text-primary font-bold">1-800-COOL-AIR</p>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 w-full text-center block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header