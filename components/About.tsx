'use client'

import {
    User,
    Sparkles,
    Target,
    Brain,
    Code,
    BookOpen,
    Coffee,
    Zap
} from 'lucide-react'
import { useEffect, useState } from 'react'

export default function AboutSection() {
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        setAnimated(true)
    }, [])

    const stats = [
        { icon: Code, value: "6+", label: "Projects" },
        { icon: Zap, value: "2+", label: "Years" },
        { icon: Target, value: "Full-Stack", label: "Focus" },
        { icon: BookOpen, value: "Always", label: "Learning" }
    ]

    const passions = [
        { icon: Sparkles, title: "Clean Code", desc: "Readable, scalable & maintainable code" },
        { icon: Brain, title: "Problem Solving", desc: "Breaking complex problems into solutions" },
        { icon: Coffee, title: "Creativity", desc: "Simple, beautiful UI experiences" },
        { icon: User, title: "User First", desc: "Designing with real users in mind" }
    ]

    return (
        <section
            id="about"
            className="w-full bg-white py-1 mt-5 sm:mt-0 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#696f64]/40 rounded-full mb-4">
                        <User className="w-4 h-4 text-[#696f64]" />
                        <span className="text-sm font-medium text-[#696f64]">
                            About Me
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        A little about who I am
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A developer focused on building modern, clean, and meaningful digital products.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-14 items-start">

                    {/* Left — Story */}
                    <div className={`space-y-8 transition-all duration-700 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
                        <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-[#696f64] rounded-full"></span>
                            Hey, I’m Azhan
                        </h3>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                I’m a Full-Stack Developer who enjoys transforming ideas into
                                clean, functional, and user-friendly web applications.
                            </p>

                            <p>
                                I work mainly with modern technologies like
                                <span className="font-medium text-gray-900"> React, Next.js, TypeScript</span>,
                                and Tailwind CSS to build fast and scalable interfaces.
                            </p>

                            <p>
                                Outside of coding, I enjoy learning new technologies,
                                refining my skills, and continuously improving how I build.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="text-center p-2 border border-gray-200 rounded-xl hover:border-[#696f64]/60 transition"
                                >
                                    <stat.icon className="w-5 h-5 mx-auto mb-2 text-[#696f64]" />
                                    <div className="text-xl font-bold text-gray-900">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600">
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
                                className="flex items-start gap-4 px-5 py-2 rounded-xl border border-gray-200 hover:border-[#696f64]/60 transition"
                            >
                                <div className="p-3 rounded-lg bg-gray-100">
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
                <div className={`mt-16 text-center transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#696f64]/100 border border-[#696f64]/50 rounded-full text-white">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        <span className="font-medium">
                            Currently focused on Next.js, TypeScript & scalable frontend architecture
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}
