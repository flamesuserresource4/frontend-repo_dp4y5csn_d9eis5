import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-20 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Amandeep Kaur
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-xl"
            >
              UI/UX and Graphic Designer crafting immersive, human-centered experiences with a love for neon aesthetics and interactive 3D.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200">4+ years experience</span>
              <span className="px-3 py-1 rounded-full bg-neon text-black font-semibold">Available for freelance</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:justify-self-end"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-1 bg-neon/30 blur-2xl rounded-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop" 
                alt="Amandeep Kaur designer avatar"
                className="relative rounded-3xl border border-neutral-800 w-full object-cover"
              />
            </div>
            <p className="mt-4 text-neutral-400 text-sm text-center">A stylized representation of Amandeep Kaur</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
