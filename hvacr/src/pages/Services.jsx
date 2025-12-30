import { CheckCircle, Clock, Shield, Award, Zap, Wrench, Thermometer, Snowflake, TrendingUp, Users, Lightbulb } from 'lucide-react'
import { useState, useEffect } from 'react'

const Services = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const processSteps = [
    {
      number: 1,
      title: 'Consultation',
      description: 'Free assessment of your HVACR needs'
    },
    {
      number: 2,
      title: 'Quote',
      description: 'Transparent pricing with no hidden fees'
    },
    {
      number: 3,
      title: 'Service',
      description: 'Professional execution by certified technicians'
    },
    {
      number: 4,
      title: 'Follow-up',
      description: 'Quality check and maintenance tips'
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
        { name: 'AC Installation', desc: 'Professional installation of new AC systems', price: 'Starting at $3,500', icon: Zap },
        { name: 'AC Repair', desc: 'Fast and reliable repair for all AC brands', price: 'Starting at $99', icon: Wrench },
        { name: 'AC Maintenance', desc: 'Regular tune-ups to prevent breakdowns', price: 'From $129', icon: CheckCircle },
        { name: 'Duct Cleaning', desc: 'Complete duct system cleaning', price: 'Starting at $299', icon: TrendingUp },
      ]
    },
    {
      category: 'Heating Systems',
      icon: Thermometer,
      color: 'from-orange-500 to-red-500',
      services: [
        { name: 'Furnace Installation', desc: 'Energy-efficient furnace installation', price: 'Starting at $4,000', icon: Zap },
        { name: 'Boiler Services', desc: 'Boiler repair and maintenance', price: 'Starting at $199', icon: Wrench },
        { name: 'Heat Pump Services', desc: 'Heat pump installation and repair', price: 'Starting at $2,500', icon: CheckCircle },
        { name: 'Ductless Mini-Splits', desc: 'Ductless system installation', price: 'Starting at $3,000', icon: TrendingUp },
      ]
    },
    {
      category: 'Commercial HVAC',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'VRF Systems', desc: 'Variable refrigerant flow systems', price: 'Custom Quote', icon: Zap },
        { name: 'RTU Maintenance', desc: 'Roof top unit maintenance', price: 'From $199/unit', icon: Wrench },
        { name: 'Chiller Services', desc: 'Commercial chiller maintenance', price: 'Custom Quote', icon: CheckCircle },
        { name: 'Building Automation', desc: 'Smart building controls', price: 'Custom Quote', icon: TrendingUp },
      ]
    },
    {
      category: 'Refrigeration',
      icon: Snowflake,
      color: 'from-green-500 to-teal-500',
      services: [
        { name: 'Walk-in Coolers', desc: 'Commercial refrigeration units', price: 'Starting at $5,000', icon: Zap },
        { name: 'Ice Machines', desc: 'Ice machine installation & repair', price: 'Starting at $299', icon: Wrench },
        { name: 'Freezer Systems', desc: 'Commercial freezer systems', price: 'Custom Quote', icon: CheckCircle },
        { name: 'Refrigerator Repair', desc: 'Commercial fridge repair', price: 'Starting at $149', icon: TrendingUp },
      ]
    },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 min-h-screen">
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
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
                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100 animate-fade-in-up"
                        style={{ animationDelay: `${(idx * 4 + sIdx) * 0.05}s` }}
                      >
                        {/* Card Background Gradient */}
                        <div className={`h-1 bg-gradient-to-r ${category.color}`}></div>
                        
                        <div className="p-6">
                          {/* Icon */}
                          <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <ServiceIcon className="w-7 h-7 text-white" />
                          </div>

                          {/* Content */}
                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300">
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

          {/* Service Process - Slider */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-16 mb-20 shadow-xl border border-gray-100 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Service Process</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Follow our streamlined process to get your HVACR system running perfectly</p>
            
            {/* Slider Container */}
            <div className="relative">
              {/* Main Slider */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 md:p-16 min-h-[350px] flex flex-col items-center justify-center relative overflow-hidden border border-blue-100">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5"></div>
                
                {/* Step Content */}
                <div className="relative z-10 text-center animate-fade-in-up">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <span className="text-white text-6xl font-bold">{processSteps[currentStep].number}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{processSteps[currentStep].title}</h3>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">{processSteps[currentStep].description}</p>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-500"
                    style={{ width: `${((currentStep + 1) / processSteps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevStep}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 p-4 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110 z-20 hidden md:flex items-center justify-center"
              >
                ←
              </button>

              <button
                onClick={nextStep}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-20 p-4 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110 z-20 hidden md:flex items-center justify-center"
              >
                →
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center items-center space-x-4 mt-12">
              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <div className="text-center mt-8">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isAutoPlay 
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {isAutoPlay ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
              </button>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Why Choose CoolAir HVACR</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Industry-leading expertise and customer satisfaction</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-8 border border-gray-100 group">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300">
                  <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed, bonded, and insured for your protection</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-8 border border-gray-100 group">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300">
                  <Clock className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Service</h3>
                <p className="text-gray-600">Round-the-clock service available for your convenience</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-8 border border-gray-100 group">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300">
                  <Award className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Technicians</h3>
                <p className="text-gray-600">NATE-certified technicians with ongoing training</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-8 border border-gray-100 group">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300">
                  <Users className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">100% Satisfaction</h3>
                <p className="text-gray-600">Guaranteed satisfaction on all our services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services