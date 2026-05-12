import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const aboutItems = [
  'Web development',
  'Machine learning',
  'Problem solving',
  'Responsive design',
  'Clean code',
  'Fast learner',
]

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="About Me"
          title="A motivated IT student building polished frontend products."
          description="I’m a B.Tech IT student passionate about web development, machine learning, and solving problems with thoughtful UI." 
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid gap-8 lg:grid-cols-[1.35fr_0.9fr]"
        >
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-10 shadow-2xl shadow-cyan-500/10">
            <p className="text-slate-300 leading-8">
              As a B.Tech IT student, I enjoy turning design ideas into responsive web experiences. I focus on clean interfaces, intuitive interactions, and solving real problems through code and data.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {aboutItems.map((item) => (
                <span
                  key={item}
                  className="rounded-2xl border border-slate-800/90 bg-slate-950/95 px-4 py-3 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] border border-slate-800/90 bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-violet-500/10 p-8 shadow-2xl shadow-cyan-500/10">
              <h3 className="text-xl font-semibold text-white">Growth Mindset</h3>
              <p className="mt-4 text-slate-400">
                I stay curious and keep learning new frontend tools, frameworks, and machine learning libraries. Every project is an opportunity to improve and deliver better results.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/95 p-8 shadow-2xl shadow-cyan-500/10">
              <h3 className="text-xl font-semibold text-white">Problem Solver</h3>
              <p className="mt-4 text-slate-400">
                I enjoy identifying challenges, exploring clean solutions, and building user-friendly interfaces that make interactions feel natural and reliable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
