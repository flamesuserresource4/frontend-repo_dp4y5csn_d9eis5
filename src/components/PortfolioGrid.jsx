import { motion } from 'framer-motion'

const projects = [
  { title: 'Neon Fitness App', tag: 'Mobile UI', img: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Crypto Dashboard', tag: 'Web App', img: 'https://images.unsplash.com/photo-1551281044-8b29e3b0c3a7?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Gaming Landing', tag: 'Marketing', img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop' },
  { title: 'AR Fashion', tag: 'Concept', img: 'https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Brand Identity', tag: 'Branding', img: 'https://images.unsplash.com/photo-1580894894513-541e068a2a62?q=80&w=1200&auto=format&fit=crop' },
  { title: '3D Shop', tag: 'E‑commerce', img: 'https://images.unsplash.com/photo-1605901309945-8e1f0a65f45d?q=80&w=1200&auto=format&fit=crop' },
]

export default function PortfolioGrid() {
  return (
    <section className="relative py-16 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected Work</h2>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-md bg-neon text-black font-semibold">Start a project</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group border border-neutral-800 rounded-3xl overflow-hidden bg-neutral-950/60 hover:bg-neutral-900/60">
              <div className="relative">
                <img src={p.img} alt={p.title} className="h-56 w-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    <p className="text-neutral-400 text-sm">{p.tag}</p>
                  </div>
                  <span className="px-2 py-1 rounded bg-neon text-black text-xs font-semibold">View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
