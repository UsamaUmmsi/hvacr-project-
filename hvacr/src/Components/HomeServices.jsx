import { CheckCircle, Clock, Shield, Award, Zap, Wrench, Thermometer, Sparkles, ChevronDown, Users } from 'lucide-react'
import { useState } from 'react'

const HomeServices = () => {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <div className="bg-gray-50 py-16">
      <div className="container-custom">
        {/* Enhanced Header */}
        <div className="text-center mb-16 relative">
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-1/4 w-20 h-20 bg-blue-500/10 rounded-full animate-float-slow"></div>
            <div className="absolute top-20 right-1/3 w-16 h-16 bg-green-500/10 rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-10 left-1/3 w-12 h-12 bg-orange-500/10 rounded-full animate-float-slow" style={{ animationDelay: '4s' }}></div>
          </div>

          {/* Icon with Enhanced Animation */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-8 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-500 animate-bounce-slow">
            <Sparkles className="w-10 h-10 text-white animate-pulse" />
          </div>

          {/* Enhanced Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 relative">
            <span className="relative inline-block">
              Our HVACR 
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full animate-pulse"></div>
            </span>
            <span className="text-primary ml-3 relative inline-block">
              Services
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
            </span>
          </h1>

          {/* Enhanced Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              Professional solutions with modern technology and expert craftsmanship
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {[
                { number: '5000+', label: 'Happy Clients', icon: Users },
                { number: '15+', label: 'Years Experience', icon: Award },
                { number: '24/7', label: 'Emergency Service', icon: Clock },
                { number: '100%', label: 'Satisfaction', icon: CheckCircle }
              ].map((stat, index) => {
                const StatIcon = stat.icon
                return (
                  <div 
                    key={index} 
                    className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <StatIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { 
              name: 'AC Installation', 
              desc: 'Professional installation with warranty', 
              price: '$3,500+', 
              icon: Zap, 
              color: 'blue',
              gradient: 'from-blue-500 to-blue-600',
              features: ['Free Consultation', '5-Year Warranty', 'Same Day Service'],
              image: '/3d-rendering-ventilation-system.jpg'
            },
            { 
              name: 'AC Repair', 
              desc: 'Fast 24/7 emergency repair service', 
              price: '$99+', 
              icon: Wrench, 
              color: 'green',
              gradient: 'from-green-500 to-green-600',
              features: ['24/7 Emergency', 'Licensed Techs', 'Upfront Pricing'],
              image: '/close-up-ventilation-system.jpg'
            },
            { 
              name: 'Heating Systems', 
              desc: 'Complete heating solutions & maintenance', 
              price: '$2,500+', 
              icon: Thermometer, 
              color: 'orange',
              gradient: 'from-orange-500 to-orange-600',
              features: ['Energy Efficient', 'Expert Install', 'Full Support'],
              image: '/hvac-ductwork.jpg'
            },
            { 
              name: 'Maintenance', 
              desc: 'Regular tune-ups & preventive care', 
              price: '$129+', 
              icon: CheckCircle, 
              color: 'purple',
              gradient: 'from-purple-500 to-purple-600',
              features: ['Scheduled Service', 'Cost Savings', 'Extended Life'],
              image: '/3d-rendering-ventilation-system (2).jpg'
            },
          ].map((service, index) => {
            const ServiceIcon = service.icon
            return (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Icon with Enhanced Animation */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <ServiceIcon className="w-8 h-8 text-white" />
                  </div>

                  {/* Service Name */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 group-hover:text-white/90 text-sm mb-4 transition-colors duration-300">
                    {service.desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0"
                        style={{ transitionDelay: `${i * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                        <span className="text-white/90 text-xs font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <p className={`text-${service.color}-600 group-hover:text-white font-bold text-lg transition-colors duration-300`}>
                      {service.price}
                    </p>
                    <button className={`px-4 py-2 bg-${service.color}-100 group-hover:bg-white text-${service.color}-600 group-hover:text-${service.color}-600 rounded-lg text-sm font-semibold transition-all duration-300 transform group-hover:scale-105 shadow-md`}>
                      Book Now
                    </button>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Sparkles className="w-4 h-4 text-white animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${service.color}-300 transition-all duration-500`}></div>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
              </div>
            )
          })}
        </div>

        {/* Why Choose Us - Enhanced Interactive Book */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose <span className="text-primary">CoolAir HVACR</span>
            </h2>
            <p className="text-lg text-gray-600">Explore our advantages - Click pages or use navigation</p>
          </div>

          {/* Enhanced Book Container */}
          <div className="max-w-5xl mx-auto relative">
            <div className="book-container-enhanced relative perspective-1200 h-96">
              
              {/* Book Base Shadow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-black/10 rounded-full blur-sm"></div>
              
              {/* Book Spine */}
              <div className="absolute left-1/2 top-4 bottom-4 w-6 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 transform -translate-x-1/2 z-20 rounded-sm shadow-2xl border-l border-r border-gray-600">
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold writing-vertical tracking-wider">
                  COOLAIR HVACR
                </div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gold rounded-full"></div>
              </div>

              {/* Left Side Content - Dynamic Images */}
              <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-l-2xl shadow-2xl border-r-4 border-gray-400 overflow-hidden">
                
                {/* Dynamic Background Images */}
                <div className="absolute inset-0">
                  {/* Image for Page 0 - Licensed & Insured */}
                  <div className={`absolute inset-0 transition-all duration-700 ${
                    currentPage === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}>
                    <img 
                      src="/3d-rendering-ventilation-system.jpg" 
                      alt="Licensed Professional" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/60"></div>
                  </div>

                  {/* Image for Page 1 - 24/7 Service */}
                  <div className={`absolute inset-0 transition-all duration-700 ${
                    currentPage === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}>
                    <img 
                      src="/close-up-ventilation-system.jpg" 
                      alt="24/7 Emergency Service" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-green-900/60"></div>
                  </div>

                  {/* Image for Page 2 - Certified Technicians */}
                  <div className={`absolute inset-0 transition-all duration-700 ${
                    currentPage === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}>
                    <img 
                      src="/hvac-ductwork.jpg" 
                      alt="Certified Technician" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-purple-900/60"></div>
                  </div>

                  {/* Image for Page 3 - Satisfaction Guarantee */}
                  <div className={`absolute inset-0 transition-all duration-700 ${
                    currentPage === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}>
                    <img 
                      src="/3d-rendering-ventilation-system (2).jpg" 
                      alt="Satisfied Customer" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-orange-900/60"></div>
                  </div>

                  {/* Image for Page 4 - Energy Efficient */}
                  <div className={`absolute inset-0 transition-all duration-700 ${
                    currentPage === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}>
                    <img 
                      src="/3d-rendering-ventilation-system (3).jpg" 
                      alt="Energy Efficient System" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-yellow-900/60"></div>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-center z-10">
                  <div className="text-center transform -rotate-1">
                    
                    {/* Dynamic Icon based on current page */}
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl border border-white/30">
                      {currentPage === 0 && <Shield className="w-12 h-12 text-white" />}
                      {currentPage === 1 && <Clock className="w-12 h-12 text-white" />}
                      {currentPage === 2 && <Award className="w-12 h-12 text-white" />}
                      {currentPage === 3 && <Users className="w-12 h-12 text-white" />}
                      {currentPage === 4 && <Zap className="w-12 h-12 text-white" />}
                    </div>

                    {/* Dynamic Title */}
                    <h3 className="text-3xl font-bold text-white mb-4 font-serif drop-shadow-lg">
                      {currentPage === 0 && "Professional Excellence"}
                      {currentPage === 1 && "Always Available"}
                      {currentPage === 2 && "Expert Certified"}
                      {currentPage === 3 && "Customer Focused"}
                      {currentPage === 4 && "Eco-Friendly Solutions"}
                    </h3>

                    {/* Dynamic Description */}
                    <p className="text-white/90 leading-relaxed text-lg mb-6 drop-shadow">
                      {currentPage === 0 && "Licensed professionals with comprehensive insurance coverage for your complete peace of mind."}
                      {currentPage === 1 && "Round-the-clock emergency service available 365 days a year for urgent HVACR needs."}
                      {currentPage === 2 && "NATE certified technicians with ongoing training and proven expertise in all systems."}
                      {currentPage === 3 && "100% satisfaction guarantee on all services with our customer-first approach."}
                      {currentPage === 4 && "Energy-efficient solutions that save money while protecting the environment."}
                    </p>

                    {/* Dynamic Stats */}
                    <div className="flex justify-center space-x-4 mb-4">
                      {currentPage === 0 && (
                        <>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">100%</div>
                            <div className="text-xs text-white/80">Licensed</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">$2M</div>
                            <div className="text-xs text-white/80">Insured</div>
                          </div>
                        </>
                      )}
                      {currentPage === 1 && (
                        <>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">24/7</div>
                            <div className="text-xs text-white/80">Available</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">365</div>
                            <div className="text-xs text-white/80">Days</div>
                          </div>
                        </>
                      )}
                      {currentPage === 2 && (
                        <>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">NATE</div>
                            <div className="text-xs text-white/80">Certified</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">15+</div>
                            <div className="text-xs text-white/80">Years Exp</div>
                          </div>
                        </>
                      )}
                      {currentPage === 3 && (
                        <>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">100%</div>
                            <div className="text-xs text-white/80">Satisfied</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">5000+</div>
                            <div className="text-xs text-white/80">Clients</div>
                          </div>
                        </>
                      )}
                      {currentPage === 4 && (
                        <>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">40%</div>
                            <div className="text-xs text-white/80">Savings</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">★★★★★</div>
                            <div className="text-xs text-white/80">Energy Star</div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="text-sm text-white/70 font-medium">
                      {currentPage + 1} of 5 • Click to explore →
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Dynamic Content Based on Current Page */}
              <div className="absolute right-0 top-0 w-1/2 h-full">
                
                {/* Page Content */}
                <div className="relative w-full h-full">
                  
                  {/* Page 0 - Licensed & Insured */}
                  <div className={`absolute inset-0 transition-all duration-700 transform ${
                    currentPage === 0 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-y-90'
                  }`}>
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-r-2xl shadow-2xl p-8 border-l-4 border-blue-400">
                      <div className="h-full flex flex-col justify-center transform rotate-1">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg animate-bounce-slow">
                          <Shield className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Licensed & Insured</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          Fully licensed professionals with comprehensive insurance coverage for complete peace of mind and protection.
                        </p>
                        <div className="space-y-3">
                          {['State Licensed Technicians', 'Full Liability Coverage', 'Bonded & Insured'].map((item, i) => (
                            <div key={i} className="flex items-center animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                              <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page 1 - 24/7 Service */}
                  <div className={`absolute inset-0 transition-all duration-700 transform ${
                    currentPage === 1 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-y-90'
                  }`}>
                    <div className="w-full h-full bg-gradient-to-br from-green-50 to-green-100 rounded-r-2xl shadow-2xl p-8 border-l-4 border-green-400">
                      <div className="h-full flex flex-col justify-center transform rotate-1">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg animate-bounce-slow">
                          <Clock className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">24/7 Emergency Service</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          Round-the-clock availability for urgent HVACR issues. We're here when you need us most, day or night.
                        </p>
                        <div className="space-y-3">
                          {['Always Available', 'Emergency Response', 'Same Day Service'].map((item, i) => (
                            <div key={i} className="flex items-center animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                              <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page 2 - Certified Technicians */}
                  <div className={`absolute inset-0 transition-all duration-700 transform ${
                    currentPage === 2 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-y-90'
                  }`}>
                    <div className="w-full h-full bg-gradient-to-br from-purple-50 to-purple-100 rounded-r-2xl shadow-2xl p-8 border-l-4 border-purple-400">
                      <div className="h-full flex flex-col justify-center transform rotate-1">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg animate-bounce-slow">
                          <Award className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">NATE Certified Experts</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          Industry-certified technicians with ongoing training and proven expertise in all HVACR systems.
                        </p>
                        <div className="space-y-3">
                          {['NATE Certified', 'Continuous Training', 'Expert Knowledge'].map((item, i) => (
                            <div key={i} className="flex items-center animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                              <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page 3 - Satisfaction Guarantee */}
                  <div className={`absolute inset-0 transition-all duration-700 transform ${
                    currentPage === 3 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-y-90'
                  }`}>
                    <div className="w-full h-full bg-gradient-to-br from-orange-50 to-orange-100 rounded-r-2xl shadow-2xl p-8 border-l-4 border-orange-400">
                      <div className="h-full flex flex-col justify-center transform rotate-1">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg animate-bounce-slow">
                          <Users className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">100% Satisfaction</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          We stand behind our work with a complete satisfaction guarantee on all services and installations.
                        </p>
                        <div className="space-y-3">
                          {['Quality Guaranteed', 'Customer First', 'Money Back Promise'].map((item, i) => (
                            <div key={i} className="flex items-center animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                              <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                              <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page 4 - Energy Efficient */}
                  <div className={`absolute inset-0 transition-all duration-700 transform ${
                    currentPage === 4 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-y-90'
                  }`}>
                    <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-r-2xl shadow-2xl p-8 border-l-4 border-yellow-400">
                      <div className="h-full flex flex-col justify-center transform rotate-1">
                        <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg animate-bounce-slow">
                          <Zap className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Energy Efficient</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          Modern, eco-friendly systems that save money on energy bills while protecting the environment.
                        </p>
                        <div className="space-y-3">
                          {['Energy Star Certified', 'Cost Savings', 'Eco-Friendly'].map((item, i) => (
                            <div key={i} className="flex items-center animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-pulse"></div>
                              <span className="text-gray-700 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Click Area for Page Flip */}
                <div 
                  className="absolute inset-0 cursor-pointer z-10"
                  onClick={() => setCurrentPage((prev) => (prev + 1) % 5)}
                ></div>

              </div>

            </div>

            {/* Enhanced Navigation Controls */}
            <div className="flex justify-center items-center mt-8 space-x-6">
              
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((prev) => (prev - 1 + 5) % 5)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <ChevronDown className="w-4 h-4 rotate-90 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Previous</span>
              </button>

              {/* Page Indicators */}
              <div className="flex space-x-3">
                {[0, 1, 2, 3, 4].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`relative transition-all duration-300 ${
                      currentPage === page 
                        ? 'w-8 h-8 scale-125' 
                        : 'w-6 h-6 hover:scale-110'
                    }`}
                  >
                    <div className={`w-full h-full rounded-full transition-all duration-300 ${
                      currentPage === page 
                        ? 'bg-blue-500 shadow-lg shadow-blue-500/50' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}></div>
                    {currentPage === page && (
                      <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((prev) => (prev + 1) % 5)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <span className="text-sm font-medium text-gray-700">Next</span>
                <ChevronDown className="w-4 h-4 -rotate-90 text-gray-600" />
              </button>

            </div>

            {/* Auto-play Toggle */}
            <div className="text-center mt-4">
              <button
                onClick={() => {
                  // Auto-play functionality can be added here
                  const interval = setInterval(() => {
                    setCurrentPage((prev) => (prev + 1) % 5)
                  }, 3000)
                  setTimeout(() => clearInterval(interval), 15000) // Stop after 15 seconds
                }}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300"
              >
                ▶ Auto-play demo (15s)
              </button>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default HomeServices