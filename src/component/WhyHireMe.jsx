import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const reasons = [
  {
    title: 'Clean UI design approach',
    description: 'I focus on polished interfaces with consistent spacing, typography, and modern visual structure.',
  },
  {
    title: 'Strong React fundamentals',
    description: 'I build reusable components, manage state clearly, and follow best practices for maintainable code.',
  },
  {
    title: 'Problem-solving mindset',
    description: 'I enjoy breaking problems down and delivering solutions that work well for users and teams.',
  },
  {
    title: 'Continuous learning attitude',
    description: 'I keep improving through new tools, projects, and real-world development challenges.',
  },
]

const WhyHireMe = () => {
  return (
    <section id="why-hire" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Why Hire Me"
          title="What makes me a strong fit for frontend roles"
          description="A fresh perspective with modern front-end skills, a growth mindset, and a commitment to building smooth user experiences."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <h3 className="text-2xl font-semibold text-white">{reason.title}</h3>
              <p className="mt-4 text-slate-400 leading-7">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyHireMe
