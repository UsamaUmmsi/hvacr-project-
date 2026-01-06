import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  const testimonials = [
    {
      name: 'Ahmed Al-Mansouri',
      content: 'The quality is amazing, and the service for AC installation is excellent. Honestly, I was a bit skeptical about their HVACR services but they\'ve really transformed my space.',
      rating: 5,
      initials: 'A',
      bgColor: 'bg-teal-600',
      image: '/images/testimonial/01.jpg'
    },
    {
      name: 'Mohammed Al-Zaabi',
      content: 'CoolAir HVACR provided us with real good material and soft service. Their good installation and fitting is ideal for improved home improvement. Looking forward to contacting them again.',
      rating: 5,
      initials: 'M',
      bgColor: 'bg-orange-600',
      image: '/images/testimonial/02.jpg'
    },
    {
      name: 'Omar Al-Rashid',
      content: 'Professional commercial HVAC maintenance for our office complex. Energy bills reduced by 25% after their system optimization. Highly recommended for business needs!',
      rating: 5,
      initials: 'O',
      bgColor: 'bg-purple-600',
      image: '/images/testimonial/03.jpg'
    },
    {
      name: 'Khalid Al-Maktoum',
      content: 'I recently purchased HVACR services from CoolAir, and I\'m absolutely delighted with the quality. The experience was amazing right from consultation to installation, the staff were all professional.',
      rating: 5,
      initials: 'K',
      bgColor: 'bg-blue-600',
      image: '/images/testimonial/04.jpg'
    },
    {
      name: 'Hassan Al-Nuaimi', 
      content: 'I recently bought AC installation from CoolAir HVACR and I couldn\'t be happier with my purchase. The fitting process was seamless! I highly recommend CoolAir for luxury HVACR services.',
      rating: 5,
      initials: 'H',
      bgColor: 'bg-green-600',
      image: '/images/testimonial/05.jpg'
    },
    {
      name: 'Saeed Al-Qasimi',
      content: 'Their cold storage solutions helped us expand our business. Professional installation and ongoing maintenance support is top-notch. Great team and excellent service quality.',
      rating: 5,
      initials: 'S',
      bgColor: 'bg-pink-600',
      image: '/images/testimonial/06.jpg'
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2))
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length, isDragging])

  // Global mouse events for better drag experience
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (isDragging) {
        handleDragMove(e)
      }
    }

    const handleGlobalMouseUp = (e) => {
      if (isDragging) {
        handleDragEnd(e)
      }
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDragging, dragStart, dragOffset])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2))
  }

  const handleDragStart = (e) => {
    setIsDragging(true)
    setDragStart(e.clientX || e.touches?.[0]?.clientX)
    setDragOffset(0)
    e.preventDefault()
  }

  const handleDragMove = (e) => {
    if (!isDragging) return
    
    const currentX = e.clientX || e.touches?.[0]?.clientX
    const offset = currentX - dragStart
    setDragOffset(offset)
    e.preventDefault()
  }

  const handleDragEnd = (e) => {
    if (!isDragging) return
    
    setIsDragging(false)
    const threshold = 100
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        prevSlide()
      } else {
        nextSlide()
      }
    }
    
    setDragOffset(0)
  }

  // Add mouse leave handler to stop dragging if mouse leaves the area
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setDragOffset(0)
    }
  }

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="w-full px-4">
          {/* Main Heading */}
          <div className="text-center mb-16 animate-fade-in-up max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by homeowners and businesses across India for exceptional HVACR services
            </p>
          </div>

          {/* Full Width Glass Background */}
          <div className="relative bg-gray-100 backdrop-blur-lg rounded-3xl border border-gray-300 shadow-2xl p-12 md:p-16 pb-16 md:pb-20 w-full">
            <div className="grid lg:grid-cols-8 gap-8 items-center">
              {/* Left Side - Header */}
              <div className="lg:col-span-2 space-y-8 text-right">
                <div className="space-y-4">
                  <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                    CLIENT FEEDBACK
                  </p>
                  <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Hear from<br />clients.
                  </h2>
                </div>
                
                {/* Rating Display */}
                <div className="space-y-4">
                  <div className="flex items-end space-x-4 justify-end">
                    <div className="pb-2 order-2">
                      <div className="flex space-x-1 mb-1 justify-end">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 text-right">2,958 Rating</p>
                    </div>
                    <span className="text-6xl font-bold text-gray-900 order-1">4.82</span>
                  </div>
                </div>
              </div>

              {/* Right Side - 3 Cards Row */}
              <div className="lg:col-span-6 relative max-w-none w-full">
                {/* Cards Container with Line Effect */}
                <div className="relative">
                  {/* Background Line Effect */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent transform -translate-y-1/2 z-0"></div>
                  
                  <div className="overflow-hidden w-full max-w-none relative z-10">
                    <div 
                      className="flex transition-transform duration-700 ease-in-out gap-6 cursor-grab active:cursor-grabbing select-none"
                      style={{ 
                        transform: `translateX(${-currentIndex * (320 + 24) + dragOffset}px)`,
                        transition: isDragging ? 'none' : 'transform 0.7s ease-in-out'
                      }}
                      onMouseDown={handleDragStart}
                      onMouseMove={handleDragMove}
                      onMouseUp={handleDragEnd}
                      onMouseLeave={handleMouseLeave}
                      onTouchStart={handleDragStart}
                      onTouchMove={handleDragMove}
                      onTouchEnd={handleDragEnd}
                    >
                      {testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className="w-80 flex-shrink-0 relative"
                        >
                          {/* Card with enhanced shadow for depth */}
                          <div 
                            className={`bg-white p-6 shadow-lg h-full min-h-[320px] flex flex-col transition-all duration-500 rounded-2xl ${
                              index >= currentIndex && index < currentIndex + 3 
                                ? 'opacity-100 scale-100 z-20' 
                                : 'opacity-60 scale-95 z-10'
                            }`}
                          >
                            {/* Rating Stars */}
                            <div className="flex space-x-1 mb-4">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                              ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-700 mb-6 leading-relaxed text-sm flex-1">
                              {testimonial.content}
                            </p>

                            {/* Author */}
                            <div className="flex items-center space-x-3 mt-auto">
                              <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                                {testimonial.initials}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 text-base">{testimonial.name}</h4>
                              </div>
                            </div>

                            {/* Person Image in Bottom Right Corner */}
                            <div className="absolute bottom-4 right-4 w-16 h-16 z-20">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="w-full h-full object-cover rounded-full border-2 border-white shadow-md"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mt-16">
                  {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-orange-400 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials