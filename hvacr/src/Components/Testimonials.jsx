import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote, Users, Clock, Award, ThumbsUp } from 'lucide-react'

// Counter animation component for testimonials
const TestimonialCounter = ({ end, duration = 2000, suffix = '' }) => {
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

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Restaurant Owner',
      company: 'Spice Garden',
      content: 'Their refrigeration service saved our business during peak season. The team was professional and completed the repair within hours. Outstanding service quality!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
      service: 'Commercial Refrigeration',
      location: 'Mumbai'
    },
    {
      name: 'Priya Sharma',
      role: 'Homeowner',
      company: 'Residential Client',
      content: 'The AC installation was seamless. The technicians were punctual, clean, and efficient. Our home has never been more comfortable!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
      service: 'AC Installation',
      location: 'Delhi'
    },
    {
      name: 'Amit Patel',
      role: 'Facility Manager',
      company: 'TechPark Inc.',
      content: 'Professional commercial HVAC maintenance for our office complex. Energy bills reduced by 25% after their system optimization. Highly recommended!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
      service: 'HVAC Maintenance',
      location: 'Bangalore'
    },
    {
      name: 'Sunita Reddy',
      role: 'Hospital Administrator',
      company: 'City Medical Center',
      content: 'Critical HVAC maintenance for our hospital. Their 24/7 service and expertise in medical facility requirements is exceptional.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sunita',
      service: 'Medical HVAC',
      location: 'Hyderabad'
    },
    {
      name: 'Vikram Singh',
      role: 'Hotel Manager',
      company: 'Grand Plaza Hotel',
      content: 'Complete HVAC overhaul for our 200-room hotel. The project was completed on time and within budget. Excellent workmanship and support!',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram',
      service: 'Hotel HVAC',
      location: 'Goa'
    },
    {
      name: 'Meera Joshi',
      role: 'Store Manager',
      company: 'Fresh Mart',
      content: 'Their cold storage solutions helped us expand our business. Professional installation and ongoing maintenance support is top-notch.',
      rating: 5,
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Meera',
      service: 'Cold Storage',
      location: 'Pune'
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/hvacr-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding">
        <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-bounce-slow">
            <Quote className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Trusted by homeowners and businesses across India for exceptional HVACR services
          </p>
        </div>

        {/* Main Testimonial Showcase */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl animate-fade-in-up animation-delay-200">
            <div className="text-center">
              {/* Customer Image */}
              <div className="relative inline-block mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full border-4 border-white/30 shadow-lg animate-scale-in"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <ThumbsUp className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center mb-6 animate-fade-in-up animation-delay-400">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 fill-current text-yellow-400 mx-1 animate-star-glow" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-2xl md:text-3xl font-light italic text-white/95 mb-8 leading-relaxed animate-fade-in-up animation-delay-600">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Customer Info */}
              <div className="animate-fade-in-up animation-delay-800">
                <h4 className="text-2xl font-bold text-white mb-2">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-green-400 font-semibold mb-1">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-white/70 mb-2">
                  {testimonials[currentIndex].company}
                </p>
                <div className="flex justify-center items-center space-x-4 text-sm text-white/60">
                  <span className="bg-white/10 px-3 py-1 rounded-full">
                    {testimonials[currentIndex].service}
                  </span>
                  <span className="bg-white/10 px-3 py-1 rounded-full">
                    📍 {testimonials[currentIndex].location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-6 animate-fade-in-up animation-delay-1000">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    currentIndex === index 
                      ? 'bg-green-400 shadow-lg shadow-green-400/50' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-4 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-1200">
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <TestimonialCounter end="1000" suffix="+" />
            <div className="text-white/80 font-medium">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <TestimonialCounter end="24" suffix="/7" />
            <div className="text-white/80 font-medium">24/7 Service</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <TestimonialCounter end="15" suffix="+" />
            <div className="text-white/80 font-medium">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <ThumbsUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <TestimonialCounter end="100" suffix="%" />
            <div className="text-white/80 font-medium">Satisfaction</div>
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-8 animate-fade-in-up animation-delay-1400">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-white/60 hover:text-white/80 transition-colors text-sm"
          >
            {isAutoPlaying ? '⏸️ Pause Auto-play' : '▶️ Resume Auto-play'}
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials