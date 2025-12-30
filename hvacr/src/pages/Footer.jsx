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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">HVAC</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">CoolAir</h2>
                <p className="text-gray-400 text-sm">HVACR Solutions</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Professional heating, ventilation, air conditioning and refrigeration services since 2008. Licensed, insured, and certified technicians.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.link}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Our Location</p>
                  <p className="text-gray-400">123 HVAC Street, City, State 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">24/7 Service</p>
                  <p className="text-primary font-bold">1-800-COOL-AIR</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-gray-400">info@coolairhvac.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-gray-400">Mon-Fri: 8AM-8PM</p>
                  <p className="text-gray-400">Sat-Sun: 9AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CoolAir HVACR Solutions. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link to="/licenses" className="text-gray-400 hover:text-white transition-colors">
              Licenses & Certifications
            </Link>
          </div>
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-6 mb-8 text-center">
          <h3 className="text-2xl font-bold mb-2">24/7 Service Available</h3>
          <p className="text-white/90 mb-4">Don't suffer in the heat or cold. Call us now!</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="tel:18002665524" className="btn bg-white text-primary hover:bg-gray-100 text-lg font-bold">
              📞 Call Now: 1-800-COOL-AIR
            </a>
            <Link to="/contact" className="btn bg-black/20 text-white hover:bg-black/30">
              Request Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer