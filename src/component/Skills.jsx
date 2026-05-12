import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const categories = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Machine Learning',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Skills"
          title="Skill categories for modern frontend development"
          description="A strong foundation in frontend tools, backend support, database work, and machine learning workflows."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <div key={category.title} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
              <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              <div className="mt-6 space-y-3">
                {category.items.map((item) => (
                  <span key={item} className="block rounded-full border border-slate-800/80 bg-slate-950/95 px-4 py-2 text-sm text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
