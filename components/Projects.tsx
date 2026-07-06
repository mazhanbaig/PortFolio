'use client'

import { ExternalLink, Folder, Github } from 'lucide-react'
import { useEffect, useState } from 'react'
import { projects } from '@/constants/content'

export default function ProjectsSection() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(true)
    }, [])

    return (
        <section id="projects" className="bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4 shadow-md backdrop-blur-md">
                        <Folder className="w-4 h-4 text-[#696f64]" />
                        <span className="text-sm font-medium text-gray-300">
                           Projects
                        </span>
                    </div>

                    <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Selected Work
                    </h2>

                    <p className="mt-4 text-gray-400 text-base">
                        A few projects showcasing my approach to clean design and
                        practical development.
                    </p>
                </div>

                {/* Projects Grid */}
                <div
                    className={`grid gap-6 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className={`glass-panel glass-panel-hover rounded-2xl px-6 py-6 transition-all duration-300 ${project.featured
                                    ? 'border-[#696f64]/50 shadow-lg'
                                    : 'border-white/10 shadow-md'
                                }`}
                        >
                            {project.featured && (
                                <span className="text-xs font-semibold text-[#696f64] uppercase tracking-wider">
                                    Featured Project
                                </span>
                            )}

                            <h3 className="mt-2 text-xl font-bold text-white tracking-tight">
                                {project.title}
                            </h3>

                            <p className="mt-2.5 text-sm text-gray-300 leading-relaxed">
                                {project.desc}
                            </p>

                            {/* Tech Badges */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span
                                        key={t}
                                        className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="mt-6 flex items-center gap-5">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#696f64] transition duration-200"
                                >
                                    Live Demo <ExternalLink className="w-4 h-4" />
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#696f64] transition duration-200"
                                >
                                    Source Code <Github className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="https://github.com/mazhanbaig"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-[#696f64] hover:text-white text-gray-200 text-sm font-medium hover:border-[#696f64] transition duration-300"
                    >
                        View More on GitHub
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    )
}
