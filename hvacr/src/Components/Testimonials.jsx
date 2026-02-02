import { useEffect, useRef } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const Testimonials = () => {
  const swiperRef = useRef(null)

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
    },
    {
      name: 'Khalid Al-Maktoum',
      content: 'I recently purchased HVACR services from CoolAir, and I\'m absolutely delighted with the quality. The experience was amazing right from consultation to installation, the staff were all professional.',
      rating: 5,
      initials: 'K',
      bgColor: 'bg-blue-600',
      image: '/images/testimonial/male-suit-showing-thumb-up.jpg'
    },
    {
      name: 'Hassan Al-Nuaimi', 
      content: 'I recently bought AC installation from CoolAir HVACR and I couldn\'t be happier with my purchase. The fitting process was seamless! I highly recommend CoolAir for luxury HVACR services.',
      rating: 5,
      initials: 'H',
      bgColor: 'bg-green-600',
      image: '/images/testimonial/pleased-handsome-male-customer-show-thumb-up-approval.jpg'
    },
    {
      name: 'Sarah Al-Qasimi',
      content: 'Their cold storage solutions helped us expand our business. Professional installation and ongoing maintenance support is top-notch. Great team and excellent service quality.',
      rating: 5,
      initials: 'S',
      bgColor: 'bg-pink-600',
      image: '/images/testimonial/satisfied-happy-female-customer-making-like-gesture.jpg'
    },
    {
      name: 'Fatima Al-Zahra',
      content: 'Excellent customer service and professional HVAC installation. The team was punctual, clean, and very knowledgeable. Our home comfort has improved significantly!',
      rating: 5,
      initials: 'F',
      bgColor: 'bg-indigo-600',
      image: '/images/testimonial/young-woman-making-ok-sign.jpg'
    },
    {
      name: 'Abdullah Al-Rashid',
      content: 'Outstanding refrigeration services for our restaurant. The team installed our commercial cooling system perfectly and provides excellent ongoing maintenance support.',
      rating: 5,
      initials: 'A',
      bgColor: 'bg-red-600',
      image: '/images/testimonial/well-done-satisfied-businessman-suit-showing-thumbs-up-approval-like-agree-recommend-good.jpg'
    }
  ]

  return (
    <section className="homeTestimonials__slider relative py-20 bg-white overflow-hidden">
      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="w-full px-4">
          {/* Main Heading */}
          <div className="text-center mb-16 animate-fade-in-up max-w-7xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by homeowners and businesses across the region for exceptional HVACR services
            </p>
          </div>

          {/* Enhanced Swiper Testimonials */}
          <div className="relative max-w-7xl mx-auto">
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
              <button 
                className="swiper-button-prev-custom w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
              <button 
                className="swiper-button-next-custom w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 border border-gray-200"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Swiper Container */}
            <div className="swiper">
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                slidesPerView="auto"
                spaceBetween={30}
                speed={1200}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  el: '.swiper-pagination-custom',
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1280: {
                    slidesPerView: 3.5,
                    spaceBetween: 40,
                  }
                }}
                className="testimonials-swiper"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index} className="!w-80">
                    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 p-8 h-full min-h-[400px] border border-gray-100 overflow-hidden">
                      
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                        <Quote className="w-full h-full text-blue-600" />
                      </div>

                      {/* Rating Stars */}
                      <div className="flex space-x-1 mb-6 relative z-10">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" 
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>

                      {/* Quote Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Quote className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <p className="text-gray-700 mb-8 leading-relaxed text-base flex-1 relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                        "{testimonial.content}"
                      </p>

                      {/* Author Section */}
                      <div className="flex items-center space-x-4 mt-auto relative z-10">
                        <div className={`w-14 h-14 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300`}>
                          {testimonial.initials}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500 text-sm">Satisfied Customer</p>
                        </div>
                      </div>

                      {/* Customer Image */}
                      <div className="absolute bottom-6 right-6 w-16 h-16 z-20 group-hover:scale-110 transition-all duration-300">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-full border-3 border-white shadow-lg"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      </div>

                      {/* Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/30 group-hover:to-blue-100/30 transition-all duration-500 rounded-2xl"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-center mt-12 space-x-2"></div>

            {/* Stats Section */}
            <div className="flex justify-center items-center mt-16 space-x-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">4.9</div>
                <div className="flex space-x-1 mb-2 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">Average Rating</p>
              </div>
              
              <div className="w-px h-16 bg-gray-300"></div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">2,500+</div>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
              
              <div className="w-px h-16 bg-gray-300"></div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials