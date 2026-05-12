import React from "react";

const socialLinks = [
  {
    href: "https://github.com/Zilprajapati",
    label: "GitHub",
    icon: "🐙",
  },
  {
    href: "https://www.linkedin.com/in/zil-prajapati-551363188?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    label: "LinkedIn",
    icon: "💼",
  },
  {
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=zilprajapati108@gmail.com",
    label: "Email",
    icon: "✉️",
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950/95 border-t border-slate-800 py-14 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Let's connect</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Ready to build something great together?</h2>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-slate-800/90 bg-slate-900/90 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-500/60 hover:bg-slate-900 hover:text-white"
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800/70 px-5 pt-6 text-center text-sm text-slate-600">
        <p>&copy; {new Date().getFullYear()} Zil Prajapati. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
