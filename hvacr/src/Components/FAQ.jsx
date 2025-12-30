import { useState, useRef } from 'react'
import { ChevronDown, HelpCircle, MessageCircle, Phone, Clock, Award, Shield } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const contentRefs = useRef([])

  const faqs = [
    {
      question: 'What HVAC services do you offer?',
      answer: 'We provide comprehensive HVAC services including installation, repair, maintenance for heating, ventilation, air conditioning, and refrigeration systems for both residential and commercial properties. Our services cover everything from routine maintenance to complete system replacements.',
      category: 'Services'
    },
    {
      question: 'How often should I service my HVAC system?',
      answer: 'We recommend biannual maintenance - once before cooling season (spring) and once before heating season (fall). Regular maintenance improves efficiency by up to 15%, prevents costly breakdowns, and extends system lifespan by 5-10 years.',
      category: 'Maintenance'
    },
    {
      question: 'What are signs my HVAC needs repair?',
      answer: 'Watch for unusual noises (grinding, squealing), weak airflow, inconsistent temperatures between rooms, frequent cycling on/off, unexpectedly high energy bills, strange odors, and visible leaks. These indicate your system needs professional attention.',
      category: 'Troubleshooting'
    },
    {
      question: 'Do you offer 24/7 services?',
      answer: 'Yes! We provide 24/7 HVAC services, 365 days a year. Our team responds within 2 hours for urgent repairs. We understand that HVAC failures don\'t wait for business hours, especially during extreme weather.',
      category: 'Service'
    },
    {
      question: 'Are your technicians certified?',
      answer: 'All our technicians are NATE-certified (North American Technician Excellence), EPA certified for refrigerant handling, and continuously trained on the latest HVAC technologies, safety protocols, and energy efficiency standards.',
      category: 'Certification'
    },
    {
      question: 'What brands do you work with?',
      answer: 'We work with all major brands including Carrier, Trane, Lennox, Rheem, Goodman, York, Mitsubishi, Daikin, and more. We provide brand-specific expertise and maintain extensive parts inventory for optimal performance and quick repairs.',
      category: 'Equipment'
    },
    {
      question: 'Do you offer maintenance plans?',
      answer: 'Yes, we offer customizable maintenance plans starting at $199/year. Plans include bi-annual inspections, priority service, 15% discount on repairs, extended equipment warranties, and seasonal reminders.',
      category: 'Plans'
    },
    {
      question: 'How long does installation take?',
      answer: 'Residential HVAC installation typically takes 1-2 days for standard replacements. New installations may take 2-3 days. Commercial installations vary based on system size and complexity, usually 3-7 days. We provide detailed timelines during consultation.',
      category: 'Installation'
    },
    {
      question: 'What financing options are available?',
      answer: 'We offer flexible financing options including 0% APR for qualified customers, extended payment plans up to 60 months, and seasonal promotions. We work with multiple lenders to find the best option for your budget.',
      category: 'Financing'
    },
    {
      question: 'Do you provide warranties?',
      answer: 'Yes! We provide comprehensive warranties: 10-year parts warranty on equipment, 2-year labor warranty on installations, and 1-year warranty on all repairs. Extended warranty options are also available.',
      category: 'Warranty'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-500 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-green-400 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="container-custom relative z-10">
        
        {/* Header - Left Aligned */}
        <div className="text-left mb-12 animate-fade-in-up">
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full animate-bounce-slow">
              <HelpCircle className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 mt-2">
                Get answers to common questions about our professional HVACR services
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Side - Fixed Sidebar */}
          <div className="lg:col-span-1 lg:order-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Quick Stats - Horizontal Layout */}
              <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 animate-fade-in-up animation-delay-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Facts</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl">
                    <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-sm">24/7 Service</div>
                      <div className="text-xs text-gray-600">24/7 support</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl">
                    <Award className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-sm">15+ Years</div>
                      <div className="text-xs text-gray-600">Experience</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-xl">
                    <Shield className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-sm">Licensed</div>
                      <div className="text-xs text-gray-600">& Insured</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA - Horizontal Layout */}
              <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 animate-fade-in-up animation-delay-400">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Still have questions?</h3>
                <p className="text-gray-600 text-sm mb-4">Our experts are here to help</p>
                
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="/contact"
                    className="group bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-3"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:animate-bounce flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-bold text-sm">Live Chat</div>
                      <div className="text-blue-100 text-xs">Get instant answers</div>
                    </div>
                  </a>
                  
                  <a
                    href="tel:18002665524"
                    className="group bg-green-500 hover:bg-green-600 text-white rounded-xl p-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-3"
                  >
                    <Phone className="w-5 h-5 group-hover:animate-bounce flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-bold text-sm">Call Now</div>
                      <div className="text-green-100 text-xs">24/7 Service</div>
                    </div>
                  </a>
                  
                  <a
                    href="/contact"
                    className="group bg-purple-500 hover:bg-purple-600 text-white rounded-xl p-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-3"
                  >
                    <HelpCircle className="w-5 h-5 group-hover:animate-bounce flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-bold text-sm">Free Consultation</div>
                      <div className="text-purple-100 text-xs">Expert assessment</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side - Scrollable FAQs */}
          <div className="lg:col-span-2 lg:order-2">
            {/* FAQ Accordion - Limited to 5 visible, rest scrollable */}
            <div className="space-y-4 animate-fade-in-up animation-delay-600 h-[600px] overflow-y-auto pr-4 custom-scrollbar-hidden">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300 group"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          openIndex === index 
                            ? 'bg-blue-500 text-white scale-110' 
                            : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                        }`}>
                          <span className="font-bold text-sm">{index + 1}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-blue-600 font-medium mb-1">
                          {faq.category}
                        </div>
                        <span className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                    </div>
                    <div className={`flex-shrink-0 transition-all duration-300 ${
                      openIndex === index ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  
                  <div
                    ref={el => contentRefs.current[index] = el}
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openIndex === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pt-2">
                      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-5 border-l-4 border-blue-500">
                        <p className="text-gray-700 leading-relaxed animate-fade-in-up">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQ