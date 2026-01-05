import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragStart, setDragStart] = useState(0)
  const [dragEnd, setDragEnd] = useState(0)

  const testimonials = [
    {
      name: 'Amit Patel',
      content: 'The quality is amazing, and the service for AC installation is excellent. Honestly, I was a bit skeptical about their HVACR services but they\'ve really transformed my space.',
      rating: 5,
      initials: 'A',
      bgColor: 'bg-teal-600'
    },
    {
      name: 'Fatima Al-Mansouri',
      content: 'CoolAir HVACR provided us with real good material and soft service. Their good installation and fitting is ideal for improved home improvement. Looking forward to contacting them again.',
      rating: 5,
      initials: 'F',
      bgColor: 'bg-orange-600'
    },
    {
      name: 'Vikram Singh',
      content: 'Professional commercial HVAC maintenance for our office complex. Energy bills reduced by 25% after their system optimization. Highly recommended for business needs!',
      rating: 5,
      initials: 'V',
      bgColor: 'bg-purple-600'
    },
    {
      name: 'Rajesh Kumar',
      content: 'I recently purchased HVACR services from CoolAir, and I\'m absolutely delighted with the quality. The experience was amazing right from consultation to installation, the staff were all professional.',
      rating: 5,
      initials: 'R',
      bgColor: 'bg-blue-600'
    },
    {
      name: 'Priya Sharma', 
      content: 'I recently bought AC installation from CoolAir HVACR and I couldn\'t be happier with my purchase. The fitting process was seamless! I highly recommend CoolAir for luxury HVACR services.',
      rating: 5,
      initials: 'P',
      bgColor: 'bg-green-600'
    },
    {
      name: 'Meera Joshi',
      content: 'Their cold storage solutions helped us expand our business. Professional installation and ongoing maintenance support is top-notch. Great team and excellent service quality.',
      rating: 5,
      initials: 'M',
      bgColor: 'bg-pink-600'
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2))
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2))
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
    <section className="relative py-20 text-white overflow-hidden">
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
      <div className="relative z-10 py-16">
        <div className="w-full px-4">
          {/* Main Heading */}
          <div className="text-center mb-16 animate-fade-in-up max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-700 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Trusted by homeowners and businesses across India for exceptional HVACR services
            </p>
          </div>

          {/* Full Width Glass Background */}
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12 w-full">
            <div className="grid lg:grid-cols-8 gap-8 items-center">
              {/* Left Side - Header */}
              <div className="lg:col-span-2 space-y-8 text-right">
                <div className="space-y-4">
                  <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                    CLIENT FEEDBACK
                  </p>
                  <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
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
                      <p className="text-sm text-white/70 text-right">2,958 Rating</p>
                    </div>
                    <span className="text-6xl font-bold text-white order-1">4.82</span>
                  </div>
                </div>
              </div>

              {/* Right Side - 3 Cards Row */}
              <div className="lg:col-span-6 relative max-w-none w-full">
                {/* Cards Container with Line Effect */}
                <div className="relative">
                  {/* Background Line Effect */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-y-1/2 z-0"></div>
                  
                  <div className="overflow-hidden w-full max-w-none relative z-10">
                    <div 
                      className="flex transition-transform duration-700 ease-in-out gap-6 cursor-grab active:cursor-grabbing"
                      style={{ transform: `translateX(-${currentIndex * (320 + 24)}px)` }}
                      onMouseDown={handleDragStart}
                      onMouseUp={handleDragEnd}
                      onTouchStart={handleDragStart}
                      onTouchEnd={handleDragEnd}
                    >
                      {testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className="w-80 flex-shrink-0 relative"
                        >
                          {/* Card with enhanced shadow for depth */}
                          <div className={`bg-white rounded-2xl p-6 shadow-2xl h-full min-h-[320px] flex flex-col transition-all duration-500 ${
                            index >= currentIndex && index < currentIndex + 3 
                              ? 'opacity-100 scale-100 z-20' 
                              : 'opacity-60 scale-95 z-10'
                          }`}>
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
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mt-8">
                  {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-orange-400 scale-125' 
                          : 'bg-white/30 hover:bg-white/50'
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