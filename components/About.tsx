'use client'

import { User, Sparkles, Target, Brain, Code, Zap, Award, Coffee } from 'lucide-react'
import { useEffect, useState } from 'react'
import { personalInfo, passions } from '@/constants/content'
import { motion } from 'framer-motion'

export default function AboutSection() {
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        setAnimated(true)
    }, [])

    const iconMap: { [key: string]: any } = {
        Palette: Code, // Fallbacks
        Brain,
        Sparkles,
        User,
        Target,
        Code,
        Zap,
        Award,
        Coffee
    }

    return (
        <section id="about" className="w-full bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4 backdrop-blur-md">
                        <User className="w-4 h-4 text-[#696f64]" />
                        <span className="text-sm font-medium text-gray-300">
                            About Me
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        A Little About Who I Am
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base">
                        Results-driven Full-Stack Developer with 2+ years of experience architecting production-grade applications
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left — Story */}
                    <div className={`space-y-6 transition-all duration-700 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
                        <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-[#696f64] rounded-full"></span>
                            Hey, I'm Azhan
                        </h3>

                        <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                            {personalInfo.bio.map((paragraph, i) => (
                                <p key={i}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Stats mini grid */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {personalInfo.stats.map((stat, idx) => {
                                const StatIcon = iconMap[stat.icon.name] || stat.icon
                                return (
                                    <div
                                        key={idx}
                                        className="text-center p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-[#696f64]/40 transition duration-300 backdrop-blur-sm"
                                    >
                                        <StatIcon className="w-5 h-5 mx-auto mb-2 text-[#696f64]" />
                                        <div className="text-xl font-bold text-white">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs text-gray-400 mt-1">
                                            {stat.label}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right — Passions */}
                    <div className={`space-y-4 transition-all duration-700 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
                        <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-[#696f64] rounded-full"></span>
                            What I Care About
                        </h3>

                        <div className="space-y-3.5">
                            {passions.map((item, idx) => {
                                const PassionIcon = iconMap[item.icon.name] || item.icon
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-4 p-4 rounded-2xl border border-white/10 hover:border-[#696f64]/45 hover:bg-white/[0.02] transition duration-300 bg-white/5 backdrop-blur-sm"
                                    >
                                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#696f64]">
                                            <PassionIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-gray-400 mt-1">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* Current Focus */}
                <div className={`mt-14 text-center transition-all duration-700 delay-200 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#696f64] rounded-full text-white shadow-lg backdrop-blur-sm">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium tracking-wide">
                            🔥 Currently focused on Next.js, TypeScript & NestJS scalable architecture
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}