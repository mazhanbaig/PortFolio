import Hero from '@/components/Hero'
import { Code2, Palette, Zap, Globe } from 'lucide-react'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects/>
      <Contact/>
    </>
  )
}