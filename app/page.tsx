import Hero from '@/components/Hero'
import SkillsSphere from '@/components/SkillsSphere'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/ContactForm'
import { Code2, Palette, Zap, Globe } from 'lucide-react'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

const projects = [
  {
    title: 'Neural Network Visualizer',
    description: 'Interactive 3D visualization of neural networks using WebGL and TensorFlow.js',
    tags: ['Next.js', 'Three.js', 'ML', 'WebGL'],
    link: '#',
    github: '#'
  },
  {
    title: 'Real-time Dashboard',
    description: 'Enterprise analytics dashboard with real-time data streaming and custom visualizations',
    tags: ['React', 'WebSockets', 'D3.js', 'Node.js'],
    link: '#',
    github: '#'
  },
  {
    title: 'AR Shopping Experience',
    description: 'Augmented reality e-commerce platform for virtual try-ons',
    tags: ['AR', 'Three.js', 'Next.js', 'WebXR'],
    link: '#',
    github: '#'
  }
]

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Web Development',
    description: 'High-performance, scalable web applications with modern frameworks'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'User-centered designs focusing on accessibility and engagement'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Performance Optimization',
    description: 'Speed optimization and SEO strategies for better rankings'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Full-Stack Solutions',
    description: 'End-to-end development from database to frontend'
  }
]

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects/>
    </>
  )
}