import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/about'
import Skills from './component/Skills'
import Education from './component/Education'
import Projects from './component/project'
import Service from './component/service'
import WhyHireMe from './component/WhyHireMe'
import Strengths from './component/Strengths'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Service />
        <WhyHireMe />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
