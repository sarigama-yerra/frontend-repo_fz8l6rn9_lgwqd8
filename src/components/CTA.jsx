import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-10 text-center shadow">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-gray-900 sm:text-3xl"
        >
          Find your signature scent
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mx-auto mt-3 max-w-2xl text-gray-600"
        >
          Join our waitlist to get early access to limited releases and bespoke blending sessions.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Your email"
            className="w-full flex-1 rounded-full border border-gray-300 bg-white/90 px-5 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white shadow transition hover:bg-gray-800"
          >
            Join waitlist
          </button>
        </motion.form>
      </div>
    </section>
  )
}
