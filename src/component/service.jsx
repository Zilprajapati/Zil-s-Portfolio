import { motion } from 'framer-motion'

const services = [
  {
    title: 'UI/UX Design',
    description: 'Design modern, responsive, and clean user interfaces using Tailwind CSS and React.',
    icon: '🎨',
  },
  {
    title: 'Frontend Development',
    description: 'Build reusable and scalable React components with clean code practices.',
    icon: '⚛️',
  },
  {
    title: 'Code Optimization',
    description: 'Improve existing code performance, fix bugs, and enhance UI/UX.',
    icon: '⚡',
  },
]

const Service = () => {
  return (
    <section id="service" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">Services</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">What I deliver for your next project</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Professional frontend services built for great user experience, reliable code, and modern product design.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-500/20"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 text-3xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-slate-400 leading-7">{service.description}</p>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20 hover:text-white"
              >
                Start a Project
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service
