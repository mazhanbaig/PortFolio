// components/Skills.tsx (Professional Design - No Percentages)
'use client'

import { Code, Server, Palette, Smartphone, Layers, Zap, Cpu, GitBranch, Cloud, Shield, Database, Terminal, CheckCircle2, Circle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function SkillsSection() {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    }, [])

    const skillCategories = [
        {
            title: "Frontend Development",
            icon: Palette,
            description: "Building responsive, interactive user interfaces",
            skills: [
                { name: "React.js", level: "Advanced" },
                { name: "Next.js", level: "Advanced" },
                { name: "React Native", level: "Intermediate" },
                { name: "TypeScript", level: "Intermediate" },
                { name: "Tailwind CSS", level: "Expert" },
                { name: "JavaScript", level: "Advanced" },
                { name: "HTML/CSS", level: "Expert" },
            ]
        },
        {
            title: "Backend Development",
            icon: Server,
            description: "Creating scalable server-side applications",
            skills: [
                { name: "Node.js", level: "Advanced" },
                { name: "Express.js", level: "Advanced" },
                { name: "NestJS", level: "Advanced" },
                { name: "REST APIs", level: "Advanced" },
                { name: "JWT Authentication", level: "Advanced" },
                { name: "Firebase", level: "Advanced" },
            ]
        },
        {
            title: "Database & DevOps",
            icon: Database,
            description: "Managing data and deployment workflows",
            skills: [
                { name: "MongoDB", level: "Advanced" },
                { name: "Mongoose", level: "Advanced" },
                { name: "Git/GitHub", level: "Expert" },
                { name: "Docker", level: "Intermediate" },
                { name: "Vercel", level: "Expert" },
            ]
        }
    ]

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Expert': return 'bg-emerald-500'
            case 'Advanced': return 'bg-blue-500'
            case 'Intermediate': return 'bg-amber-500'
            default: return 'bg-gray-400'
        }
    }

    const getLevelIcon = (level: string) => {
        switch (level) {
            case 'Expert': return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            case 'Advanced': return <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
            case 'Intermediate': return <Circle className="w-3.5 h-3.5 text-amber-500" />
            default: return <Circle className="w-3.5 h-3.5 text-gray-400" />
        }
    }

    const coreCompetencies = [
        { name: "Problem Solving", icon: Cpu, description: "Breaking down complex challenges" },
        { name: "Clean Code", icon: Layers, description: "Maintainable & scalable architecture" },
        { name: "Performance", icon: Zap, description: "Optimizing load times & efficiency" },
        { name: "Version Control", icon: GitBranch, description: "Collaborative development workflow" },
        { name: "Deployment", icon: Cloud, description: "CI/CD & production releases" },
        { name: "UI/UX Sense", icon: Palette, description: "User-centered design thinking" },
        { name: "Testing", icon: Shield, description: "Reliable & bug-free code" },
        { name: "Documentation", icon: Terminal, description: "Clear technical writing" },
    ]

    return (
        <section id="skills" className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-4 shadow-sm">
                        <Code className="w-4 h-4 text-[#696f64]" />
                        <span className="text-sm font-medium text-gray-700">
                            Technical Expertise
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What I Bring to the Table
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern, production-ready applications
                    </p>
                </div>

                {/* Skills Grid - New Design */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className={`bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                            {/* Category Header */}
                            <div className="flex items-start gap-3 mb-4">
                                <div className="p-2.5 bg-gradient-to-br from-[#696f64]/10 to-[#696f64]/5 rounded-xl">
                                    <category.icon className="w-6 h-6 text-[#696f64]" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                                    <p className="text-xs text-gray-500 mt-0.5">{category.description}</p>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-4"></div>

                            {/* Skills List */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIdx) => (
                                    <div
                                        key={skillIdx}
                                        className="group relative"
                                    >
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-200 hover:border-[#696f64]/40 hover:bg-[#696f64]/5 transition-all duration-200">
                                            {getLevelIcon(skill.level)}
                                            <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                        </div>
                                        {/* Tooltip */}
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                                            {skill.level}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Core Competencies - Redesigned */}
                <div className={`transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-4 shadow-sm">
                            <Zap className="w-4 h-4 text-[#696f64]" />
                            <span className="text-sm font-medium text-gray-700">
                                Beyond Technology
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Core Competencies
                        </h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Professional skills that complement my technical abilities
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {coreCompetencies.map((comp, idx) => (
                            <div
                                key={idx}
                                className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-[#696f64]/30 hover:shadow-md transition-all duration-300 cursor-default"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-[#696f64]/5 transition-colors">
                                        <comp.icon className="w-4 h-4 text-[#696f64]" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 text-sm">{comp.name}</h4>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    {comp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Learning & Growth Section */}
                <div className={`mt-12 text-center transition-all duration-700 delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">
                            📚 Currently expanding:
                            <span className="font-medium text-gray-900 ml-1">NestJS · Docker · GraphQL</span>
                        </span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    )
}