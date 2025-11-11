import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import PortfolioGrid from '../components/PortfolioGrid'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="bg-black text-white">
      <Navbar/>
      <Hero/>
      <Skills/>
      <PortfolioGrid/>
      <Contact/>
      <Footer/>
    </div>
  )
}
