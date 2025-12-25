'use client'

import Image from 'next/image'
import { User, Sparkles, Target, Rocket, Brain, Code, BookOpen, Coffee, TrendingUp, Heart, Zap, Clock } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function AboutSection() {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    }, [])

    const facts = [
        { icon: Code, value: "6+", label: "Projects Completed" },
        { icon: Clock, value: "2+", label: "Years Learning" },
        { icon: Zap, value: "100%", label: "Passion" },
        { icon: Heart, value: "24/7", label: "Learning Mode" }
    ]

    const cards = [
        { icon: Sparkles, title: "My Journey", content: "I love transforming ideas into interactive digital experiences. My journey is driven by curiosity, learning, and a constant desire to improve." },
        { icon: Target, title: "My Mission", content: "To develop software that solves real-world problems, creating smooth and efficient experiences for users while maintaining quality and performance." },
        { icon: Brain, title: "Beyond Code", content: "I enjoy spending time with friends, exploring other fields like astronomy and science, and staying curious about the world beyond technology." },
        { icon: Rocket, title: "Future Goals", content: "To dive deep into AI and cutting-edge technologies, contributing to impactful projects that push boundaries and make a difference." }
    ]


    const hobbies = [
        { icon: Coffee, label: "Coffee Enthusiast", desc: "Perfecting the art of brewing" },
        { icon: BookOpen, label: "Continuous Learner", desc: "Always reading & learning" },
        { icon: Brain, label: "Problem Solver", desc: "Love strategic games like chess" },
        { icon: TrendingUp, label: "Tech Explorer", desc: "Staying updated with trends" }
    ]

    return (
        <section id="about" className="relative w-full bg-[#10120F] text-[#C2CABB] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

                {/* Left Column - Text Content */}
                <div className="flex-1 space-y-10">
                    {/* Section Header */}
                    <div className={`transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center gap-2 text-[#C2CABB] mb-2">
                            <User className="w-5 h-5" />
                            <span className="uppercase text-sm font-semibold tracking-wider">About Me</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Who I Am</h2>
                        <p className="text-[#C2CABB]/80 leading-relaxed max-w-lg">
                            I'm Azhan, a passionate Full-Stack Developer creating modern, responsive, and user-friendly web experiences using cutting-edge technologies.
                        </p>
                    </div>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cards.map((card, idx) => (
                            <div key={idx} className={`bg-[#10120F]/90 border border-[#C2CABB]/20 p-5 rounded-2xl transition hover:border-[#C2CABB]/40 shadow-sm`}>
                                <div className="flex items-center gap-3 mb-3">
                                    <card.icon className="w-5 h-5 text-[#C2CABB]" />
                                    <h3 className="font-semibold text-lg">{card.title}</h3>
                                </div>
                                <p className="text-[#C2CABB]/70 text-sm">{card.content}</p>
                            </div>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    {/* <div className="mt-8 bg-[#10120F]/90 p-6 rounded-2xl border border-[#C2CABB]/20">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Code className="w-5 h-5" /> Current Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {["HTML/CSS", "JS/TS", "React", "Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "React Native"].map((tech, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-[#C2CABB]/10 border border-[#C2CABB]/20 rounded-full text-sm hover:bg-[#C2CABB]/20 hover:text-white transition">{tech}</span>
                            ))}
                        </div>
                    </div> */}
                </div>

                {/* Right Column - Image & Facts */}
                <div className="flex-1 flex flex-col gap-8">
                    {/* Profile Image
                    <div className="relative w-full max-w-md h-50 mx-auto rounded-3xl overflow-hidden border border-[#C2CABB]/20 shadow-2xl">
                        <Image
                            src="/aboutmelogo.jpg"
                            alt="Azhan Baig"
                            width={300}
                            height={300}
                            className="object-cover w-full h-full rounded-3xl"
                        />
                    </div> */}

                    {/* Quick Facts */}
                    <div className="grid grid-cols-2 gap-4">
                        {facts.map((fact, idx) => (
                            <div key={idx} className="bg-[#10120F]/90 p-4 rounded-xl border border-[#C2CABB]/20 text-center hover:border-[#C2CABB]/40 transition">
                                <fact.icon className="w-5 h-5 mx-auto mb-2 text-[#C2CABB]" />
                                <div className="text-xl font-bold">{fact.value}</div>
                                <div className="text-sm text-[#C2CABB]/70">{fact.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Hobbies */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Beyond the Code</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {hobbies.map((hobby, idx) => (
                                <div key={idx} className="bg-[#10120F]/90 p-4 rounded-xl border border-[#C2CABB]/20 text-center hover:border-[#C2CABB]/40 transition">
                                    <hobby.icon className="w-6 h-6 mx-auto mb-2 text-[#C2CABB]" />
                                    <div className="text-sm font-medium">{hobby.label}</div>
                                    <div className="text-xs text-[#C2CABB]/70">{hobby.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
