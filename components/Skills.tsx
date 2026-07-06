'use client'

import { Code, Server, Palette, Layers, Zap, Cpu, GitBranch, Cloud, Shield, Database, Terminal, CheckCircle2, Circle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { skillCategories, coreCompetencies, learningTechs } from '@/constants/content'

export default function SkillsSection() {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    }, [])

    const iconMap: { [key: string]: any } = {
        Palette,
        Server,
        Database,
        Code,
        Cpu,
        Layers,
        Zap,
        GitBranch,
        Cloud,
        Shield,
        Terminal
    }

    const getLevelIcon = (level: string) => {
        switch (level) {
            case 'Expert': return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            case 'Advanced': return <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            case 'Intermediate': return <Circle className="w-3.5 h-3.5 text-amber-400" />
            default: return <Circle className="w-3.5 h-3.5 text-gray-400" />
        }
    }

    return (
        <section id="skills" className="bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4 shadow-md backdrop-blur-md">
                        <Code className="w-4 h-4 text-[#696f64]" />
                        <span className="text-sm font-medium text-gray-300">
                            Technical Expertise
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        What I Bring to the Table
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base">
                        A comprehensive toolkit for building modern, production-ready applications
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {skillCategories.map((category, idx) => {
                        const CategoryIcon = iconMap[category.icon.name] || category.icon
                        return (
                            <div
                                key={idx}
                                className={`glass-panel rounded-2xl p-6 shadow-xl hover:border-[#696f64]/40 transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                                {/* Category Header */}
                                <div className="flex items-start gap-3 mb-4">
                                    <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-[#696f64]">
                                        <CategoryIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{category.title}</h3>
                                        <p className="text-xs text-gray-400 mt-0.5">{category.description}</p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-white/10 mb-4"></div>

                                {/* Skills List */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIdx) => (
                                        <div
                                            key={skillIdx}
                                            className="group relative"
                                        >
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 hover:border-[#696f64]/40 hover:bg-[#696f64]/10 transition-all duration-200 cursor-default">
                                                {getLevelIcon(skill.level)}
                                                <span className="text-sm font-medium text-gray-300 group-hover:text-white">{skill.name}</span>
                                            </div>
                                            {/* Tooltip */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-white/10">
                                                {skill.level}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Core Competencies */}
                <div className={`transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4 shadow-md backdrop-blur-md">
                            <Zap className="w-4 h-4 text-[#696f64]" />
                            <span className="text-sm font-medium text-gray-300">
                                Beyond Technology
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                            Core Competencies
                        </h3>
                        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
                            Professional skills that complement my technical abilities
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {coreCompetencies.map((comp, idx) => {
                            const CompIcon = iconMap[comp.icon.name] || comp.icon
                            return (
                                <div
                                    key={idx}
                                    className="group glass-panel rounded-xl p-4 hover:border-[#696f64]/30 hover:shadow-2xl transition-all duration-300 cursor-default"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-white/5 border border-white/10 rounded-lg group-hover:bg-[#696f64]/10 transition-colors text-[#696f64]">
                                            <CompIcon className="w-4 h-4" />
                                        </div>
                                        <h4 className="font-semibold text-white text-sm">{comp.name}</h4>
                                    </div>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        {comp.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Learning & Growth Section */}
                <div className={`mt-14 text-center transition-all duration-700 delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full shadow-lg backdrop-blur-md">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-300">
                            📚 Currently expanding:
                            <span className="font-semibold text-white ml-1">
                                {learningTechs.join(' · ')}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}