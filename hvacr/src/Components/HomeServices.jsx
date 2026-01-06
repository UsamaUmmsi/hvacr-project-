import { CheckCircle, Clock, Shield, Award, Zap, Wrench, Thermometer, Sparkles, ChevronDown, Users } from 'lucide-react'
import { useState } from 'react'

const HomeServices = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(0)

  return (
    <div className="bg-gray-50 py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our HVACR <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional solutions with modern technology and expert craftsmanship
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { name: 'AC Installation', desc: 'Professional installation', price: '$3,500+', icon: Zap, color: 'blue' },
            { name: 'AC Repair', desc: 'Fast repair service', price: '$99+', icon: Wrench, color: 'green' },
            { name: 'Heating Systems', desc: 'Complete heating solutions', price: '$2,500+', icon: Thermometer, color: 'orange' },
            { name: 'Maintenance', desc: 'Regular tune-ups', price: '$129+', icon: CheckCircle, color: 'purple' },
          ].map((service, index) => {
            const ServiceIcon = service.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 bg-${service.color}-500 rounded-lg flex items-center justify-center mb-4`}>
                  <ServiceIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
                <p className="text-blue-600 font-bold">{service.price}</p>
              </div>
            )
          })}
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose <span className="text-primary">CoolAir HVACR</span>
            </h2>
            <p className="text-lg text-gray-600">Industry-leading expertise with modern solutions</p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { icon: Shield, title: "Licensed & Insured", items: ["Fully licensed", "Complete coverage", "Protection guaranteed"] },
              { icon: Clock, title: "24/7 Service", items: ["Always available", "Emergency ready", "Quick response"] },
              { icon: Award, title: "Certified Techs", items: ["NATE certified", "Ongoing training", "Expert service"] },
              { icon: Users, title: "100% Satisfaction", items: ["Guaranteed work", "Quality service", "Customer first"] }
            ].map((item, index) => {
              const IconComponent = item.icon
              const isExpanded = expandedAccordion === index
              
              return (
                <div key={index} className="mb-3 bg-white rounded-xl shadow-md overflow-hidden">
                  <button
                    onClick={() => setExpandedAccordion(isExpanded ? -1 : index)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">Click to learn more</p>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="p-4 pt-0">
                      <div className="grid md:grid-cols-3 gap-3">
                        {item.items.map((listItem, idx) => (
                          <div key={idx} className="flex items-center space-x-2 p-3 rounded-lg bg-gray-50">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-700">{listItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>


      </div>
    </div>
  )
}

export default HomeServices