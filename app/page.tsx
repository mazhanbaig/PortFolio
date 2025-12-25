import Hero from '@/components/Hero'
import SkillsSphere from '@/components/SkillsSphere'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/Contact'
import { Code2, Palette, Zap, Globe } from 'lucide-react'
import About from '@/components/About'
import Skills from '@/components/Skills'
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