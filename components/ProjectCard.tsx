'use client'

import { useState } from 'react'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

interface ProjectCardProps {
    title: string
    description: string
    tags: string[]
    link: string
    github?: string
    image?: string
}

export default function ProjectCard({ title, description, tags, link, github, image }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-dark-card to-dark-surface border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Animated Gradient Border */}
            <div className={`absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-purple-500/0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

            {/* Content */}
            <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="w-5 h-5 text-primary-400" />
                            <h3 className="text-2xl font-bold text-white">{title}</h3>
                        </div>
                        <p className="text-gray-400">{description}</p>
                    </div>

                    <div className="flex gap-3">
                        {github && (
                            <a
                                href={github}
                                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        <a
                            href={link}
                            className="p-2 rounded-lg bg-gradient-to-r from-primary-600 to-purple-600 hover:opacity-90 transition-opacity"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-primary-900/20 to-purple-900/20 text-primary-300 border border-primary-500/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Hover Effect Indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500 transform transition-transform duration-500 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}></div>
            </div>
        </div>
    )
}