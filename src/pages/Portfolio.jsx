import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PortfolioGrid from '../components/PortfolioGrid'

export default function Portfolio(){
  return (
    <div className="bg-black text-white">
      <Navbar/>
      <div className="pt-24">
        <PortfolioGrid/>
      </div>
      <Footer/>
    </div>
  )
}
