import { Link } from 'react-router-dom'
import { Shield, Clock, Award, Users } from 'lucide-react'
import { Simple3DIcon, Background3D } from '../Components/ThreeD/Simple3D'

const Hero = () => {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
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
          {/* Fallback background if video doesn't load */}
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

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 animate-bounce-slow">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold">24/7 Service Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
              Professional 
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text animate-gradient"> HVACR </span>
              Solutions For Your Comfort
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up animation-delay-200">
              Expert heating, ventilation, air conditioning & refrigeration services. Serving residential and commercial clients with certified technicians and guaranteed satisfaction.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
              <Link to="/contact" className="btn btn-secondary text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Free Estimate
              </Link>
              <a href="tel:18002665524" className="btn bg-white/20 hover:bg-white/30 text-lg px-8 py-4 backdrop-blur-sm border border-white/30 transform hover:scale-105 transition-all duration-300">
                📞 24/7 Call
              </a>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-600">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <Simple3DIcon type="cube" color="#10B981" size={32} className="flex-shrink-0" />
                <span className="font-semibold text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <Clock className="w-8 h-8 text-blue-400" />
                <span className="font-semibold text-sm">24/7 Service</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <Award className="w-8 h-8 text-yellow-400" />
                <span className="font-semibold text-sm">Certified Techs</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <Users className="w-8 h-8 text-purple-400" />
                <span className="font-semibold text-sm">Free Consultation</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl animate-slide-in-right">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Schedule Service Today</h3>
              <p className="text-white/80">Get a callback within 30 minutes</p>
            </div>
            
            <form className="space-y-6">
              <div className="animate-fade-in-up animation-delay-800">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div className="animate-fade-in-up animation-delay-900">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div className="animate-fade-in-up animation-delay-1000">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <div className="animate-fade-in-up animation-delay-1100">
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300">
                  <option value="" className="text-gray-800">Select Service Needed</option>
                  <option value="ac-repair" className="text-gray-800">AC Repair</option>
                  <option value="ac-installation" className="text-gray-800">AC Installation</option>
                  <option value="heating" className="text-gray-800">Heating System</option>
                  <option value="refrigeration" className="text-gray-800">Refrigeration</option>
                  <option value="maintenance" className="text-gray-800">Maintenance</option>
                  <option value="urgent" className="text-gray-800">Urgent Service</option>
                </select>
              </div>
              <div className="animate-fade-in-up animation-delay-1200">
                <textarea
                  placeholder="Describe your issue..."
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn btn-secondary py-4 text-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up animation-delay-1300"
              >
                Request Service Now
              </button>
            </form>
            
            <p className="text-white/70 text-sm text-center mt-6 animate-fade-in-up animation-delay-1400">
              We'll contact you within 30 minutes. 24/7 service available.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-5">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,120 L0,80 C150,60 300,40 450,50 C600,60 750,80 900,70 C1050,60 1150,40 1200,50 L1200,120 Z" fill="#f9fafb" opacity="0.8"/>
          <path d="M0,120 L0,90 C200,70 400,50 600,60 C800,70 1000,90 1200,80 L1200,120 Z" fill="#f3f4f6"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero