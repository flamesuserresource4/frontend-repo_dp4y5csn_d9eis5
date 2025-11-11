import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black pt-28">
      {/* Aura background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.25),rgba(57,255,20,0.08)_40%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(57,255,20,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-neon" aria-hidden />
          Available for freelance • 4+ years experience
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
        >
          Amandeep Kaur
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl text-lg text-neutral-300 sm:text-xl"
        >
          UI/UX and Graphic Designer crafting immersive, human‑centered experiences with neon energy and playful 3D.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
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

        {/* 3D Bitmoji-like face below the text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="relative mt-12 w-full max-w-3xl"
          aria-label="Interactive 3D avatar"
        >
          {/* Glow ring */}
          <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(57,255,20,0.4),transparent_40%,rgba(57,255,20,0.25),transparent_70%,rgba(57,255,20,0.15))] blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-black/40 shadow-[0_0_0_1px_rgba(57,255,20,0.1)]">
            {/* Masked circular aura behind the canvas */}
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.3),transparent_60%)] blur-2xl" />

            {/* Spline canvas */}
            <div className="aspect-[16/9] w-full">
              <Spline
                scene="https://prod.spline.design/69O6iQ4LWiq4XVD9/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
          <p className="mt-3 text-sm text-neutral-400">Tap, drag, and scroll to explore the 3D avatar.</p>
        </motion.div>

        {/* Subtle bottom fade */}
        <div aria-hidden className="pointer-events-none mt-14 h-24 w-full bg-gradient-to-b from-transparent to-black" />
      </div>
    </section>
  )
}
