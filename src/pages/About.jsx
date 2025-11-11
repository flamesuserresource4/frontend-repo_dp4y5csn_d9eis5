import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <div className="bg-black text-white">
      <Navbar/>
      <section className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="text-4xl font-extrabold">About Amandeep Kaur</motion.h1>
          <p className="mt-4 text-neutral-300 max-w-3xl">
            I’m a UI/UX and Graphic Designer with 4 years of experience crafting intuitive digital products and bold visual identities. I blend research, strategy, and aesthetics to design experiences that are both usable and unforgettable.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Experience Highlights</h2>
              <ul className="space-y-3 text-neutral-300 list-disc list-inside">
                <li>Led design for SaaS dashboards used by 50k+ users</li>
                <li>Shipped 20+ mobile app flows with accessibility compliance</li>
                <li>Built scalable design systems and component libraries</li>
                <li>Branding and visual identity for startups and creators</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Tools</h2>
              <div className="flex flex-wrap gap-2 text-neutral-200">
                {['Figma','Adobe XD','Illustrator','Photoshop','After Effects','Blender','Spline'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
