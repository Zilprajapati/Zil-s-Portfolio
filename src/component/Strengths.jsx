import { motion } from 'framer-motion'

const strengths = [
  {
    title: 'Quick learner',
    description: 'I adapt fast to new tools and techniques, keeping projects aligned with current frontend best practices.',
  },
  {
    title: 'Problem solving',
    description: 'I break down challenges into clear solutions and build reliable, maintainable code around them.',
  },
  {
    title: 'Team player',
    description: 'I enjoy collaborating with designers, developers, and stakeholders to build polished work together.',
  },
  {
    title: 'Adaptability',
    description: 'I can work across frontend and ML-related tasks while maintaining strong attention to detail.',
  },
]

const Strengths = () => {
  return (
    <section id="strengths" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">Strengths</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Core strengths that support my work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
            I bring focus, collaboration, and a growth mindset to every project I take on.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-slate-400 leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Strengths
