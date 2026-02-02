import Hero from './Hero'
import HomeServices from '../Components/HomeServices'
import FAQ from '../Components/FAQ'
import Testimonials from '../Components/Testimonials'
import CaseStudyPreview from '../Components/CaseStudyPreview'
import HomeContact from '../Components/HomeContact'
import BlogSlider from '../Components/BlogSlider'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeServices />
      <CaseStudyPreview />
      <Testimonials />
      <BlogSlider />
      <FAQ />
      <HomeContact />
    </>
  )
}

export default Home