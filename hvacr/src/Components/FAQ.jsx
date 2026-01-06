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
    <section className="section-padding relative overflow-hidden text-white">
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

      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-500 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-green-400 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="container-custom relative z-10">
        
        {/* Header - Centered */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full mb-6 animate-bounce-slow border border-white/30">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Frequently Asked</span> <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Get answers to common questions about our professional HVACR services
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* FAQ Grid - 2 Columns */}
          <div className="grid lg:grid-cols-2 gap-8 animate-fade-in-up animation-delay-600">
            {/* Left Column - First 5 FAQs */}
            <div className="space-y-4">
              {faqs.slice(0, 5).map((faq, index) => (
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

            {/* Right Column - Last 5 FAQs */}
            <div className="space-y-4">
              {faqs.slice(5, 10).map((faq, index) => {
                const actualIndex = index + 5;
                return (
                  <div
                    key={actualIndex}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100 overflow-hidden animate-fade-in-up"
                    style={{ animationDelay: `${0.1 * actualIndex}s` }}
                  >
                    <button
                      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300 group"
                      onClick={() => toggleFAQ(actualIndex)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                            openIndex === actualIndex 
                              ? 'bg-blue-500 text-white scale-110' 
                              : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                          }`}>
                            <span className="font-bold text-sm">{actualIndex + 1}</span>
                          </div>
                        </div>
                        <div>
                          <span className="font-bold text-gray-800 text-lg group-hover:text-blue-600 transition-colors duration-300">
                            {faq.question}
                          </span>
                        </div>
                      </div>
                      <div className={`flex-shrink-0 transition-all duration-300 ${
                        openIndex === actualIndex ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                      }`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>
                    
                    <div
                      ref={el => contentRefs.current[actualIndex] = el}
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        openIndex === actualIndex 
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ