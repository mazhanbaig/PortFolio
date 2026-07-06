// app/page.tsx
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import AuroraMesh from '@/components/AuroraMesh'
import AnimatedGlassyLayer from '@/components/AnimatedGlassyLayer'

export default function Home() {
  return (
    <main className="relative bg-[#070708] text-white min-h-screen overflow-hidden">
      {/* Background aurora - lowest z-index */}
      <AuroraMesh />

      {/* Animated glassy layer - on top of aurora */}
      <AnimatedGlassyLayer />

      {/* Noise overlay - subtle, low z-index */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none -z-[5]" />

      {/* Main content - on top of all background effects */}
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