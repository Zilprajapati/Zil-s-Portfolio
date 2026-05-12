import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const contactDetails = [
  {
    label: 'Email',
    value: 'zilprajapati108@gmail.com',
    href: 'mailto:zilprajapati108@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    label: 'GitHub',
    value: 'github.com/Zilprajapati',
    href: 'https://github.com/Zilprajapati',
  },
]

const Contact = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=zilprajapati108@gmail.com&su=${subject}&body=${body}`, '_blank')
    setStatus('Message ready to send via Gmail.')
  }

  return (
    <section id="contact" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s start your next project"
          description="Email, phone, or GitHub — I’m available for frontend projects and machine learning collaborations."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-10 shadow-2xl shadow-cyan-500/10"
          >
            <div className="grid gap-6">
              <label className="block">
                <span className="text-sm font-medium text-slate-300">Name</span>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-500/80 focus:ring-2 focus:ring-cyan-500/10"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-300">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-500/80 focus:ring-2 focus:ring-cyan-500/10"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-300">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-500/80 focus:ring-2 focus:ring-cyan-500/10"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Send Message
              </button>
            </div>
            {status && <p className="mt-6 text-sm text-cyan-300">{status}</p>}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="space-y-8 rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-10 shadow-2xl shadow-cyan-500/10"
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">Connect</p>
              <h3 className="mt-4 text-3xl font-semibold text-white">Get in touch</h3>
              <p className="mt-4 text-slate-400">Reach out by email, phone, or GitHub to discuss frontend roles, internships, or project opportunities.</p>
            </div>

            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-3xl border border-slate-800/80 bg-slate-950/90 px-5 py-4 text-sm font-medium text-slate-100 transition hover:border-cyan-500 hover:bg-slate-900 hover:text-cyan-200"
                >
                  <span>{detail.label}</span>
                  <span className="text-slate-400">{detail.value}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
