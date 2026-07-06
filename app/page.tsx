// app/page.tsx
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import AuroraMesh from '@/components/AuroraMesh'
import DotGrid from '@/components/DotGrid'
import Particle from '@/components/Particle'

export default function Home() {
  return (
    <main className="relative bg-[#070708] text-white min-h-screen">
      {/* Background layers */}
      <AuroraMesh />
      <DotGrid />
      <Particle />

      {/* Main sections */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}