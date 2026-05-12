import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const education = [
  {
    title: 'B.Tech in Information Technology',
    institution: 'MBIT College',
    period: 'Ongoing',
    details: 'Pursuing a strong foundation in software development, algorithms, and system design.',
  },
  {
    title: 'Diploma in Computer Engineering',
    institution: 'K.D. Polytechnic',
    period: 'Completed',
    details: 'Built practical skills in programming, networking, and application development.',
  },
]

const Education = () => {
  return (
    <section id="education" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Education"
          title="Academic background supporting my technical growth"
          description="A strong IT foundation with current B.Tech studies and a practical diploma in computer engineering."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {education.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.institution}</p>
                </div>
                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200">{item.period}</span>
              </div>
              <p className="mt-6 text-slate-400 leading-7">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
