'use client'

import Image from 'next/image'
import { Github, Linkedin, Instagram, Download, Code } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeroPortfolio() {
    const text = "  I'm a Software  Developer"
    const [typingText, setTypingText] = useState('')
    const [imageLoaded, setImageLoaded] = useState(false)
    const [currentTech, setCurrentTech] = useState(0)

    const techStacks = [
        "React · Next.js · TypeScript",
        "Node.js · Express · MongoDB",
        "Tailwind · React Native",
        "Full Stack Development"
    ]

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setTypingText(prev => prev + text.charAt(index))
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
        <section className="relative w-full min-h-screen flex items-center px-4 sm:px-6 md:px-8 bg-white text-gray-900">

            <div className="relative top-30 sm:top-30 md:top-7 lg:top-5 sm:left-3 lg:-left-5 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Side */}
                <div className="space-y-5 text-center md:text-left">
                    <h1 className="text-[#696f64] text-5xl md:text-5xl font-bold">
                        Muhammad Azhan
                    </h1>

                    <h2 className="text-xl md:text-2xl font-medium text-gray-700">
                        {typingText}
                        <span className="inline-block w-1 h-6 ml-1 bg-gray-900 animate-blink"></span>
                    </h2>

                    {/* Tech Stack
                    <div className="h-6 overflow-hidden mt-2">
                        <div
                            className="transition-transform duration-500"
                            style={{ transform: `translateY(-${currentTech * 100}%)` }}
                        >
                            {techStacks.map((tech, i) => (
                                <div key={i} className="h-6 flex items-center gap-2">
                                    <Code className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-600">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                        I'm a passionate Full-Stack Developer creating responsive and
                        user-friendly websites and applications using modern web technologies.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                        <a
                            href="/cv.pdf"
                            className="flex items-center justify-center gap-2 px-6 py-2 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition"
                        >
                            <Download className="w-4 h-4" /> Download CV
                        </a>
                        <Link
                            href="#projects"
                            className="px-6 py-2 border border-gray-300 text-gray-800 font-medium rounded-full hover:bg-gray-100 transition text-center"
                        >
                            View Projects
                        </Link>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4 mt-4 justify-center md:justify-start">
                        {[{ icon: Github, href: "https://github.com/mazhanbaig" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-azhan-baig-a3b46a288" },
                        { icon: Instagram, href: "https://instagram.com" }].map((social, idx) => (
                            <Link
                                key={idx}
                                href={social.href}
                                target="_blank"
                                className="p-2 rounded-full hover:bg-gray-100 transition"
                            >
                                <social.icon className="w-5 h-5 text-gray-700" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-[#696f64] shadow-lg">
                        <Image
                            src="/Me.jpg"
                            alt="Muhammad Azhan"
                            fill
                            className={`object-cover rounded-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                                }`}
                            onLoad={() => setImageLoaded(true)}
                        />
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

// border - [#C2CABB] / 50