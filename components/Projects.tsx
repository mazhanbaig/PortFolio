'use client'

import { ExternalLink, Github, Folder, Code, Eye, Star, GitFork, Calendar, ArrowUpRight, Play, Smartphone, Globe, Layers } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ProjectsSection() {
    const [animate, setAnimate] = useState(false)
    const [activeFilter, setActiveFilter] = useState('all')

    useEffect(() => {
        setAnimate(true)
    }, [])

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Apps' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'frontend', label: 'Frontend' }
    ]

    const projects = [
        {
            id: 1,
            title: "ZState",
            description: "A full-featured e-commerce platform with cart, checkout, and payment integration.",
            longDescription: "Built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and Stripe payment integration.",
            category: "fullstack",
            tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
            image: "/project1.jpg",
            liveLink: "https://demo.com",
            githubLink: "https://github.com",
            featured: true,
            stars: 42,
            forks: 18
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A productivity app with drag-and-drop task management and real-time updates.",
            longDescription: "Kanban-style task management with drag-and-drop functionality, real-time updates using WebSockets, and team collaboration features.",
            category: "web",
            tech: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Prisma"],
            image: "/project2.jpg",
            liveLink: "https://demo.com",
            githubLink: "https://github.com",
            featured: true,
            stars: 28,
            forks: 12
        },
        {
            id: 3,
            title: "Fitness Tracker Mobile",
            description: "A React Native fitness app with workout tracking and progress analytics.",
            longDescription: "Mobile app for tracking workouts, calories, and progress with beautiful charts and personalized workout plans.",
            category: "mobile",
            tech: ["React Native", "Expo", "Firebase", "Recharts"],
            image: "/project3.jpg",
            liveLink: "https://demo.com",
            githubLink: "https://github.com",
            featured: false,
            stars: 15,
            forks: 8
        },
        {
            id: 4,
            title: "Portfolio Website",
            description: "Modern portfolio website with animations and responsive design.",
            longDescription: "A showcase portfolio built with Next.js 14, Framer Motion animations, and optimized performance.",
            category: "frontend",
            tech: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
            image: "/project4.jpg",
            liveLink: "https://demo.com",
            githubLink: "https://github.com",
            featured: false,
            stars: 36,
            forks: 15
        },
        {
            id: 5,
            title: "Weather Dashboard",
            description: "Real-time weather application with location-based forecasts.",
            longDescription: "Weather dashboard with geolocation, 7-day forecasts, and interactive weather maps using OpenWeather API.",
            category: "web",
            tech: ["React", "Weather API", "Chart.js", "Geolocation"],
            image: "/project5.jpg",
            liveLink: "https://demo.com",
            githubLink: "https://github.com",
            featured: false,
            stars: 22,
            forks: 10
        },
        {
            id: 6,
            title: "Social Media Dashboard",
            description: "Analytics dashboard for social media metrics and insights.",
            longDescription: "Admin dashboard for tracking social media metrics with real-time updates, data visualization, and export functionality.",
            category: "fullstack",
            tech: ["React", "Express", "MySQL", "Chart.js", "JWT"],
            image: "/project6.jpg",
            liveLink: "https://demo.com",
            githubLink: "https://github.com",
            featured: true,
            stars: 31,
            forks: 14
        }
    ]

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter)

    return (
        <section
            id="projects"
            className="relative w-full min-h-screen py-16 md:py-24 bg-[#10120F] overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#C2CABB]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#C2CABB]/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(194,202,187,0.02)_1px,transparent_0)] bg-[size:40px_40px] opacity-5"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-12 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#C2CABB]/5 border border-[#C2CABB]/10 rounded-full">
                        <Folder className="w-4 h-4 text-[#C2CABB]" />
                        <span className="text-sm font-semibold text-[#C2CABB] tracking-wider">MY WORK</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#C2CABB] mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-[#C2CABB]/80 max-w-2xl mx-auto leading-relaxed">
                        Here are some of my recent projects that showcase my skills in web and mobile development.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-100 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.id
                                    ? 'bg-[#C2CABB] text-[#10120F] shadow-lg'
                                    : 'bg-[#C2CABB]/5 text-[#C2CABB]/80 hover:bg-[#C2CABB]/10 hover:text-[#C2CABB]'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`transition-all duration-700 delay-${(index % 3 + 1) * 100} ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <div className="group relative h-full bg-gradient-to-br from-[#C2CABB]/5 to-transparent rounded-2xl border border-[#C2CABB]/10 hover:border-[#C2CABB]/30 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#C2CABB]/5">
                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 left-4 z-20">
                                        <div className="flex items-center gap-1 bg-gradient-to-r from-[#C2CABB] to-[#C2CABB]/80 text-[#10120F] px-3 py-1 rounded-full text-xs font-semibold">
                                            <Star className="w-3 h-3" />
                                            Featured
                                        </div>
                                    </div>
                                )}

                                {/* Category Badge */}
                                <div className="absolute top-4 right-4 z-20">
                                    <div className="flex items-center gap-1 bg-[#10120F]/80 backdrop-blur-sm border border-[#C2CABB]/10 px-3 py-1 rounded-full text-xs text-[#C2CABB]">
                                        {project.category === 'mobile' ? <Smartphone className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
                                        {project.category}
                                    </div>
                                </div>

                                {/* Project Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#C2CABB]/10 to-transparent z-10"></div>
                                    <div className="relative w-full h-full bg-gradient-to-br from-[#C2CABB]/20 to-[#C2CABB]/5 flex items-center justify-center">
                                        {/* Placeholder for image */}
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C2CABB]/10 to-transparent flex items-center justify-center">
                                            <Layers className="w-8 h-8 text-[#C2CABB]/40" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#10120F] via-transparent to-transparent opacity-60"></div>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#10120F]/90 via-[#10120F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                        <div className="flex gap-4">
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-gradient-to-r from-[#C2CABB] to-[#C2CABB]/80 text-[#10120F] rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
                                                aria-label="View live demo"
                                            >
                                                <Eye className="w-5 h-5" />
                                            </a>
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-[#10120F] border border-[#C2CABB]/20 text-[#C2CABB] rounded-full hover:scale-110 transition-all duration-300"
                                                aria-label="View source code"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-[#C2CABB] group-hover:text-[#C2CABB]/90 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight className="w-5 h-5 text-[#C2CABB]/40 group-hover:text-[#C2CABB]/70 transition-colors duration-300" />
                                    </div>

                                    <p className="text-[#C2CABB]/70 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-gradient-to-br from-[#C2CABB]/10 to-transparent border border-[#C2CABB]/10 rounded text-xs text-[#C2CABB]/60 hover:text-[#C2CABB] hover:border-[#C2CABB]/30 transition-all duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Stats and Links */}
                                    <div className="flex items-center justify-between pt-4 border-t border-[#C2CABB]/10">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1 text-xs text-[#C2CABB]/60">
                                                <Star className="w-3 h-3" />
                                                <span>{project.stars}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-xs text-[#C2CABB]/60">
                                                <GitFork className="w-3 h-3" />
                                                <span>{project.forks}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-[#C2CABB]/60 hover:text-[#C2CABB] transition-colors duration-300 flex items-center gap-1"
                                            >
                                                <Code className="w-3 h-3" />
                                                Code
                                            </a>
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-xs text-[#C2CABB]/60 hover:text-[#C2CABB] transition-colors duration-300 flex items-center gap-1"
                                            >
                                                <ExternalLink className="w-3 h-3" />
                                                Live
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub Stats */}
                <div className={`transition-all duration-700 delay-400 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="bg-gradient-to-br from-[#C2CABB]/5 to-transparent p-8 rounded-2xl border border-[#C2CABB]/10">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-[#C2CABB] mb-4">GitHub Activity</h3>
                                <p className="text-[#C2CABB]/70">
                                    Check out my GitHub profile for more projects and contributions.
                                </p>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-[#C2CABB] text-[#10120F] font-semibold rounded-lg hover:bg-[#C2CABB]/90 transition-all duration-300"
                                >
                                    <Github className="w-5 h-5" />
                                    Visit GitHub Profile
                                </a>
                            </div>

                            <div className="md:col-span-2">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { label: "Total Projects", value: "15+", icon: Folder },
                                        { label: "GitHub Stars", value: "150+", icon: Star },
                                        { label: "Commits", value: "500+", icon: GitFork },
                                        { label: "Contributions", value: "40+", icon: Calendar }
                                    ].map((stat, idx) => (
                                        <div key={idx} className="text-center p-4 bg-gradient-to-br from-[#C2CABB]/5 to-transparent rounded-xl border border-[#C2CABB]/10">
                                            <div className="flex justify-center mb-2">
                                                <div className="p-2 bg-gradient-to-br from-[#C2CABB]/10 to-transparent rounded-lg">
                                                    <stat.icon className="w-5 h-5 text-[#C2CABB]" />
                                                </div>
                                            </div>
                                            <div className="text-2xl font-bold text-[#C2CABB] mb-1">{stat.value}</div>
                                            <div className="text-xs text-[#C2CABB]/60">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={`text-center mt-16 transition-all duration-700 delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 className="text-2xl font-bold text-[#C2CABB] mb-6">Want to see more?</h3>
                    <p className="text-[#C2CABB]/70 max-w-xl mx-auto mb-8">
                        I'm always working on new projects and learning new technologies. Let's build something amazing together!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-gradient-to-r from-[#C2CABB] to-[#C2CABB]/80 text-[#10120F] font-semibold rounded-lg hover:bg-gradient-to-r hover:from-[#C2CABB]/90 hover:to-[#C2CABB]/70 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Start a Project
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-[#C2CABB]/30 text-[#C2CABB] font-semibold rounded-lg hover:bg-[#C2CABB]/5 hover:border-[#C2CABB]/50 transition-all duration-300"
                        >
                            View All Projects
                        </a>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-60 left-10 hidden lg:block">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#C2CABB]/10 to-transparent animate-float"></div>
            </div>
            <div className="absolute bottom-80 right-10 hidden lg:block">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#C2CABB]/5 to-transparent animate-float animation-delay-1000"></div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(10deg); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    )
}