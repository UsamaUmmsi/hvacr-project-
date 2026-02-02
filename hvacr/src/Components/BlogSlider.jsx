import { useRef } from 'react'
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'

const BlogSlider = () => {
  const swiperRef = useRef(null)

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
      tags: ['HVAC', 'Maintenance', 'Tips']
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
      tags: ['Energy', 'Efficiency', 'Savings']
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
      tags: ['Refrigeration', 'Commercial', 'Food Service']
    },
    {
      id: 4,
      title: 'Indoor Air Quality: Why It Matters',
      excerpt: 'Understanding the importance of indoor air quality and how proper HVAC systems can improve your family\'s health and comfort.',
      image: '/3d-rendering-ventilation-system (2).jpg',
      author: 'Dr. Emily Chen',
      date: '2024-01-08',
      readTime: '4 min read',
      category: 'Health',
      tags: ['Air Quality', 'Health', 'Indoor Environment']
    },
    {
      id: 5,
      title: 'Smart HVAC Controls: The Future is Here',
      excerpt: 'Explore the latest smart HVAC technologies that allow you to control your home\'s climate from anywhere in the world.',
      image: '/3d-rendering-ventilation-system (3).jpg',
      author: 'Tech Team',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Technology',
      tags: ['Smart Home', 'Technology', 'Automation']
    },
    {
      id: 6,
      title: 'Seasonal HVAC Preparation Checklist',
      excerpt: 'Get your HVAC system ready for each season with our comprehensive preparation checklist and professional tips.',
      image: '/3d-rendering-ventilation-system (4).jpg',
      author: 'Maintenance Team',
      date: '2024-01-03',
      readTime: '5 min read',
      category: 'Seasonal',
      tags: ['Seasonal', 'Preparation', 'Checklist']
    }
  ]

  return (
    <section className="ourBlogs__slider section-padding bg-gray-50">
      <div className="container-custom">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6">
            <Tag className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Latest <span className="text-primary">HVACR Insights</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and technologies in HVACR industry
          </p>
        </div>

        {/* Blog Slider */}
        <div className="relative">
          <div className="swiper">
            <Swiper
              ref={swiperRef}
              modules={[Autoplay, FreeMode]}
              slidesPerView="auto"
              freeMode={true}
              loop={true}
              grabCursor={true}
              speed={10000}
              spaceBetween={30}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
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
                  slidesPerView: 4,
                  spaceBetween: 40,
                }
              }}
              className="blogs-swiper"
              onSwiper={(swiper) => {
                // Initialize after 2 seconds like in your original code
                setTimeout(() => {
                  swiper.init();
                }, 2000);
              }}
            >
              {/* Duplicate blogs for seamless loop */}
              {[...blogs, ...blogs].map((blog, index) => (
                <SwiperSlide key={`${blog.id}-${index}`} className="!w-80">
                  <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                    
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                          {blog.category}
                        </span>
                      </div>

                      {/* Read Time Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center space-x-1 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                          <Clock className="w-3 h-3" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      
                      {/* Meta Info */}
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(blog.date).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {blog.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-blue-100 hover:text-blue-600 transition-colors duration-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More Button */}
                      <button className="group/btn flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-500"></div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Pause on Hover Indicator */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              <span className="inline-flex items-center space-x-1">
                <span>Hover to pause</span>
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              </span>
            </p>
          </div>
        </div>

        {/* View All Blogs Button */}
        <div className="text-center mt-12">
          <button className="btn btn-primary inline-flex items-center space-x-2 group">
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogSlider