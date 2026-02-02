import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Al-Mansouri',
      content: 'The quality is amazing, and the service for AC installation is excellent. Honestly, I was a bit skeptical about their HVACR services but they\'ve really transformed my space.',
      rating: 5,
      initials: 'A',
      bgColor: 'bg-teal-600',
      image: '/images/testimonial/cheerful-bearded-man-busines-clothes-showing-thumb-up-looking-camera-gray.jpg'
    },
    {
      name: 'Mohammed Al-Zaabi',
      content: 'CoolAir HVACR provided us with real good material and soft service. Their good installation and fitting is ideal for improved home improvement. Looking forward to contacting them again.',
      rating: 5,
      initials: 'M',
      bgColor: 'bg-orange-600',
      image: '/images/testimonial/close-up-portrait-excited-guy-suit-say-wow-showing-thumbs-up-with-amazed-face-checking-out-awe.jpg'
    },
    {
      name: 'Omar Al-Rashid',
      content: 'Professional commercial HVAC maintenance for our office complex. Energy bills reduced by 25% after their system optimization. Highly recommended for business needs!',
      rating: 5,
      initials: 'O',
      bgColor: 'bg-purple-600',
      image: '/images/testimonial/closeup-portrait-cheerful-guy-showing-ok-sign-while-resting-chair-office-being-satisfied-isolated-gray.jpg'
    }
  ]

  return (
    <section className="homeTestimonials__slider relative py-8 sm:py-12 lg:py-20 bg-white overflow-hidden safe-area-left safe-area-right">
      {/* Content */}
      <div className="relative z-10 py-8 sm:py-12 lg:py-16">
        <div className="w-full px-4">
          {/* Main Heading - Mobile Responsive */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up max-w-7xl mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl mb-4 sm:mb-6">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="responsive-heading font-bold mb-4 sm:mb-6 text-gray-900">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="responsive-text text-gray-600 max-w-3xl mx-auto">
              Trusted by homeowners and businesses across the region for exceptional HVACR services
            </p>
          </div>

          {/* Simple Grid Layout - Mobile Responsive */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-4 sm:p-6 lg:p-8 border border-gray-100 overflow-hidden">
                  
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Quote className="w-full h-full text-blue-600" />
                  </div>

                  {/* Rating Stars - Mobile Responsive */}
                  <div className="flex space-x-1 mb-4 sm:mb-6 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>

                  {/* Quote Icon - Mobile Responsive */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  {/* Content - Mobile Responsive */}
                  <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                    "{testimonial.content}"
                  </p>

                  {/* Author Section - Mobile Responsive */}
                  <div className="flex items-center space-x-3 sm:space-x-4 mt-auto relative z-10">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      {testimonial.initials}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-xs sm:text-sm">Satisfied Customer</p>
                    </div>
                  </div>

                  {/* Customer Image - Mobile Responsive */}
                  <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 z-20 group-hover:scale-110 transition-all duration-300">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full border-2 sm:border-3 border-white shadow-lg"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/30 group-hover:to-blue-100/30 transition-all duration-500 rounded-2xl"></div>
                </div>
              ))}
            </div>

            {/* Stats Section - Mobile Responsive */}
            <div className="grid grid-cols-3 sm:flex sm:justify-center sm:items-center mt-8 sm:mt-12 lg:mt-16 gap-4 sm:gap-8 lg:gap-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">4.9</div>
                <div className="flex space-x-1 mb-1 sm:mb-2 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-500">Average Rating</p>
              </div>
              
              <div className="w-px h-12 sm:h-16 bg-gray-300 hidden sm:block"></div>
              
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">2,500+</div>
                <p className="text-xs sm:text-sm text-gray-500">Happy Customers</p>
              </div>
              
              <div className="w-px h-12 sm:h-16 bg-gray-300 hidden sm:block"></div>
              
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">15+</div>
                <p className="text-xs sm:text-sm text-gray-500">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials