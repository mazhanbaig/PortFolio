import Hero from '@/components/Hero'
import SkillsSphere from '@/components/SkillsSphere'
import ProjectCard from '@/components/ProjectCard'
import ContactForm from '@/components/ContactForm'
import { Code2, Palette, Zap, Globe } from 'lucide-react'
import About from '@/components/About'

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

      {/* Services Section
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">What I Do</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Combining technical expertise with creative vision to build digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-dark-card to-dark-surface border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:scale-105"
              >
                <div className="text-primary-400 mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section className="py-24 px-6 bg-gradient-to-b from-transparent to-dark-surface/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Continuously evolving with the latest tools and technologies
            </p>
          </div>
          <SkillsSphere />
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Selected work showcasing innovation and technical excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">Let&apos;s Connect</h2>
              <p className="text-xl text-gray-400 mb-8">
                Interested in collaborating or just want to chat about technology?
                I&apos;m always open to discussing new projects and opportunities.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                  <p className="text-primary-400">hello@example.com</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
                  <p className="text-gray-400">Global • Remote</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Availability</h4>
                  <p className="text-gray-400">Currently accepting select projects</p>
                </div>
              </div>
            </div> */}

            {/* <ContactForm />
          </div>
        </div>
      </section> */}
    </>
  )
}