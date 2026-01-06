import React from 'react'
import { CheckCircle, Clock, Shield, Award, Zap, Wrench, Thermometer, Snowflake, TrendingUp, Users, Lightbulb, ChevronLeft, ChevronRight, MessageSquare, DollarSign, Hammer, ThumbsUp, ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { Background3D } from '../Components/ThreeD/Simple3D'

const Services = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const observerRef = useRef(null)

  // Intersection Observer for card animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.cardId]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const processSteps = [
    {
      number: 1,
      title: 'Consultation',
      description: 'Free assessment of your HVACR needs',
      image: '/3d-rendering-ventilation-system.jpg',
      icon: MessageSquare
    },
    {
      number: 2,
      title: 'Quote',
      description: 'Transparent pricing with no hidden fees',
      image: '/hvac-ductwork.jpg',
      icon: DollarSign
    },
    {
      number: 3,
      title: 'Service',
      description: 'Professional execution by certified technicians',
      image: '/close-up-ventilation-system.jpg',
      icon: Hammer
    },
    {
      number: 4,
      title: 'Follow-up',
      description: 'Quality check and maintenance tips',
      image: '/3d-rendering-ventilation-system (1).jpg',
      icon: ThumbsUp
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return
    
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % processSteps.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [isAutoPlay, processSteps.length])

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % processSteps.length)
    setIsAutoPlay(false)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + processSteps.length) % processSteps.length)
    setIsAutoPlay(false)
  }

  const allServices = [
    {
      category: 'Air Conditioning',
      icon: Snowflake,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'AC Installation', desc: 'Professional installation of new AC systems', price: 'Starting at $3,500', icon: Zap, image: '/3d-rendering-ventilation-system.jpg' },
        { name: 'AC Repair', desc: 'Fast and reliable repair for all AC brands', price: 'Starting at $99', icon: Wrench, image: '/hvac-ductwork.jpg' },
        { name: 'AC Maintenance', desc: 'Regular tune-ups to prevent breakdowns', price: 'From $129', icon: CheckCircle, image: '/close-up-ventilation-system.jpg' },
        { name: 'Duct Cleaning', desc: 'Complete duct system cleaning', price: 'Starting at $299', icon: TrendingUp, image: '/3d-rendering-ventilation-system (1).jpg' },
        { name: 'Central Air Systems', desc: 'Whole home cooling solutions', price: 'Starting at $4,500', icon: Zap, image: '/3d-rendering-ventilation-system (2).jpg' },
        { name: 'Smart Thermostats', desc: 'Intelligent temperature control systems', price: 'Starting at $199', icon: Lightbulb, image: '/close-up-ventilation-system (1).jpg' },
      ]
    },
    {
      category: 'Heating Systems',
      icon: Thermometer,
      color: 'from-orange-500 to-red-500',
      services: [
        { name: 'Furnace Installation', desc: 'Energy-efficient furnace installation', price: 'Starting at $4,000', icon: Zap, image: '/3d-rendering-ventilation-system (2).jpg' },
        { name: 'Boiler Services', desc: 'Boiler repair and maintenance', price: 'Starting at $199', icon: Wrench, image: '/hvac-ductwork.jpg' },
        { name: 'Heat Pump Services', desc: 'Heat pump installation and repair', price: 'Starting at $2,500', icon: CheckCircle, image: '/close-up-ventilation-system (1).jpg' },
        { name: 'Ductless Mini-Splits', desc: 'Ductless system installation', price: 'Starting at $3,000', icon: TrendingUp, image: '/3d-rendering-ventilation-system (3).jpg' },
        { name: 'Radiant Floor Heating', desc: 'Underfloor heating system installation', price: 'Starting at $5,000', icon: Zap, image: '/3d-rendering-ventilation-system (4).jpg' },
        { name: 'Gas Line Services', desc: 'Safe gas line installation and repair', price: 'Starting at $299', icon: Wrench, image: '/smoke-pipe-industry-factory.jpg' },
      ]
    },
    {
      category: 'Commercial HVAC',
      icon: Lightbulb,
      color: 'from-yellow-500 to-amber-600',
      services: [
        { name: 'VRF Systems', desc: 'Variable refrigerant flow systems', price: 'Custom Quote', icon: Zap, image: '/3d-rendering-ventilation-system (4).jpg' },
        { name: 'RTU Maintenance', desc: 'Roof top unit maintenance', price: 'From $199/unit', icon: Wrench, image: '/hvac-ductwork.jpg' },
        { name: 'Chiller Services', desc: 'Commercial chiller maintenance', price: 'Custom Quote', icon: CheckCircle, image: '/close-up-ventilation-system (2).jpg' },
        { name: 'Building Automation', desc: 'Smart building controls', price: 'Custom Quote', icon: TrendingUp, image: '/3d-rendering-ventilation-system (5).jpg' },
        { name: 'Energy Audits', desc: 'Comprehensive energy efficiency analysis', price: 'Starting at $499', icon: Lightbulb, image: '/3d-rendering-ventilation-system.jpg' },
        { name: 'Preventive Maintenance', desc: 'Scheduled maintenance programs', price: 'From $299/month', icon: CheckCircle, image: '/close-up-ventilation-system.jpg' },
      ]
    },
    {
      category: 'Refrigeration',
      icon: Snowflake,
      color: 'from-green-500 to-teal-500',
      services: [
        { name: 'Walk-in Coolers', desc: 'Commercial refrigeration units', price: 'Starting at $5,000', icon: Zap, image: '/smoke-pipe-industry-factory.jpg' },
        { name: 'Ice Machines', desc: 'Ice machine installation & repair', price: 'Starting at $299', icon: Wrench, image: '/hvac-ductwork.jpg' },
        { name: 'Freezer Systems', desc: 'Commercial freezer systems', price: 'Custom Quote', icon: CheckCircle, image: '/close-up-ventilation-system.jpg' },
        { name: 'Refrigerator Repair', desc: 'Commercial fridge repair', price: 'Starting at $149', icon: TrendingUp, image: '/3d-rendering-ventilation-system.jpg' },
        { name: 'Display Cases', desc: 'Retail refrigerated display cases', price: 'Starting at $2,500', icon: Zap, image: '/3d-rendering-ventilation-system (1).jpg' },
        { name: 'Cold Storage', desc: 'Large scale cold storage solutions', price: 'Custom Quote', icon: Snowflake, image: '/3d-rendering-ventilation-system (2).jpg' },
      ]
    },
  ]

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
              <Wrench className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent leading-tight">
              Premium HVACR
              <br />
              <span className="text-5xl md:text-7xl">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your space with cutting-edge heating, ventilation, air conditioning, and refrigeration solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/30 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:shadow-xl">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-blue-50 min-h-screen">
        <div className="section-padding relative z-10">
          <div className="container-custom">
            {/* Service Categories */}
            {allServices.map((category, idx) => {
              const CategoryIcon = category.icon
              return (
                <div key={idx} className="mb-32 animate-fade-in-up" style={{ animationDelay: `${idx * 0.2}s` }}>
                  {/* Category Header */}
                  <div className="flex items-center justify-center mb-16">
                    <div className="text-center relative">
                      <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-2xl mb-6 mx-auto animate-bounce-slow`}>
                        <CategoryIcon className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        {category.category.split(' ').slice(0, -1).join(' ')} <span className="text-primary">{category.category.split(' ').slice(-1)}</span>
                      </h2>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto">Professional solutions tailored for your needs</p>
                    </div>
                  </div>

                  {/* Service Cards Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.services.map((service, sIdx) => {
                      const ServiceIcon = service.icon
                      const cardId = `${idx}-${sIdx}`
                      return (
                        <div
                          key={sIdx}
                          ref={(el) => {
                            if (el && observerRef.current) {
                              el.dataset.cardId = cardId
                              observerRef.current.observe(el)
                            }
                          }}
                          className={`group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                            visibleCards.has(cardId) ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
                          }`}
                          style={{ 
                            animationDelay: `${sIdx * 0.1}s`,
                          }}
                        >
                          {/* Image with overlay */}
                          <div className="relative h-48 overflow-hidden">
                            <img 
                              src={service.image} 
                              alt={service.name}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${category.color.replace('from-', 'from-').replace('to-', 'to-')}/80 to-transparent`}></div>
                            <div className="absolute bottom-4 left-4">
                              <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="p-6">
                            <p className="text-gray-600 mb-4 text-base leading-relaxed">
                              {service.desc}
                            </p>
                            
                            {/* Price */}
                            <div className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-4`}>
                              {service.price}
                            </div>

                            {/* Features based on category */}
                            <ul className="space-y-2 text-sm text-gray-700 mb-6">
                              {category.category === 'Air Conditioning' && (
                                <>
                                  <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    Energy efficient systems
                                  </li>
                                  <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    Professional installation
                                  </li>
                                  <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    Warranty included
                                  </li>
                                </>
                              )}
                              {category.category === 'Heating Systems' && (
                                <>
                                  <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    High efficiency ratings
                                  </li>
                                  <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    Expert technicians
                                  </li>
                                  <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    24/7 support
                                  </li>
                                </>
                              )}
                              {category.category === 'Commercial HVAC' && (
                                <>
                                  <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    Custom solutions
                                  </li>
                                  <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    Preventive maintenance
                                  </li>
                                  <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    Smart controls
                                  </li>
                                </>
                              )}
                              {category.category === 'Refrigeration' && (
                                <>
                                  <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    Commercial grade
                                  </li>
                                  <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    Temperature monitoring
                                  </li>
                                  <li className="flex items-center">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                    Emergency service
                                  </li>
                                </>
                              )}
                            </ul>

                            {/* Button */}
                            <button className={`w-full py-3 bg-gradient-to-r ${category.color} text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2`}>
                              <span>Book Service</span>
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Service Process */}
      <div className="relative w-full mb-32 shadow-2xl overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 py-24">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white">
                Our Service <span className="text-primary">Process</span>
              </h2>
              <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
                Follow our streamlined process to get your HVACR system running perfectly
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -top-20 right-0 flex items-center space-x-3 z-20">
                <button
                  onClick={prevStep}
                  className="p-3 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={nextStep}
                  className="p-3 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-3xl p-12 md:p-20 min-h-[600px] flex flex-col items-center justify-center relative overflow-hidden border border-white/20 shadow-2xl">
                <div className="absolute inset-0">
                  <img
                    src={processSteps[currentStep].image}
                    alt={processSteps[currentStep].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
                </div>
                
                <div className="relative z-10 text-center text-white">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-lg rounded-full mb-8 border border-white/30">
                    {React.createElement(processSteps[currentStep].icon, { className: "w-10 h-10 text-white" })}
                  </div>
                  <h3 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
                    {processSteps[currentStep].title}
                  </h3>
                  <p className="text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
                    {processSteps[currentStep].description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-700"
                    style={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
                  ></div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {processSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentStep 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container-custom">
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900">
                Why Choose <span className="text-primary">CoolAir HVACR</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Industry-leading expertise and customer satisfaction
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 p-10 border border-gray-100">
                <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Licensed & Insured</h3>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold text-lg">•</span>
                    <span className="text-base">Fully licensed and bonded</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold text-lg">•</span>
                    <span className="text-base">Complete insurance coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold text-lg">•</span>
                    <span className="text-base">Your protection guaranteed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 p-10 border border-gray-100">
                <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">24/7 Service</h3>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold text-lg">•</span>
                    <span className="text-base">Round-the-clock availability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold text-lg">•</span>
                    <span className="text-base">Emergency response ready</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold text-lg">•</span>
                    <span className="text-base">Always at your service</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 p-10 border border-gray-100">
                <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Certified Technicians</h3>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold text-lg">•</span>
                    <span className="text-base">NATE-certified experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold text-lg">•</span>
                    <span className="text-base">Continuous training programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold text-lg">•</span>
                    <span className="text-base">Industry-leading expertise</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 p-10 border border-gray-100">
                <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">100% Satisfaction</h3>
                <ul className="text-gray-600 space-y-3">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold text-lg">•</span>
                    <span className="text-base">Guaranteed satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold text-lg">•</span>
                    <span className="text-base">Quality workmanship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold text-lg">•</span>
                    <span className="text-base">Customer-first approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services