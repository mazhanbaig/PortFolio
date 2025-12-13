'use client'

import Image from 'next/image'
import { Github, Linkedin, Instagram, Download } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeroPortfolio() {
    const text = " I'm a Software Developer"
    const [typingText, setTypingText] = useState('')
    const [imageLoaded, setImageLoaded] = useState(false)
    const techStacks = [
        "React · Next.js · TypeScript",
        "Node.js · Express · MongoDB",
        "Tailwind · React Native",
        "Full Stack Development"
    ]

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setTypingText((prev) => prev + text.charAt(index))
            index++
            if (index === text.length) clearInterval(interval)
        }, 50)
        const techInterval = setInterval(() => {
            setCurrentTech(prev => (prev + 1) % techStacks.length)
        }, 3000)

        return () => {
            clearInterval(interval)
            clearInterval(techInterval)
        }
    }, [])

    return (
        <section className="relative w-full min-h-screen flex items-center px-4 sm:px-6 md:px-8 bg-[#10120F] text-[#C2CABB]">

            <div className="relative max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left Side - Text */}
                <div className="space-y-4 md:space-y-6 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Muhammad Azhan
                    </h1>

                    <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#C2CABB]/90">
                        {typingText}
                        <span className="inline-block w-1 h-6 ml-1 bg-[#C2CABB] animate-blink"></span>
                    </h2>
                    {/* Tech Stack Carousel */}
                    <div className="h-6 overflow-hidden mt-2">
                        <div className="transition-transform duration-500" style={{ transform: `translateY(-${currentTech * 100}%)` }}>
                            {techStacks.map((tech, i) => (
                                <div key={i} className="h-6 flex items-center gap-2">
                                    <Code className="w-4 h-4 text-[#C2CABB]/70" />
                                    <span className="text-[#C2CABB]/80">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-[#C2CABB]/70 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                        I'm a passionate Full-Stack Developer creating responsive and user-friendly websites and applications using modern web technologies.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <a
                            href="/cv.pdf"
                            className="flex items-center gap-2 px-6 py-2 bg-[#C2CABB] text-[#10120F] font-medium rounded-full hover:bg-[#C2CABB]/90 transition"
                        >
                            <Download className="w-4 h-4" /> Download CV
                        </a>
                        <Link
                            href="#projects"
                            className="px-6 py-2 border border-[#C2CABB]/50 text-[#C2CABB] font-medium rounded-full hover:bg-[#C2CABB]/10 transition"
                        >
                            View Projects
                        </Link>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 mt-4 justify-center md:justify-start">
                        {[{ icon: Github, href: "https://github.com" },
                        { icon: Linkedin, href: "https://linkedin.com" },
                        { icon: Instagram, href: "https://instagram.com" }].map((social, idx) => (
                            <Link key={idx} href={social.href} target="_blank" className="p-2 rounded-full hover:bg-[#C2CABB]/10 transition">
                                <social.icon className="w-5 h-5 text-[#C2CABB]" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Side - Profile Image */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[#C2CABB]/50 shadow-md">
                        <Image
                            src="/Me.jpg"
                            alt="Muhammad Azhan"
                            fill
                            className={`object-cover transition-all duration-500 rounded-full ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setImageLoaded(true)}
                        />
                        {/* Soft glow effect */}
                        <div className="absolute inset-0 rounded-full bg-[#C2CABB]/10 blur-xl"></div>
                    </div>
                </div>

            </div>

            <style jsx>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s infinite;
                }
            `}</style>
        </section>
    )
}
