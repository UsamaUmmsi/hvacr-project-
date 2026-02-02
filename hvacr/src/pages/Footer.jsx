import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer = () => {
  const services = [
    { name: 'AC Installation', link: '/services#ac-installation' },
    { name: 'AC Repair', link: '/services#ac-repair' },
    { name: 'HVAC Maintenance', link: '/services#maintenance' },
    { name: 'Commercial HVAC', link: '/services#commercial' },
    { name: 'Refrigeration', link: '/services#refrigeration' },
    { name: 'Heating Systems', link: '/services#heating' },
  ]

  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Case Studies', link: '/case-studies' },
    { name: 'Contact', link: '/contact' },
    { name: 'Blog', link: '/blog' },
  ]

  const socialLinks = [
    { icon: Facebook, link: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, link: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, link: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">HVAC</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">CoolAir</h2>
                <p className="text-gray-400 text-sm">HVACR Solutions</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Professional heating, ventilation, air conditioning and refrigeration services since 2008. Licensed, insured, and certified technicians.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center text-sm"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.link}
                    className="text-gray-400 hover:text-green-500 transition-colors flex items-center text-sm"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Our Location</p>
                  <p className="text-gray-400 text-sm">123 HVAC Street, City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">24/7 Service</p>
                  <p className="text-blue-400 font-bold text-sm">1-800-COOL-AIR</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Email Us</p>
                  <p className="text-gray-400 text-sm">info@coolairhvac.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Business Hours</p>
                  <p className="text-gray-400 text-sm">Mon-Fri: 8AM-8PM</p>
                  <p className="text-gray-400 text-sm">Sat-Sun: 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-xs md:text-sm">
            © {new Date().getFullYear()} CoolAir HVACR Solutions. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-xs md:text-sm justify-center">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-green-500 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms" className="text-gray-400 hover:text-green-500 transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/sitemap" className="text-gray-400 hover:text-green-500 transition-colors">
              Sitemap
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/licenses" className="text-gray-400 hover:text-green-500 transition-colors">
              Licenses & Certifications
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer