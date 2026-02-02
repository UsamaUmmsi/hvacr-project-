import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react'
import { Background3D } from '../Components/ThreeD/Simple3D'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hvacr-video.mp4" type="video/mp4" />
          </video>
          {/* Fallback gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-green-800"></div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* 3D Background Elements */}
        <Background3D className="z-1" />

        {/* Animated particles background */}
        <div className="absolute inset-0 z-1">
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-lg rounded-full mb-8 animate-bounce-slow border border-white/20">
              <Phone className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent leading-tight">
              Contact Our
              <br />
              <span className="text-5xl md:text-7xl">Experts</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Get in touch with our HVACR professionals for expert solutions and exceptional service
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/30 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:shadow-xl">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch <span className="text-primary">Today</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ready to solve your HVACR issues? Contact us for a free consultation or urgent service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20 h-fit">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h4>
                <p className="text-gray-600 mb-8">
                  Thank you for contacting us. Our team will get back to you within 30 minutes.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ac-repair">AC Repair</option>
                    <option value="ac-installation">AC Installation</option>
                    <option value="heating">Heating System</option>
                    <option value="refrigeration">Refrigeration</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="urgent">Urgent Service</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Describe your HVACR issue or request..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-4 text-lg font-semibold flex items-center justify-center rounded-lg transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
                
                <p className="text-gray-500 text-sm text-center mb-0">
                  We'll contact you within 30 minutes. For immediate assistance, call our 24/7 line.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info & Urgent Service */}
          <div className="space-y-8">
            {/* Urgent Service Card */}
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">24/7 Service</h3>
                  <p className="text-white/90 mb-6">
                    Don't wait for regular business hours. Our team is available round-the-clock.
                  </p>
                  <a
                    href="tel:18002665524"
                    className="inline-flex items-center justify-center bg-white text-red-600 px-6 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    CALL NOW: 1-800-COOL-AIR
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone Numbers</h4>
                    <p className="text-primary font-bold text-lg">1-800-COOL-AIR</p>
                    <p className="text-gray-600">Office: (123) 456-7890</p>
                    <p className="text-gray-500 text-sm">24/7 Service Line Available</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                    <p className="text-gray-700">info@coolairhvac.com</p>
                    <p className="text-gray-700">service@coolairhvac.com</p>
                    <p className="text-gray-500 text-sm">Response within 2 business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-700">Mansoor Colony</p>
                    <p className="text-gray-700">Karachi, Sindh, Pakistan</p>
                    <p className="text-gray-500 text-sm">Serving entire Karachi area</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-700">Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Sunday: 10:00 AM - 4:00 PM</p>
                    <p className="text-primary font-semibold text-sm">24/7 service available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Find <span className="text-primary">Us</span>
            </h3>
            <p className="text-gray-600">Visit our office or we'll come to you</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sMansoor%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact