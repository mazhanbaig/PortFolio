'use client'

import Image from 'next/image'
import { Github, Linkedin, Instagram, Download, Code, Award, Briefcase, MapPin, Mail, Sparkles, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { personalInfo } from '@/constants/content'
import { motion, Variants } from 'framer-motion'

export default function HeroPortfolio() {
    const [typingText, setTypingText] = useState('')
    const [imageLoaded, setImageLoaded] = useState(false)
    const [currentTech, setCurrentTech] = useState(0)

    const fullText = ` ${personalInfo.title}`
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
            }
        }, 100)

        const techInterval = setInterval(() => {
            setCurrentTech(prev => (prev + 1) % techStacks.length)
        }, 3000)

        return () => {
            clearInterval(interval)
            clearInterval(techInterval)
        }
    }, [])

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    const iconMap: { [key: string]: any } = {
        Briefcase,
        Code,
        Award
    }

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    }

    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-[1200px] mx-auto w-full z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Side - Content */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6 text-center lg:text-left order-2 lg:order-1"
                    >
                        {/* Badge */}
                        <motion.div 
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit mx-auto lg:mx-0 backdrop-blur-md"
                        >
                            <Sparkles className="w-4 h-4 text-[#696f64]" />
                            <span className="text-sm font-medium text-gray-300">{personalInfo.tagline}</span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1 
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
                        >
                            Muhammad <span className="text-[#696f64]">Azhan</span> Baig
                        </motion.h1>

                        {/* Typing Title */}
                        <motion.div variants={itemVariants} className="h-12 flex justify-center lg:justify-start items-center">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300">
                                {typingText}
                                <span className="inline-block w-1 h-6 ml-1.5 align-middle bg-[#696f64] animate-blink"></span>
                            </h2>
                        </motion.div>

                        {/* Animated Tech Stack */}
                        <motion.div variants={itemVariants} className="h-8 overflow-hidden relative w-full max-w-sm mx-auto lg:mx-0">
                            <div
                                className="transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateY(-${currentTech * 100}%)` }}
                            >
                                {techStacks.map((tech, i) => (
                                    <div key={i} className="h-8 flex items-center justify-center lg:justify-start gap-2">
                                        <Code className="w-4 h-4 text-[#696f64]" />
                                        <span className="text-gray-400 text-sm sm:text-base font-medium">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p 
                            variants={itemVariants}
                            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
                        >
                            {personalInfo.bio[0]}
                        </motion.p>

                        {/* Stats */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex justify-center lg:justify-start gap-6 sm:gap-8 pt-2"
                        >
                            {personalInfo.stats.map((stat, idx) => {
                                const StatIcon = iconMap[stat.icon.name] || stat.icon
                                return (
                                    <div key={idx} className="text-center lg:text-left">
                                        <div className="text-2xl sm:text-3xl font-bold text-white flex items-center justify-center lg:justify-start gap-1.5">
                                            <StatIcon className="w-4 h-4 text-[#696f64] inline-block" />
                                            {stat.value}
                                        </div>
                                        <div className="text-xs sm:text-sm text-gray-400 mt-0.5">{stat.label}</div>
                                    </div>
                                )
                            })}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
                        >
                            <a
                                href={personalInfo.cvUrl}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#696f64] text-white font-medium rounded-full hover:bg-primary-sage-hover transition-all duration-300 shadow-lg"
                            >
                                <Download className="w-4 h-4" />
                                Download CV
                            </a>
                            <Link
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 bg-white/5 text-gray-200 font-medium rounded-full hover:bg-white/10 transition-all duration-300"
                            >
                                View Projects
                                <ChevronDown className="w-4 h-4" />
                            </Link>
                            <button
                                onClick={scrollToContact}
                                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/20 bg-white/5 text-gray-200 font-medium rounded-full hover:bg-white/10 transition-all duration-300"
                            >
                                <Mail className="w-4 h-4" />
                                Hire Me
                            </button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div 
                            variants={itemVariants}
                            className="flex items-center justify-center lg:justify-start gap-3 pt-4 text-gray-400"
                        >
                            {personalInfo.socials.map((social, idx) => {
                                const SocialIcon = social.icon
                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:bg-[#696f64] hover:text-white hover:border-[#696f64] hover:-translate-y-1 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <SocialIcon className="w-5 h-5" />
                                    </a>
                                )
                            })}
                            <div className="w-px h-6 bg-white/10 mx-1"></div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <MapPin className="w-4 h-4 text-[#696f64]" />
                                <span>{personalInfo.location}</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Image & Badges */}
                    <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative">
                            {/* Decorative glowing gradient ring */}
                            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#696f64]/30 to-emerald-900/10 blur opacity-70 animate-pulse-slow"></div>

                            {/* Main Image Container */}
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-[#0f0f12]">
                                <Image
                                    src="/Me.jpg"
                                    alt={`${personalInfo.name} - Full-Stack Developer`}
                                    fill
                                    className={`object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                    onLoad={() => setImageLoaded(true)}
                                    priority
                                />
                            </div>

                            {/* Floating Badges */}
                            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 glass-panel rounded-xl shadow-xl p-2.5 sm:p-3 animate-float">
                                <div className="flex items-center gap-2">
                                    <Code className="w-4 h-4 text-[#696f64]" />
                                    <span className="text-xs sm:text-sm font-semibold text-white">Full-Stack</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 glass-panel rounded-xl shadow-xl p-2.5 sm:p-3 animate-float-delayed">
                                <div className="flex items-center gap-2">
                                    <Award className="w-4 h-4 text-[#696f64]" />
                                    <span className="text-xs sm:text-sm font-semibold text-white">94% SSC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce-slow opacity-60">
                    <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll to explore</span>
                    <ChevronDown className="w-4 h-4 text-[#696f64]" />
                </div>
            </div>

            <style jsx>{`
                .animate-blink {
                    animation: blink 0.9s step-end infinite;
                }
                .animate-float {
                    animation: float 5s ease-in-out infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 5s ease-in-out infinite;
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0px) translateX(-50%); }
                    50% { transform: translateY(10px) translateX(-50%); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 2.5s ease-in-out infinite;
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.03); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}