import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'Smart Health Insurance Policy System',
    description: 'ML-based system to predict insurance claim probability and assist decision making with data-driven insights.',
    tech: ['Python', 'Machine Learning', 'Streamlit', 'Pandas', 'NumPy'],
    github: 'https://github.com/Zilprajapati',
    demo: 'https://smarthealthpolicy.streamlit.app/',
  },
  {
    title: 'Grocery Store Management System',
    description: 'Full-stack application for inventory management, billing, and sales tracking in a retail environment.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    
  },
  {
    title: 'Weather Forecast Website',
    description: 'Real-time weather application using OpenWeather API to display current conditions and forecast data.',
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
    github: 'https://github.com/Zilprajapati',
    demo: 'https://github.com/Zilprajapati',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Projects"
          title="Professional projects built for practical results"
          description="Three portfolio projects that highlight my ability to build modern interfaces, backend flows, and data-driven applications."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-500/20"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 text-3xl">
                {project.title.charAt(0)}
              </div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-slate-400 leading-7">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="rounded-full border border-slate-800/80 bg-slate-950/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {item}
                  </span>
                ))}
              </div>
              {(project.github || project.demo) && (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-slate-800/80 bg-slate-950/90 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-500 hover:text-cyan-200"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
