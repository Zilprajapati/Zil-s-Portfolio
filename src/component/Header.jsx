import React, { useEffect, useState } from "react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#service" },
  { label: "Why Hire Me", href: "#why-hire" },
  { label: "Contact", href: "#contact" },
]

const Header = () => {
  const [active, setActive] = useState("home")

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href))
    const handleScroll = () => {
      const offset = window.scrollY + 140
      let current = "home"
      sections.forEach((section) => {
        if (section && section.offsetTop <= offset) {
          current = section.id
        }
      })
      setActive(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl shadow-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-4">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 p-2 shadow-lg shadow-cyan-500/20">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="Zil Logo"
              className="h-11 w-11 rounded-full bg-slate-950 p-1"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Zil Prajapati</p>
            <p className="text-base font-medium text-white">Frontend Developer | ML Enthusiast</p>
          </div>
        </div>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`transition ${active === item.href.slice(1) ? 'text-white' : 'hover:text-white opacity-80'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20 hover:text-white md:inline-flex"
        >
          Download Resume
        </a>
      </div>
    </header>
  )
}

export default Header
