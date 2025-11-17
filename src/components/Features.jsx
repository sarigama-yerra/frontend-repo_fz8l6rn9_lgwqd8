import { motion } from 'framer-motion'
import { Sparkles, Droplets, Recycle } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Iridescent Finish',
    desc: 'A luminous sheen that catches light from every angle for a subtle yet striking presence.'
  },
  {
    icon: Droplets,
    title: 'Eau de Parfum',
    desc: 'Long-lasting formulations designed to evolve on the skin across top, heart, and base notes.'
  },
  {
    icon: Recycle,
    title: 'Refillable Glass',
    desc: 'Sustainably crafted glass bottles built to be reused and cherished for years.'
  }
]

export default function Features() {
  return (
    <section id="collections" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">What sets us apart</h2>
          <p className="mt-3 text-gray-600">Crafted with precision, designed with intention.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/90 to-indigo-500/90 text-white shadow-lg">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
