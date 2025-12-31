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
  const [dragStart, setDragStart] = useState(0)
  const [dragEnd, setDragEnd] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Restaurant Owner',
      company: 'Spice Garden',
      content: 'Their refrigeration service saved our business during peak season. The team was professional and completed the repair within hours. Outstanding service quality!',
      rating: 5,
      image: '/images/testimonial/01.jpg',
      service: 'Commercial Refrigeration',
      location: 'Mumbai'
    },
    {
      name: 'Priya Sharma',
      role: 'Homeowner',
      company: 'Residential Client',
      content: 'The AC installation was seamless. The technicians were punctual, clean, and efficient. Our home has never been more comfortable!',
      rating: 5,
      image: '/images/testimonial/02.jpg',
      service: 'AC Installation',
      location: 'Delhi'
    },
    {
      name: 'Amit Patel',
      role: 'Facility Manager',
      company: 'TechPark Inc.',
      content: 'Professional commercial HVAC maintenance for our office complex. Energy bills reduced by 25% after their system optimization. Highly recommended!',
      rating: 5,
      image: '/images/testimonial/03.jpg',
      service: 'HVAC Maintenance',
      location: 'Bangalore'
    },
    {
      name: 'Fatima Al-Mansouri',
      role: 'Hospital Administrator',
      company: 'Emirates Medical Center',
      content: 'Critical HVAC maintenance for our hospital. Their 24/7 service and expertise in medical facility requirements is exceptional.',
      rating: 5,
      image: '/images/testimonial/04.jpg',
      service: 'Medical HVAC',
      location: 'Dubai'
    },
    {
      name: 'Vikram Singh',
      role: 'Hotel Manager',
      company: 'Grand Plaza Hotel',
      content: 'Complete HVAC overhaul for our 200-room hotel. The project was completed on time and within budget. Excellent workmanship and support!',
      rating: 5,
      image: '/images/testimonial/05.jpg',
      service: 'Hotel HVAC',
      location: 'Goa'
    },
    {
      name: 'Meera Joshi',
      role: 'Store Manager',
      company: 'Fresh Mart',
      content: 'Their cold storage solutions helped us expand our business. Professional installation and ongoing maintenance support is top-notch.',
      rating: 5,
      image: '/images/testimonial/06.jpg',
      service: 'Cold Storage',
      location: 'Pune'
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
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
        </video>
        {/* Fallback gradient background if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800"></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding">
        <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400/30 to-blue-400/30 backdrop-blur-sm rounded-full mb-6 animate-bounce-slow border border-green-400/50">
            <Quote className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-700 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Trusted by homeowners and businesses across India for exceptional HVACR services
          </p>
        </div>

        {/* Main Testimonial Showcase - Card Carousel */}
        <div className="relative mb-16">
          <div 
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchEnd={handleDragEnd}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl h-full hover:from-white/25 hover:to-white/10 hover:border-green-400/50 transition-all duration-500 group">
                    <div className="text-center">
                      {/* Customer Image */}
                      <div className="relative inline-block mb-6 group/image">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-400 rounded-full blur-lg opacity-0 group-hover/image:opacity-50 transition-opacity duration-500"></div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-32 h-32 rounded-full border-4 border-white/40 shadow-lg object-cover relative z-10 group-hover/image:border-green-400/80 transition-all duration-500 transform group-hover/image:scale-110"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg transform group-hover/image:scale-125 transition-transform duration-500">
                          <ThumbsUp className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex justify-center mb-4 gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-5 h-5 fill-current text-yellow-400 transition-transform duration-300 transform group-hover:scale-125 group-hover:rotate-12"
                            style={{ transitionDelay: `${i * 50}ms` }}
                          />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-lg font-light italic text-white/95 mb-6 leading-relaxed line-clamp-4 group-hover:text-white transition-colors duration-300">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Customer Info */}
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-green-300 transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-green-400 font-semibold text-sm mb-1 group-hover:text-green-300 transition-colors duration-300">
                          {testimonial.role}
                        </p>
                        <p className="text-white/70 text-sm mb-2 group-hover:text-white/90 transition-colors duration-300">
                          {testimonial.company}
                        </p>
                        <div className="flex justify-center items-center space-x-2 text-xs text-white/60 flex-wrap gap-2">
                          <span className="bg-white/10 px-3 py-1 rounded-full group-hover:bg-green-400/30 transition-colors duration-300">
                            {testimonial.service}
                          </span>
                          <span className="bg-white/10 px-3 py-1 rounded-full group-hover:bg-blue-400/30 transition-colors duration-300">
                            📍 {testimonial.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 md:-translate-x-20 p-2 md:p-3 rounded-lg bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl shadow-lg z-20 group border border-white/40 hover:border-white/80"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 md:translate-x-20 p-2 md:p-3 rounded-lg bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all duration-300 transform hover:scale-110 hover:shadow-xl shadow-lg z-20 group border border-white/40 hover:border-white/80"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center items-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-500 transform hover:scale-150 ${
                  currentIndex === index 
                    ? 'bg-gradient-to-r from-green-400 to-green-500 shadow-lg shadow-green-400/50 w-8 h-3' 
                    : 'bg-white/40 hover:bg-white/60 w-3 h-3'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-8 animate-fade-in-up animation-delay-1400">
        </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials