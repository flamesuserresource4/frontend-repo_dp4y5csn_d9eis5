import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s build something bold</h2>
            <p className="mt-2 text-neutral-400 max-w-lg">Tell me about your idea, timeline, and goals. I’ll reply within 24 hours.</p>

            <div className="mt-6 space-y-3 text-neutral-300">
              <p><span className="text-neutral-500">Email:</span> amandeep.design@example.com</p>
              <p><span className="text-neutral-500">Location:</span> Remote • GMT+5:30</p>
              <p><span className="text-neutral-500">Social:</span> Dribbble · Behance · LinkedIn</p>
            </div>
          </div>

          <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neon" placeholder="Name"/>
              <input className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neon" placeholder="Email"/>
            </div>
            <input className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neon" placeholder="Subject"/>
            <textarea rows={5} className="w-full rounded-xl bg-neutral-950 border border-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neon" placeholder="Project details"/>
            <button type="button" className="px-5 py-3 rounded-xl bg-neon text-black font-semibold">Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
