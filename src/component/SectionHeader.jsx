import React from 'react'

const SectionHeader = ({ eyebrow, title, description }) => (
  <div className="mx-auto max-w-3xl text-center">
    <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>
    <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{title}</h2>
    <p className="mt-4 text-base leading-8 text-slate-400">{description}</p>
  </div>
)

export default SectionHeader
