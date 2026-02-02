import { useState, useEffect } from 'react'
import { Calendar, User, ArrowRight, Clock, Tag, ChevronLeft, ChevronRight } from 'lucide-react'

const BlogSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [cardsToShow, setCardsToShow] = useState(3)

  const blogs = [
    {
      id: 1,
      title: 'Top 10 HVAC Maintenance Tips for Homeowners',
      excerpt: 'Keep your HVAC system running efficiently with these essential maintenance tips that can save you money and extend system life.',
      image: '/3d-rendering-ventilation-system.jpg',
      author: 'John Smith',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Maintenance',
      tags: ['HVAC', 'Maintenance', 'Tips'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Energy-Efficient HVAC Systems: A Complete Guide',
      excerpt: 'Discover how modern energy-efficient HVAC systems can reduce your utility bills by up to 40% while improving home comfort.',
      image: '/close-up-ventilation-system.jpg',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Energy Efficiency',
      tags: ['Energy', 'Efficiency', 'Savings'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Commercial Refrigeration: Best Practices',
      excerpt: 'Learn about the latest commercial refrigeration technologies and best practices for restaurants and food service businesses.',
      image: '/hvac-ductwork.jpg',
      author: 'Mike Wilson',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Commercial',
      tags: ['Refrigeration', 'Commercial', 'Food Service'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Smart HVAC Controls: The Future is Here',
      excerpt: 'Explore how smart thermostats and IoT technology are revolutionizing HVAC systems for better efficiency and control.',
      image: '/3d-rendering-ventilation-system (2).jpg',
      author: 'Emily Davis',
      date: '2024-01-08',
      readTime: '8 min read',
      category: 'Technology',
      tags: ['Smart', 'IoT', 'Controls'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'Indoor Air Quality: Health and Comfort',
      excerpt: 'Understanding the importance of indoor air quality and how proper HVAC maintenance can improve your health and comfort.',
      image: '/3d-rendering-ventilation-system (3).jpg',
      author: 'Dr. Robert Chen',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Health',
      tags: ['Air Quality', 'Health', 'Comfort'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 6,
      title: 'HVAC System Upgrades: When and Why',
      excerpt: 'Learn when it\'s time to upgrade your HVAC system and what benefits you can expect from modern equipment.',
      image: '/3d-rendering-ventilation-system (4).jpg',
      author: 'Tom Anderson',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Upgrades',
      tags: ['Upgrade', 'Modern', 'Benefits'],
      color: 'from-red-500 to-red-600'
    }
  ]

  // Responsive cards to show
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) setCardsToShow(1)
      else if (window.innerWidth < 1024) setCardsToShow(2)
      else setCardsToShow(3)
    }

    updateCardsToShow()
    window.addEventListener('resize', updateCardsToShow)
    return () => window.removeEventListener('resize', updateCardsToShow)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = blogs.length - cardsToShow
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, blogs.length, cardsToShow])

  const nextSlide = () => {
    const maxIndex = blogs.length - cardsToShow
    setCurrentIndex((prev) => prev >= maxIndex ? 0 : prev + 1)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    const maxIndex = blogs.length - cardsToShow
    setCurrentIndex((prev) => prev <= 0 ? maxIndex : prev - 1)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="ourBlogs__slider section-padding bg-gray-50 safe-area-left safe-area-right">
      <div className="container-custom">
        
        {/* Header - Mobile Responsive */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl mb-4 sm:mb-6">
            <Tag className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="responsive-heading font-bold mb-3 sm:mb-4 text-gray-900">
            Latest <span className="text-primary">HVACR Insights</span>
          </h2>
          <p className="responsive-text text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and technologies in HVACR industry
          </p>
        </div>

        {/* Advanced Card Slider - Mobile Responsive */}
        <div className="relative mb-8 sm:mb-12">
          
          {/* Slider Container */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            
            {/* Cards Container */}
            <div 
              className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                width: `${(blogs.length / cardsToShow) * 100}%`
              }}
            >
              {blogs.map((blog, index) => (
                <div 
                  key={blog.id} 
                  className="flex-shrink-0"
                  style={{ width: `${100 / blogs.length}%` }}
                >
                  <article className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 h-full ${
                    index >= currentIndex && index < currentIndex + cardsToShow ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                  }`}>
                    
                    {/* Image Container with Gradient Overlay */}
                    <div className="relative overflow-hidden h-48 sm:h-56">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Dynamic Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${blog.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 bg-gradient-to-r ${blog.color} text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg`}>
                          {blog.category}
                        </span>
                      </div>

                      {/* Read Time Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center space-x-1 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                          <Clock className="w-3 h-3" />
                          <span className="hidden sm:inline">{blog.readTime}</span>
                          <span className="sm:hidden">{blog.readTime.split(' ')[0]}m</span>
                        </div>
                      </div>

                      {/* Floating Action Button */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <button className={`w-12 h-12 bg-gradient-to-r ${blog.color} rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300`}>
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-6">
                      
                      {/* Meta Info */}
                      <div className="flex items-center space-x-3 text-xs sm:text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="truncate">{blog.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="hidden sm:inline">{new Date(blog.date).toLocaleDateString()}</span>
                          <span className="sm:hidden">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                        {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Link */}
                      <button className="group/btn flex items-center space-x-2 text-indigo-600 hover:text-purple-600 font-semibold text-sm transition-all duration-300 focus-visible:focus">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Hover Border Effect */}
                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-opacity-50 rounded-2xl transition-all duration-500 group-hover:border-gradient-to-r ${blog.color}`}></div>
                  </article>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 shadow-lg z-10"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110 shadow-lg z-10"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {Array.from({ length: blogs.length - cardsToShow + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-8 bg-blue-600' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>{isAutoPlaying ? '⏸️' : '▶️'}</span>
              <span>{isAutoPlaying ? 'Pause' : 'Play'} Auto-slide</span>
            </button>
          </div>
        </div>

        {/* View All Blogs Button - Mobile Responsive */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2 group text-sm sm:text-base focus-visible:focus">
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogSlider