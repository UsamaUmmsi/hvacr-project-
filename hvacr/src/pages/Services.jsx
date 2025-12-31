import { CheckCircle, Clock, Shield, Award, Zap, Wrench, Thermometer, Snowflake, TrendingUp, Users, Lightbulb, ChevronLeft, ChevronRight, MessageSquare, DollarSign, Hammer, ThumbsUp } from 'lucide-react'
import { useState, useEffect } from 'react'

const Services = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

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

  const goToStep = (index) => {
    setCurrentStep(index)
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
      ]
    },
  ]

  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-blue-50 min-h-screen">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-500 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-green-400 rounded-full animate-bounce-slow"></div>
        </div>

        <div className="section-padding relative z-10">
          <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 animate-bounce-slow">
              <Wrench className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-700 bg-clip-text text-transparent">
              Our HVACR Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for residential, commercial, and industrial HVACR needs with certified technicians
            </p>
          </div>

          {/* Service Categories */}
          {allServices.map((category, idx) => {
            const CategoryIcon = category.icon
            return (
              <div key={idx} className="mb-20 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-12">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900">{category.category}</h2>
                    <p className="text-gray-600">Professional solutions tailored for your needs</p>
                  </div>
                </div>

                {/* Service Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, sIdx) => {
                    const ServiceIcon = service.icon
                    return (
                      <div
                        key={sIdx}
                        className="group service-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100 animate-fade-in-up relative flex flex-col"
                        style={{ 
                          animationDelay: `${(idx * 4 + sIdx) * 0.05}s`,
                          '--card-color': category.color === 'from-blue-500 to-cyan-500' ? '#3b82f6' : 
                                         category.color === 'from-orange-500 to-red-500' ? '#f97316' :
                                         category.color === 'from-yellow-500 to-amber-600' ? '#eab308' :
                                         category.color === 'from-green-500 to-teal-500' ? '#22c55e' : '#3b82f6',
                          '--card-color-light': category.color === 'from-blue-500 to-cyan-500' ? '#06b6d4' : 
                                               category.color === 'from-orange-500 to-red-500' ? '#dc2626' :
                                               category.color === 'from-yellow-500 to-amber-600' ? '#d97706' :
                                               category.color === 'from-green-500 to-teal-500' ? '#14b8a6' : '#06b6d4',
                          '--card-gradient': category.color
                        }}
                      >
                        {/* Top - Image */}
                        <div className="h-40 relative overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.name}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="p-6 relative z-10 bg-white flex-1 flex flex-col justify-between">
                          {/* Icon */}
                          <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <ServiceIcon className="w-7 h-7 text-white" />
                          </div>

                          {/* Content */}
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 group-hover:bg-clip-text transition-all duration-300">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.desc}</p>

                          {/* Price */}
                          <div className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-6`}>
                            {service.price}
                          </div>

                          {/* Button */}
                          <button className={`w-full py-3 bg-gradient-to-r ${category.color} text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}>
                            Book Service
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

      {/* Service Process - Full Width Section */}
      <div className="relative w-full mb-20 shadow-xl animate-fade-in-up overflow-hidden">
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
          {/* Fallback gradient background if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800"></div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 py-16">
          <div className="container-custom">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 via-green-500 to-blue-700 bg-clip-text text-transparent">Our Service Process</h2>
            <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">Follow our streamlined process to get your HVACR system running perfectly</p>
            
            {/* Slider Container */}
            <div className="relative">
              {/* Navigation Arrows - Outside Image */}
              <div className="absolute -top-16 right-0 flex items-center space-x-2 z-20">
                <button
                  onClick={prevStep}
                  className="p-2 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-full hover:bg-white/30 hover:shadow-lg transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                <button
                  onClick={nextStep}
                  className="p-2 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-full hover:bg-white/30 hover:shadow-lg transition-all duration-300"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Main Slider */}
              <div className="rounded-2xl p-8 md:p-16 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden border border-blue-100 group">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={processSteps[currentStep].image}
                    alt={processSteps[currentStep].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60"></div>
                </div>
                
                {/* Step Content */}
                <div className="relative z-10 text-center animate-fade-in-up text-white">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4">{processSteps[currentStep].title}</h3>
                  <p className="text-xl max-w-2xl mx-auto text-white/90">{processSteps[currentStep].description}</p>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/20">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding relative z-10">
        <div className="container-custom">
          {/* Why Choose Us */}
          <div className="mb-20 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 via-green-500 to-blue-700 bg-clip-text text-transparent">Why Choose CoolAir HVACR</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Industry-leading expertise and customer satisfaction</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-8 border border-gray-100 group why-choose-card">
                <div className="gradient-transition-icon w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Licensed & Insured</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>Fully licensed and bonded</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>Complete insurance coverage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>Your protection guaranteed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-8 border border-gray-100 group why-choose-card">
                <div className="gradient-transition-icon w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Service</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>Round-the-clock availability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>Emergency response ready</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>Always at your service</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-8 border border-gray-100 group why-choose-card">
                <div className="gradient-transition-icon w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certified Technicians</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>NATE-certified experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>Continuous training programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>Industry-leading expertise</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-8 border border-gray-100 group why-choose-card">
                <div className="gradient-transition-icon w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">100% Satisfaction</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>Guaranteed satisfaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>Quality workmanship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-600 font-bold">•</span>
                    <span>Customer-first approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services