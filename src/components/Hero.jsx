import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  useEffect(() => {
    const existing = document.querySelector('script[data-spline-viewer]')
    if (!existing) {
      const script = document.createElement('script')
      script.type = 'module'
      script.src = 'https://unpkg.com/@splinetool/viewer@1.10.99/build/spline-viewer.js'
      script.setAttribute('data-spline-viewer', 'true')
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-black pt-28">
      {/* Aura background behind the 3D element */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[56%] h-[95vmin] w-[95vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.22),rgba(57,255,20,0.08)_55%,transparent_80%)] blur-3xl" />
        <div className="absolute right-[-15%] top-[-10%] h-[60vmin] w-[60vmin] rounded-full bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.16),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Centered heading and CTAs above the 3D */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl"
          >
            Amandeep Kaur
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300 sm:text-xl"
          >
            UI/UX and Graphic Designer crafting immersive, human‑centered experiences with neon energy and playful 3D.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
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

        {/* Centered 3D element with no frame, full view */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="relative mx-auto mt-[30px] w-full max-w-5xl" // reduced by ~10px from 40px
          aria-label="Interactive 3D scene"
        >
          {/* Local aura directly behind the 3D element */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.35)_0%,rgba(57,255,20,0.18)_40%,rgba(0,0,0,0)_75%)]" />
          </div>

          <div className="mx-auto aspect-[16/10] w-full overflow-visible">
            {/* Using the Spline web component directly */}
            <spline-viewer
              url="https://prod.spline.design/zbfihsUSio91-2EK/scene.splinecode"
              style={{ width: '100%', height: '100%', display: 'block' }}
            />
          </div>
        </motion.div>

        {/* Subtle bottom fade */}
        <div aria-hidden className="pointer-events-none mt-16 h-24 w-full bg-gradient-to-b from-transparent to-black" />
      </div>
    </section>
  )
}
