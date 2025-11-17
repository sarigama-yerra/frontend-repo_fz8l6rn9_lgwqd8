import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            The Fragrance of Creativity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg"
          >
            Minimal, modern, and artfully crafted. Discover a collection of glass-bottled perfumes with an iridescent sheen—made to inspire and designed to be remembered.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#collections" className="rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-gray-900/10 transition hover:bg-gray-800">
              Explore Collection
            </a>
            <a href="#story" className="rounded-full bg-white/70 px-5 py-3 text-sm font-medium text-gray-900 backdrop-blur transition hover:bg-white">
              Our Story
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-6" />
      </div>
    </section>
  )
}
