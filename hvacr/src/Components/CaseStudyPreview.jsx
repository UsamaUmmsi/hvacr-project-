import { ArrowRight, CheckCircle, Building, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const CaseStudyPreview = () => {
  const featuredCaseStudies = [
    {
      id: 1,
      title: 'Hospital HVAC Modernization',
      client: 'City Medical Center',
      industry: 'Healthcare',
      results: ['40% energy savings', 'Improved air quality', '24/7 monitoring'],
      savings: '$85,000/year',
      image: '/3d-rendering-ventilation-system.jpg',
      color: 'from-blue-500 to-purple-600',
      icon: Building
    },
    {
      id: 2,
      title: 'Restaurant Refrigeration Overhaul',
      client: 'Spice Garden Restaurant',
      industry: 'Food Service',
      results: ['Zero downtime', '30% energy reduction', 'Extended warranty'],
      savings: '$12,000/year',
      image: '/3d-rendering-ventilation-system (1).jpg',
      color: 'from-green-500 to-teal-600',
      icon: Zap
    }
  ]

  return (
    <div className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-blue-50 safe-area-left safe-area-right">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="responsive-heading font-bold mb-4 sm:mb-6 text-gray-900">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="responsive-text text-gray-600 max-w-3xl mx-auto">
            See how we've transformed businesses with innovative HVACR solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {featuredCaseStudies.map((study) => {
            const IconComponent = study.icon
            return (
              <div key={study.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 sm:h-56 lg:h-64">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-100 text-blue-600 text-xs sm:text-sm font-semibold rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-green-600 font-bold text-base sm:text-lg">
                      {study.savings}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-gray-900">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                    {study.client}
                  </p>
                  
                  <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 text-sm sm:text-base"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyPreview