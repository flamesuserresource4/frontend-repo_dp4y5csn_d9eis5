import { motion } from 'framer-motion'
import { PenTool, Palette, Figma, Sparkles, Code2, Layout, Smartphone, PenSquare } from 'lucide-react'

const skills = [
  { icon: <PenTool size={18}/>, label: 'UI/UX Design' },
  { icon: <Palette size={18}/>, label: 'Visual Design' },
  { icon: <Layout size={18}/>, label: 'Wireframing' },
  { icon: <Smartphone size={18}/>, label: 'Mobile UI' },
  { icon: <PenSquare size={18}/>, label: 'Branding' },
  { icon: <Sparkles size={18}/>, label: 'Motion/3D Awareness' },
  { icon: <Code2 size={18}/>, label: 'Design Systems' },
]

export default function Skills() {
  return (
    <section className="relative pt-8 pb-16 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Core Skills</h2>
        <p className="text-neutral-400 mt-2">Product thinking, aesthetics, accessibility, and delight.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group border border-neutral-800 rounded-2xl p-4 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors">
              <div className="flex items-center gap-3 text-neutral-200">
                <div className="text-neon">{s.icon}</div>
                <span className="font-medium">{s.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
