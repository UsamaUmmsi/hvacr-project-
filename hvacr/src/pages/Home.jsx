import Hero from './Hero'
import HomeServices from '../Components/HomeServices'
import FAQ from '../Components/FAQ'
import Testimonials from '../Components/Testimonials'
import CaseStudyPreview from '../Components/CaseStudyPreview'
import HomeContact from '../Components/HomeContact'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeServices />
      <CaseStudyPreview />
      <Testimonials />
      <FAQ />
      <HomeContact />
    </>
  )
}

export default Home