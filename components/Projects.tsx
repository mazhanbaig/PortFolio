'use client'

import { ExternalLink, Folder, Github, ProjectorIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ProjectsSection() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(true)
    }, [])

    const projects = [
        {
            title: 'ZState',
            desc: 'A modern real-estate platform with clean UI, protected routes, and scalable architecture.',
            tech: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase'],
            live: 'zstate.vercel.app',
            github: 'https://github.com/mazhanbaig/RSMS',
            featured: true
        },
        {
            title: 'Portfolio Website',
            desc: 'Minimal portfolio focused on typography, performance, and clarity.',
            tech: ['Next.js', 'Tailwind'],
            live: 'mazhanbaig.vercel.app',
            github: 'https://github.com/mazhanbaig/PortFolio'
        },
    ]

    return (
        <section id="projects" className="bg-white py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#696f64]/40 rounded-full mb-4">
                        <Folder className="w-4 h-4 text-[#696f64]" />
                        <span className="text-sm font-medium text-[#696f64]">
                           Projects
                        </span>
                    </div>

                    <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
                        Selected Work
                    </h2>

                    <p className="mt-4 text-gray-600 text-base">
                        A few projects showcasing my approach to clean design and
                        practical development.
                    </p>
                </div>

                {/* Projects */}
                <div
                    className={`grid gap-6 sm:grid-cols-2 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className={`rounded-xl border px-6 py-4 transition ${project.featured
                                    ? 'border-[#696f64]/60 bg-gray-50'
                                    : 'border-gray-200'
                                }`}
                        >
                            {project.featured && (
                                <span className="text-xs font-medium text-[#696f64]">
                                    Featured
                                </span>
                            )}

                            <h3 className="mt-2 text-xl font-semibold text-gray-900">
                                {project.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                                {project.desc}
                            </p>

                            {/* Tech */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span
                                        key={t}
                                        className="text-xs px-3 py-1 rounded-full border border-gray-300 text-gray-700"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="mt-5 flex items-center gap-4">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-[#696f64]"
                                >
                                    Live <ExternalLink className="w-4 h-4" />
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-[#696f64]"
                                >
                                    Code <Github className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-14 text-center">
                    <a
                        href="https://github.com/mazhanbaig"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-[#696f64]/60 text-gray-900 text-sm font-medium hover:bg-[#696f64] hover:text-white transition"
                    >
                        View More on GitHub
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    )
}
