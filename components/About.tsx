// components/About.tsx (Updated with better resume alignment)
'use client'

import { User, Sparkles, Target, Brain, Code, BookOpen, Coffee, Zap, Award } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function AboutSection() {
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        setAnimated(true)
    }, [])

    const stats = [
        { icon: Code, value: "5+", label: "Projects" },
        { icon: Zap, value: "2+", label: "Years Experience" },
        { icon: Target, value: "Full-Stack", label: "Focus" },
        { icon: Award, value: "94%", label: "SCS Distinction" }
    ]

    const passions = [
        { icon: Sparkles, title: "Clean Code", desc: "Readable, scalable & maintainable code" },
        { icon: Brain, title: "Problem Solving", desc: "Breaking complex problems into solutions" },
        { icon: Coffee, title: "Creativity", desc: "Simple, beautiful UI experiences" },
        { icon: User, title: "User First", desc: "Designing with real users in mind" }
    ]

    return (
        <section id="about" className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#696f64]/40 rounded-full mb-4">
                        <User className="w-4 h-4 text-[#696f64]" />
                        <span className="text-sm font-medium text-[#696f64]">
                            About Me
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        A Little About Who I Am
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Results-driven Full-Stack Developer with 2+ years of experience architecting production-grade applications
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Left — Story */}
                    <div className={`space-y-6 transition-all duration-700 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
                        <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-[#696f64] rounded-full"></span>
                            Hey, I'm Azhan
                        </h3>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                I'm a passionate Full-Stack Developer who enjoys transforming ideas into
                                clean, functional, and user-friendly web applications. I've delivered 5+ client projects
                                from system design to deployment.
                            </p>
                            <p>
                                My tech stack includes <span className="font-medium text-gray-900">React, Next.js, TypeScript,
                                    Node.js, Express, NestJS, MongoDB, and Firebase</span>. I focus on building scalable solutions
                                with modern best practices.
                            </p>
                            <p>
                                Currently pursuing FSc Computer Science with a 94% SCS distinction, and actively
                                participating in hackathons to sharpen my skills under pressure.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="text-center p-3 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#696f64]/40 transition"
                                >
                                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-[#696f64]" />
                                    <div className="text-xl font-bold text-gray-900">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Passions */}
                    <div className={`space-y-3 transition-all duration-700 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
                        <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-[#696f64] rounded-full"></span>
                            What I Care About
                        </h3>

                        {passions.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#696f64]/40 transition bg-gray-50"
                            >
                                <div className="p-2 rounded-lg bg-white">
                                    <item.icon className="w-5 h-5 text-[#696f64]" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Current Focus */}
                <div className={`mt-10 text-center transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#696f64] rounded-full text-white">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium">
                            🔥 Currently focused on Next JS , TypeScript & NEST JS  scalable architecture
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}