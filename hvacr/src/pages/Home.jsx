import Hero from './Hero'
import Services from './Services'
import FAQ from '../Components/FAQ'
import Testimonials from '../Components/Testimonials'
import CaseStudy from './CaseStudies'
import Contact from './Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudy />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

export default Home