import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-black pt-28">
      {/* Global aura background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/2 h-[90vmin] w-[90vmin] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.2),rgba(57,255,20,0.06)_50%,transparent_75%)] blur-3xl" />
        <div className="absolute right-[-20%] top-[-10%] h-[60vmin] w-[60vmin] rounded-full bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center lg:justify-start"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-neon" aria-hidden />
            Available for freelance • 4+ years experience
          </span>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text column */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
            >
              Amandeep Kaur
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 max-w-2xl text-lg text-neutral-300 sm:text-xl lg:max-w-none"
            >
              UI/UX and Graphic Designer crafting immersive, human‑centered experiences with neon energy and playful 3D.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center rounded-full bg-neon px-5 py-3 font-semibold text-black transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-neon"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-800 bg-neutral-900/70 px-5 py-3 font-semibold text-white backdrop-blur transition-colors hover:border-neon/60 focus:outline-none focus:ring-2 focus:ring-neon"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* 3D column - fully visible, no frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="relative mx-auto w-full max-w-[880px] aspect-square overflow-visible"
            aria-label="Interactive 3D avatar"
          >
            {/* Spline canvas fills container with no overlays or frames */}
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/69O6iQ4LWiq4XVD9/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Subtle bottom fade */}
        <div aria-hidden className="pointer-events-none mt-16 h-24 w-full bg-gradient-to-b from-transparent to-black" />
      </div>
    </section>
  )
}
