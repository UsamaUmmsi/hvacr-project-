import { ArrowRight, CheckCircle, Zap, Award, ChevronLeft, ChevronRight, Users, Clock, ThumbsUp, Building } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { Simple3DIcon, Background3D } from '../Components/ThreeD/Simple3D'

// Counter animation component
const CounterAnimation = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime = null
    const endValue = parseInt(end.toString().replace(/[^0-9]/g, ''))

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * endValue)
      
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-bold mb-2">
      {count}{suffix}
    </div>
  )
}

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [dragStart, setDragStart] = useState(0)
  const [dragEnd, setDragEnd] = useState(0)

  const caseStudies = [
    {
      id: 1,
      title: 'Hospital HVAC Modernization',
      client: 'City Medical Center',
      industry: 'Healthcare',
      challenge: 'Outdated HVAC system affecting patient care and energy efficiency',
      solution: 'Installed energy-efficient HVAC with HEPA filtration and smart controls',
      results: ['40% energy savings', 'Improved air quality', '24/7 monitoring'],
      duration: '45 days',
      savings: '$85,000/year',
      image: '/3d-rendering-ventilation-system.jpg',
      metrics: { efficiency: 95, satisfaction: 98, roi: 240 },
      color: 'from-blue-500 to-purple-600',
      icon: Building
    },
    {
      id: 2,
      title: 'Restaurant Refrigeration Overhaul',
      client: 'Spice Garden Restaurant',
      industry: 'Food Service',
      challenge: 'Frequent refrigeration breakdowns during peak season',
      solution: 'Complete refrigeration system replacement with commercial-grade units',
      results: ['Zero downtime', '30% energy reduction', 'Extended warranty'],
      duration: '7 days',
      savings: '$12,000/year',
      image: '/3d-rendering-ventilation-system (1).jpg',
      metrics: { efficiency: 88, satisfaction: 96, roi: 180 },
      color: 'from-green-500 to-teal-600',
      icon: Zap
    },
    {
      id: 3,
      title: 'Office Building HVAC Upgrade',
      client: 'TechPark Corporate',
      industry: 'Commercial',
      challenge: 'Inefficient cooling causing high operational costs',
      solution: 'VRF system installation with zoning and smart thermostats',
      results: ['35% cost savings', 'Individual zone control', 'Remote monitoring'],
      duration: '30 days',
      savings: '$63,000/year',
      image: '/hvac-ductwork.jpg',
      metrics: { efficiency: 92, satisfaction: 94, roi: 220 },
      color: 'from-indigo-500 to-blue-600',
      icon: Building
    }
  ]

  const industries = ['All', 'Healthcare', 'Commercial', 'Hospitality', 'Technology', 'Education', 'Food Service']

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeFilter)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredStudies.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [filteredStudies.length, isAutoPlay])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredStudies.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredStudies.length) % filteredStudies.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  const handleDragStart = (e) => {
    setDragStart(e.clientX || e.touches?.[0]?.clientX)
  }

  const handleDragEnd = (e) => {
    setDragEnd(e.clientX || e.changedTouches?.[0]?.clientX)
    handleDragLogic()
  }

  const handleDragLogic = () => {
    const dragDistance = dragStart - dragEnd
    const threshold = 50

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Hero Section with Video Background */}
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
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-lg rounded-full animate-bounce-slow border border-white/20">
                <Zap className="w-12 h-12 text-green-400" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent leading-tight">
              Case Studies
              <br />
              <span className="text-5xl md:text-7xl">& Success Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover how we've transformed businesses across industries with innovative HVACR solutions that deliver measurable results
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                <span>Explore Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/30 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:shadow-xl">
                View All Industries
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="section-padding relative overflow-hidden">
        {/* Video Background for Content Section */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/hvacr-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-blue-50/95 to-green-50/95"></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Industry Filter */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Filter by <span className="text-primary">Industry</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveFilter(industry)}
                  className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === industry
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-2xl scale-105'
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          {/* Modern Interactive Carousel */}
          <div className="mb-20 animate-fade-in-up animation-delay-400">
            {/* Navigation Controls - Outside Carousel */}
            <div className="flex justify-end items-center mb-6 space-x-3">
              <button
                onClick={prevSlide}
                className="p-2 md:p-3 bg-gray-800/80 backdrop-blur-lg border border-gray-600/50 text-white rounded-full hover:bg-gray-700/90 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 md:p-3 bg-gray-800/80 backdrop-blur-lg border border-gray-600/50 text-white rounded-full hover:bg-gray-700/90 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>

            <div className="relative">
              {/* Main Carousel */}
              <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-black rounded-3xl overflow-hidden shadow-2xl border border-slate-700 relative">
                <div 
                  className="relative h-[800px] md:h-[750px] overflow-hidden cursor-grab active:cursor-grabbing"
                  onMouseDown={handleDragStart}
                  onMouseUp={handleDragEnd}
                  onTouchStart={handleDragStart}
                  onTouchEnd={handleDragEnd}
                >
                  <div 
                    className="flex transition-transform duration-1000 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {filteredStudies.map((study) => {
                      const IconComponent = study.icon
                      return (
                        <div 
                          key={study.id} 
                          className="w-full flex-shrink-0 relative"
                        >
                          {/* Background Image with Enhanced Overlay */}
                          <div className="absolute inset-0">
                            <img
                              src={study.image}
                              alt={study.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                          </div>

                          {/* Enhanced Content */}
                          <div className="relative z-10 h-full flex items-center py-12 md:py-16">
                            <div className="container-custom">
                              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                                {/* Left Content - Enhanced */}
                                <div className="text-white space-y-4 lg:space-y-5 order-2 lg:order-1 py-6">
                                  <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                                    <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0`}>
                                      <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                                      <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold rounded-full shadow-lg inline-block w-fit">
                                        FEATURED PROJECT
                                      </span>
                                      <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30 inline-block w-fit">
                                        {study.industry}
                                      </span>
                                    </div>
                                  </div>

                                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4 leading-tight bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent break-words">
                                    {study.title}
                                  </h2>
                                  
                                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 lg:p-5 border border-white/20">
                                    <p className="text-lg lg:text-xl text-blue-100 mb-2">
                                      <span className="font-bold text-white">Client:</span> {study.client}
                                    </p>
                                    <p className="text-blue-200 text-sm lg:text-base">
                                      <span className="font-bold text-white">Challenge:</span> {study.challenge}
                                    </p>
                                  </div>

                                  <div className="space-y-3">
                                    <h3 className="font-bold text-xl lg:text-2xl flex items-center text-white">
                                      <Zap className="w-6 h-6 mr-3 text-green-400 flex-shrink-0" />
                                      Key Achievements
                                    </h3>
                                    <div className="grid grid-cols-1 gap-2 lg:gap-3">
                                      {study.results.map((result, idx) => (
                                        <div key={idx} className="flex items-center space-x-3 lg:space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 border border-white/20">
                                          <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-green-400 flex-shrink-0" />
                                          <span className="text-white font-medium text-sm lg:text-base">{result}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                {/* Right Metrics - Enhanced */}
                                <div className="text-white order-1 lg:order-2 py-6">
                                  <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 lg:p-8 border border-white/20 shadow-2xl">
                                    <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                      Performance Metrics
                                    </h3>
                                    
                                    <div className="space-y-6 lg:space-y-8">
                                      <div className="text-center">
                                        <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-3">
                                          {study.metrics.efficiency}%
                                        </div>
                                        <div className="text-blue-200 mb-4 font-medium text-sm lg:text-base">Energy Efficiency</div>
                                        <div className="w-full bg-white/20 rounded-full h-2 lg:h-3">
                                          <div 
                                            className="bg-gradient-to-r from-green-400 to-green-500 h-2 lg:h-3 rounded-full transition-all duration-2000 shadow-lg"
                                            style={{ width: `${study.metrics.efficiency}%` }}
                                          ></div>
                                        </div>
                                      </div>

                                      <div className="text-center">
                                        <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-3">
                                          {study.metrics.satisfaction}%
                                        </div>
                                        <div className="text-blue-200 mb-4 font-medium text-sm lg:text-base">Client Satisfaction</div>
                                        <div className="w-full bg-white/20 rounded-full h-2 lg:h-3">
                                          <div 
                                            className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 lg:h-3 rounded-full transition-all duration-2000 shadow-lg"
                                            style={{ width: `${study.metrics.satisfaction}%` }}
                                          ></div>
                                        </div>
                                      </div>

                                      <div className="text-center">
                                        <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-3">
                                          {study.metrics.roi}%
                                        </div>
                                        <div className="text-blue-200 mb-4 font-medium text-sm lg:text-base">Return on Investment</div>
                                        <div className="w-full bg-white/20 rounded-full h-2 lg:h-3">
                                          <div 
                                            className="bg-gradient-to-r from-purple-400 to-purple-500 h-2 lg:h-3 rounded-full transition-all duration-2000 shadow-lg"
                                            style={{ width: `${Math.min(study.metrics.roi, 100)}%` }}
                                          ></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Dot Indicators - Below Carousel */}
            <div className="flex justify-center items-center mt-6 space-x-2">
              {filteredStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 md:w-12 h-3 md:h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg' 
                      : 'w-3 md:w-4 h-3 md:h-4 bg-gray-300 hover:bg-gray-400 rounded-full'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-16 animate-fade-in-up animation-delay-700">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Our Impact by <span className="text-primary">Numbers</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Delivering measurable results across industries with innovative HVACR solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200 hover:bg-white/90 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105 group shadow-lg">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4 group-hover:scale-125 transition-transform duration-300" />
                <CounterAnimation end="1000" suffix="+" />
                <div className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">Happy Clients</div>
              </div>
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200 hover:bg-white/90 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 group shadow-lg">
                <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:scale-125 transition-transform duration-300" />
                <CounterAnimation end="24" suffix="/7" />
                <div className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">24/7 Service</div>
              </div>
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200 hover:bg-white/90 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105 group shadow-lg">
                <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4 group-hover:scale-125 transition-transform duration-300" />
                <CounterAnimation end="15" suffix="+" />
                <div className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">Years Experience</div>
              </div>
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200 hover:bg-white/90 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105 group shadow-lg">
                <ThumbsUp className="w-12 h-12 text-green-500 mx-auto mb-4 group-hover:scale-125 transition-transform duration-300" />
                <CounterAnimation end="100" suffix="%" />
                <div className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Industry Cards Section */}
          <div className="mb-16 animate-fade-in-up animation-delay-900">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Industries We <span className="text-primary">Serve</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized HVACR solutions tailored for different industry needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Healthcare Card */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/3d-rendering-ventilation-system.jpg"
                    alt="Healthcare HVAC"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">Healthcare</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Critical air quality control and temperature management for hospitals, clinics, and medical facilities.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      HEPA filtration systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Operating room climate control
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Infection control solutions
                    </li>
                  </ul>
                </div>
              </div>

              {/* Commercial Card */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/hvac-ductwork.jpg"
                    alt="Commercial HVAC"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">Commercial</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Energy-efficient solutions for office buildings, retail spaces, and commercial complexes.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      VRF systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Smart building automation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Energy management
                    </li>
                  </ul>
                </div>
              </div>

              {/* Food Service Card */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/3d-rendering-ventilation-system (1).jpg"
                    alt="Food Service HVAC"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">Food Service</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Specialized refrigeration and ventilation systems for restaurants and food processing facilities.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Commercial refrigeration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Kitchen ventilation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Food safety compliance
                    </li>
                  </ul>
                </div>
              </div>

              {/* Technology Card */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/3d-rendering-ventilation-system (2).jpg"
                    alt="Technology HVAC"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">Technology</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Precision climate control for data centers, server rooms, and tech facilities.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Data center cooling
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Server room climate
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Humidity control
                    </li>
                  </ul>
                </div>
              </div>

              {/* Education Card */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/3d-rendering-ventilation-system (3).jpg"
                    alt="Education HVAC"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Comfortable learning environments for schools, universities, and educational institutions.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Classroom climate control
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Energy-efficient systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Indoor air quality
                    </li>
                  </ul>
                </div>
              </div>

              {/* Hospitality Card */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/3d-rendering-ventilation-system (4).jpg"
                    alt="Hospitality HVAC"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">Hospitality</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Guest comfort solutions for hotels, resorts, and hospitality venues.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Guest room climate
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Pool area ventilation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Energy optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies