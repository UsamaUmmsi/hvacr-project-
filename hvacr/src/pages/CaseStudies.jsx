import { ArrowRight, CheckCircle, Target, Zap, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

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
      color: 'from-blue-500 to-purple-600'
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
      color: 'from-green-500 to-teal-600'
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
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 4,
      title: 'Hotel HVAC Optimization',
      client: 'Grand Plaza Hotel',
      industry: 'Hospitality',
      challenge: 'Inconsistent room temperatures and guest complaints',
      solution: 'Complete HVAC system redesign with individual room controls',
      results: ['Guest satisfaction +25%', 'Energy efficiency +40%', 'Maintenance costs -30%'],
      duration: '60 days',
      savings: '$120,000/year',
      image: '/close-up-ventilation-system.jpg',
      metrics: { efficiency: 90, satisfaction: 97, roi: 280 },
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 5,
      title: 'Data Center Cooling',
      client: 'CloudTech Solutions',
      industry: 'Technology',
      challenge: 'Overheating servers and cooling inefficiency',
      solution: 'Precision cooling system with hot/cold aisle containment',
      results: ['PUE reduced to 1.3', 'Server uptime 99.99%', 'Cooling cost -45%'],
      duration: '21 days',
      savings: '$200,000/year',
      image: '/3d-rendering-ventilation-system (2).jpg',
      metrics: { efficiency: 98, satisfaction: 99, roi: 350 },
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 6,
      title: 'School HVAC Replacement',
      client: 'City Public Schools',
      industry: 'Education',
      challenge: 'Aging HVAC systems affecting indoor air quality and comfort',
      solution: 'District-wide HVAC replacement with energy recovery ventilators',
      results: ['IAQ improved by 60%', 'Absenteeism reduced', 'ENERGY STAR certified'],
      duration: '90 days',
      savings: '$150,000/year',
      image: '/smoke-pipe-industry-factory.jpg',
      metrics: { efficiency: 85, satisfaction: 93, roi: 200 },
      color: 'from-emerald-500 to-green-600'
    },
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
    }, 4000)
    
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

  return (
    <div className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-500 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-green-400 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 animate-bounce-slow">
            <Target className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Our Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Explore our interactive showcase of transformative HVACR solutions. 
            Drag, swipe, or click to discover how we've delivered exceptional results across industries.
          </p>
          
          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up animation-delay-200">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === industry
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Carousel */}
        <div className="mb-16 animate-fade-in-up animation-delay-400">
          <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-black rounded-3xl overflow-hidden shadow-2xl border border-slate-700 relative">
            {/* Auto-play Toggle - Top Right Only */}
            <div className="absolute top-6 right-6 z-20">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isAutoPlay 
                    ? 'bg-green-500 text-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {isAutoPlay ? 'Auto-Play ON' : 'Auto-Play OFF'}
              </button>
            </div>

            {/* Main Carousel */}
            <div className="relative h-[600px] overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {filteredStudies.map((study) => (
                  <div key={study.id} className="w-full flex-shrink-0 relative">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center">
                      <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                          {/* Left Content */}
                          <div className="text-white">
                            <div className="flex items-center space-x-3 mb-4">
                              <Award className="w-6 h-6 text-yellow-400" />
                              <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-sm font-bold rounded-full">
                                FEATURED
                              </span>
                              <span className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full">
                                {study.industry}
                              </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                              {study.title}
                            </h2>
                            
                            <p className="text-xl text-blue-100 mb-6">
                              <span className="font-semibold">Client:</span> {study.client}
                            </p>

                            <div className="mb-8">
                              <h3 className="font-bold mb-4 flex items-center text-lg">
                                <Zap className="w-5 h-5 mr-2 text-green-400" />
                                Key Achievements
                              </h3>
                              <div className="grid grid-cols-1 gap-3">
                                {study.results.map((result, idx) => (
                                  <div key={idx} className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-blue-100">{result}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                <div className="text-2xl font-bold text-green-400 mb-1">
                                  {study.savings}
                                </div>
                                <div className="text-sm text-blue-200">Annual Savings</div>
                              </div>
                              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                <div className="text-2xl font-bold text-blue-300 mb-1">
                                  {study.duration}
                                </div>
                                <div className="text-sm text-blue-200">Project Duration</div>
                              </div>
                            </div>

                            <Link
                              to={`/case-studies/${study.id}`}
                              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            >
                              <span>Explore Full Case Study</span>
                              <ArrowRight className="w-5 h-5" />
                            </Link>
                          </div>

                          {/* Right Metrics */}
                          <div className="text-white">
                            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                              <h3 className="text-2xl font-bold mb-6 text-center">Performance Metrics</h3>
                              
                              <div className="space-y-6">
                                <div className="text-center">
                                  <div className="text-4xl font-bold text-green-400 mb-2">
                                    {study.metrics.efficiency}%
                                  </div>
                                  <div className="text-sm text-blue-200 mb-3">Energy Efficiency</div>
                                  <div className="w-full bg-white/20 rounded-full h-2">
                                    <div 
                                      className="bg-green-400 h-2 rounded-full transition-all duration-1000"
                                      style={{ width: `${study.metrics.efficiency}%` }}
                                    ></div>
                                  </div>
                                </div>

                                <div className="text-center">
                                  <div className="text-4xl font-bold text-blue-400 mb-2">
                                    {study.metrics.satisfaction}%
                                  </div>
                                  <div className="text-sm text-blue-200 mb-3">Client Satisfaction</div>
                                  <div className="w-full bg-white/20 rounded-full h-2">
                                    <div 
                                      className="bg-blue-400 h-2 rounded-full transition-all duration-1000"
                                      style={{ width: `${study.metrics.satisfaction}%` }}
                                    ></div>
                                  </div>
                                </div>

                                <div className="text-center">
                                  <div className="text-4xl font-bold text-purple-400 mb-2">
                                    {study.metrics.roi}%
                                  </div>
                                  <div className="text-sm text-blue-200 mb-3">Return on Investment</div>
                                  <div className="w-full bg-white/20 rounded-full h-2">
                                    <div 
                                      className="bg-purple-400 h-2 rounded-full transition-all duration-1000"
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
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {filteredStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-blue-400 scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Summary - No Background */}
        <div className="mb-16 animate-fade-in-up animation-delay-800">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Impact by Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delivering measurable results across industries with innovative HVACR solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <CounterAnimation end="500" suffix="+" />
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <CounterAnimation end="5" suffix="M+" />
              <div className="text-gray-600">Client Savings</div>
            </div>
            <div className="text-center">
              <CounterAnimation end="98" suffix="%" />
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <CounterAnimation end="15" suffix="+" />
              <div className="text-gray-600">Industries Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies