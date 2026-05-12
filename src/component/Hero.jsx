import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="pointer-events-none absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-28 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">Hello, I’m Zil Prajapati</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Frontend Developer | ML Enthusiast | IT Student
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
            Building clean, responsive web experiences with React and Tailwind CSS.
            <br />
            Passionate about combining frontend design with machine learning solutions.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-500 hover:text-cyan-200"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-16 grid w-full gap-4 sm:grid-cols-3"
        >
          {[
            { value: 'B.Tech IT', label: 'In Progress' },
            { value: 'Frontend', label: 'Web Development' },
            { value: 'ML', label: 'Machine Learning' },
          ].map((item) => (
            <div key={item.label} className="rounded-[1.75rem] border border-slate-800/80 bg-slate-900/95 px-6 py-8 text-left shadow-2xl shadow-cyan-500/10">
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-3 text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
