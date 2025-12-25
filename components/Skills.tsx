'use client'

import { Code, Server, Database, Palette, Smartphone, Cloud, GitBranch, Terminal, Shield, Zap, Layers, Cpu } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function SkillsSection() {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    }, [])

    const skillCategories = [
        {
            title: "Frontend",
            icon: Palette,
            color: "from-[#C2CABB] to-[#C2CABB]/70",
            skills: [
                { name: "HTML/CSS", level: 95, color: "bg-gradient-to-r from-[#C2CABB] to-[#C2CABB]/80" },
                { name: "JavaScript", level: 90, color: "bg-gradient-to-r from-[#C2CABB] to-[#C2CABB]/70" },
                { name: "React.js", level: 85, color: "bg-gradient-to-r from-[#C2CABB] to-[#C2CABB]/60" },
                { name: "Next.js", level: 85, color: "bg-gradient-to-r from-[#C2CABB] to-[#C2CABB]/50" },
                { name: "Tailwind CSS", level: 95, color: "bg-gradient-to-r from-[#C2CABB] to-[#C2CABB]/80" },
                { name: "TypeScript", level: 80, color: "bg-gradient-to-r from-[#C2CABB] to-[#C2CABB]/40" }
            ]
        },
        {
            title: "Backend",
            icon: Server,
            color: "from-[#C2CABB]/90 to-[#C2CABB]/60",
            skills: [
                { name: "Node.js", level: 'learning', color: "bg-gradient-to-r from-[#C2CABB]/90 to-[#C2CABB]/60" },
                { name: "Express.js", level: 'learning', color: "bg-gradient-to-r from-[#C2CABB]/80 to-[#C2CABB]/50" },
                { name: "REST APIs", level: 85, color: "bg-gradient-to-r from-[#C2CABB]/90 to-[#C2CABB]/60" },
                { name: "MongoDB", level: 'learning', color: "bg-gradient-to-r from-[#C2CABB]/70 to-[#C2CABB]/40" },
                { name: "Authentication", level: 'learning', color: "bg-gradient-to-r from-[#C2CABB]/80 to-[#C2CABB]/50" },
                { name: "Firebase", level: 80, color: "bg-gradient-to-r from-[#C2CABB]/60 to-[#C2CABB]/30" }
            ]
        },
        {
            title: "Mobile & Tools",
            icon: Smartphone,
            color: "from-[#C2CABB]/80 to-[#C2CABB]/50",
            skills: [
                { name: "React Native", level: 'learning', color: "bg-gradient-to-r from-[#C2CABB]/80 to-[#C2CABB]/50" },
                { name: "Git/GitHub", level: 90, color: "bg-gradient-to-r from-[#C2CABB]/90 to-[#C2CABB]/60" },
                { name: "VS Code", level: 95, color: "bg-gradient-to-r from-[#C2CABB] to-[#C2CABB]/80" },
            ]
        }
    ]

    const additionalSkills = [
        { name: "Responsive Design", icon: Layers, level: "Expert" },
        { name: "Performance", icon: Zap, level: "Advanced" },
        { name: "Problem Solving", icon: Cpu, level: "Expert" },
        { name: "UI/UX Design", icon: Palette, level: "Intermediate" },
        { name: "Version Control", icon: GitBranch, level: "Advanced" },
        { name: "Testing", icon: Shield, level: "Intermediate" },
        { name: "Deployment", icon: Cloud, level: "Advanced" },
        { name: "CLI", icon: Terminal, level: "Intermediate" }
    ]

    return (
        <section
            id="skills"
            className="relative w-full min-h-screen py-16 md:py-24 bg-[#10120F] overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#C2CABB]/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#C2CABB]/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(194,202,187,0.02)_1px,transparent_0)] bg-[size:40px_40px] opacity-5"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-[#C2CABB]/5 border border-[#C2CABB]/10 rounded-full">
                        <Code className="w-4 h-4 text-[#C2CABB]" />
                        <span className="text-sm font-semibold text-[#C2CABB] tracking-wider">SKILLS & TECHNOLOGIES</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#C2CABB] mb-6">
                        What I Work With
                    </h2>
                    <p className="text-lg text-[#C2CABB]/80 max-w-2xl mx-auto leading-relaxed">
                        I specialize in modern web technologies and continuously expand my skill set to
                        build better, faster, and more efficient applications.
                    </p>
                </div>

                {/* Main Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 delay-${index * 100} ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <div className="bg-gradient-to-br from-[#C2CABB]/5 to-transparent p-6 rounded-2xl border border-[#C2CABB]/10 h-full hover:border-[#C2CABB]/30 transition-all duration-300 group">
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-gradient-to-br from-[#C2CABB]/10 to-transparent rounded-lg group-hover:bg-gradient-to-br group-hover:from-[#C2CABB]/20 group-hover:to-transparent transition duration-300">
                                        <category.icon className="w-6 h-6 text-[#C2CABB]" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#C2CABB]">{category.title}</h3>
                                        <div className="h-0.5 w-12 bg-gradient-to-r from-[#C2CABB] to-transparent mt-1"></div>
                                    </div>
                                </div>

                                {/* Skills List with Progress Bars */}
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-medium text-[#C2CABB]/90">{skill.name}</span>
                                                <span className="text-xs text-[#C2CABB]/60">{skill.level}%</span>
                                            </div>
                                            <div className="h-1.5 bg-[#C2CABB]/10 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${skill.color} transition-all duration-1000 ease-out ${animate ? 'w-full' : 'w-0'
                                                        }`}
                                                    style={{ width: animate ? `${skill.level}%` : '0%' }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Grid */}
                <div className={`transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-[#C2CABB] mb-4">Additional Proficiencies</h3>
                        <p className="text-[#C2CABB]/70 max-w-2xl mx-auto">
                            Beyond specific technologies, I focus on these core competencies
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {additionalSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-[#C2CABB]/5 to-transparent p-4 rounded-xl border border-[#C2CABB]/10 hover:border-[#C2CABB]/30 transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-1.5 bg-gradient-to-br from-[#C2CABB]/10 to-transparent rounded-lg">
                                        <skill.icon className="w-4 h-4 text-[#C2CABB]" />
                                    </div>
                                    <div className="text-sm font-semibold text-[#C2CABB]">{skill.name}</div>
                                </div>
                                <div className="text-xs text-[#C2CABB]/60 bg-[#C2CABB]/5 px-2 py-1 rounded-full inline-block">
                                    {skill.level}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-40 left-10 hidden lg:block">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#C2CABB]/10 to-transparent animate-float"></div>
            </div>
            <div className="absolute bottom-60 right-10 hidden lg:block">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#C2CABB]/5 to-transparent animate-float animation-delay-1000"></div>
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
            `}</style>
        </section>
    )
}