import { Award, Users, Clock, Shield, Target, Heart, CheckCircle, Zap, TrendingUp, Star, Building, Wrench, ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { Background3D } from '../Components/ThreeD/Simple3D'

// Counter animation component
const Counter = ({ end, duration = 2000, suffix = '' }) => {
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
    const endValue = parseInt(end.toString().replace(/[^0-9]/g, '')) || 0

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
    <div ref={counterRef} className="text-4xl md:text-5xl font-bold mb-2 text-white">
      {count}{suffix}
    </div>
  )
}

const About = () => {
  return (
    <>
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
              <Building className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent leading-tight">
              About Our
              <br />
              <span className="text-5xl md:text-7xl">Company</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover our journey of excellence in HVACR solutions and commitment to exceptional service
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2">
                <span>Our Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/30 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:shadow-xl">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-500 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-green-400 rounded-full animate-bounce-slow"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in-up">
              <img
                src="/hvac-ductwork.jpg"
                alt="HVAC Technicians"
                className="rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              <div className="inline-flex items-center space-x-2 bg-blue-100 rounded-full px-4 py-2">
                <Building className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-600">Our Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our <span className="text-primary">Story</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in 2008, CoolAir started as a small family-owned HVAC repair service with a simple mission: provide honest, reliable HVACR solutions that people can trust.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we've grown into a premier HVACR solutions provider, serving thousands of satisfied residential and commercial clients. Our commitment to excellence, continuous training, and adoption of the latest technologies has made us the trusted choice for HVACR services.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Award className="w-10 h-10 text-blue-600" />
                  <div>
                    <div className="font-bold text-gray-900">NATE Certified</div>
                    <div className="text-gray-600 text-sm">Expert Technicians</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Shield className="w-10 h-10 text-green-600" />
                  <div>
                    <div className="font-bold text-gray-900">Licensed</div>
                    <div className="text-gray-600 text-sm">& Fully Insured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Mission & <span className="text-primary">Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving our commitment to excellence and innovation in HVACR services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="group bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed text-blue-100">
                To provide exceptional HVACR solutions that ensure comfort, efficiency, and reliability for every client, while setting new standards in service excellence and customer satisfaction.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-200">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg leading-relaxed text-green-100">
                To be the most trusted HVACR service provider recognized for innovation, quality, and commitment to creating comfortable and sustainable environments for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Integrity</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Honest recommendations, transparent pricing, and ethical practices in every interaction with our clients.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-200">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Reliability</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                On-time service, 24/7 availability, and dependable solutions you can count on, every single time.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up animation-delay-400">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Excellence</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Highest quality workmanship, continuous improvement, and exceeding expectations in every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About