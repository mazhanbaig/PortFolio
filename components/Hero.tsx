'use client'

import Image from 'next/image'
import { Github, Linkedin, Instagram, Download, Code, Award, Briefcase, MapPin, Mail, Sparkles, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeroPortfolio() {
    const [typingText, setTypingText] = useState('')
    const [imageLoaded, setImageLoaded] = useState(false)
    const [currentTech, setCurrentTech] = useState(0)
    const [showFullText, setShowFullText] = useState(false)

    const fullText = " Full-Stack Developer"
    const techStacks = [
        "React.js · Next.js · TypeScript",
        "Node.js · Express.js · NestJS",
        "MongoDB · Firebase · PostgreSQL",
        "Tailwind · React Native · Docker"
    ]

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setTypingText(prev => prev + fullText.charAt(index))
            index++
            if (index === fullText.length) {
                clearInterval(interval)
                setShowFullText(true)
            }
        }, 100)

        const techInterval = setInterval(() => {
            setCurrentTech(prev => (prev + 1) % techStacks.length)
        }, 2500)

        return () => {
            clearInterval(interval)
            clearInterval(techInterval)
        }
    }, [])

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    const stats = [
        { icon: Briefcase, value: "2+", label: "Years Experience" },
        { icon: Code, value: "5+", label: "Projects Delivered" },
        { icon: Award, value: "94%", label: "SSC Distinction" }
    ]

    return (
        <section id="home" className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#696f64]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#696f64]/3 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#696f64]/5 to-transparent rounded-full blur-3xl"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(105,111,100,0.03)_1px,transparent_0)] bg-[size:40px_40px]"></div>
            </div>

            <div className="relative max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Content */}
                    <div className="space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#696f64]/10 rounded-full w-fit">
                            <Sparkles className="w-4 h-4 text-[#696f64]" />
                            <span className="text-sm font-medium text-[#696f64]">Available for opportunities</span>
                        </div>

                        {/* Name */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Muhammad <span className="text-[#696f64]">Azhan</span> Baig
                        </h1>

                        {/* Typing Title */}
                        <div className="h-12">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700">
                                {typingText}
                                <span className="inline-block w-1 h-7 ml-1 bg-[#696f64] animate-blink"></span>
                            </h2>
                        </div>

                        {/* Animated Tech Stack */}
                        {/* <div className="h-8 overflow-hidden">
                            <div
                                className="transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateY(-${currentTech * 100}%)` }}
                            >
                                {techStacks.map((tech, i) => (
                                    <div key={i} className="h-8 flex items-center gap-2">
                                        <Code className="w-4 h-4 text-[#696f64]" />
                                        <span className="text-gray-600 text-sm sm:text-base">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div> */}

                        {/* Description */}
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                            Results-driven Full-Stack Developer with 2+ years of experience architecting
                            and shipping production-grade web and mobile applications. I build scalable,
                            high-performance solutions with modern technologies.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-6 pt-2">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-[#696f64]">{stat.value}</div>
                                    <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <a
                                href="/cv.pdf"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#696f64] text-white font-medium rounded-full hover:bg-[#555b4f] transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                <Download className="w-4 h-4" />
                                Download CV
                            </a>
                            <Link
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#696f64] text-[#696f64] font-medium rounded-full hover:bg-[#696f64] hover:text-white transition-all duration-300"
                            >
                                View Projects
                                <ChevronDown className="w-4 h-4" />
                            </Link>
                            <button
                                onClick={scrollToContact}
                                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
                            >
                                <Mail className="w-4 h-4" />
                                Hire Me
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-4">
                            <a
                                href="https://github.com/mazhanbaig"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-[#696f64] hover:text-white transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/muhammad-azhan-baig-a3b46a288"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-[#696f64] hover:text-white transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full bg-gray-100 text-gray-700 hover:bg-[#696f64] hover:text-white transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <div className="w-px h-8 bg-gray-200 mx-1"></div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <MapPin className="w-4 h-4" />
                                <span>Karachi, Pakistan</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image & Badges */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Decorative rings */}
                            <div className="absolute -top-4 -left-4 w-full h-full rounded-full border-2 border-[#696f64]/20 animate-pulse-slow"></div>
                            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-full border-2 border-[#696f64]/10"></div>

                            {/* Main Image */}
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-gray-100 to-gray-200">
                                <Image
                                    src="/Me.jpg"
                                    alt="Muhammad Azhan Baig - Full-Stack Developer"
                                    fill
                                    className={`object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                    onLoad={() => setImageLoaded(true)}
                                    priority
                                />
                            </div>

                            {/* Floating Badges */}
                            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-xl shadow-lg p-2 sm:p-3 animate-float">
                                <div className="flex items-center gap-2">
                                    <Code className="w-4 h-4 text-[#696f64]" />
                                    <span className="text-xs sm:text-sm font-medium text-gray-900">Full-Stack</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-xl shadow-lg p-2 sm:p-3 animate-float-delayed">
                                <div className="flex items-center gap-2">
                                    <Award className="w-4 h-4 text-[#696f64]" />
                                    <span className="text-xs sm:text-sm font-medium text-gray-900">94% SSC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
                    <span className="text-xs text-gray-400">Scroll to explore</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
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
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float 4s ease-in-out infinite 1s;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0px) translateX(-50%); }
                    50% { transform: translateY(10px) translateX(-50%); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2s ease-in-out infinite;
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.05); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}