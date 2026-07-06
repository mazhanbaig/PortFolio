// components/Navigation.tsx
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Home, User, Folder, Mail, Briefcase, Code, ArrowRight, Sparkles } from 'lucide-react'
import { personalInfo } from '@/constants/content'

const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Folder },
    { name: 'Contact', href: '#contact', icon: Mail },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            for (let item of navItems) {
                const section = item.href.replace('#', '')
                const el = document.getElementById(section)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActive(section)
                        break
                    }
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = (href: string) => {
        setIsOpen(false)
        const section = href.replace('#', '')
        const element = document.getElementById(section)
        if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
        setActive(section)
    }

    return (
        <>
            <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-6xl py-2.5 px-4 md:px-6 bg-[#0f0f12]/60 backdrop-blur-md border border-white/10 rounded-full shadow-lg transition-all duration-300 ${scrolled ? 'top-2 shadow-xl bg-[#0f0f12]/85' : 'top-4'}`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleClick('#home')}>
                        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                            Azhan<span className="text-[#696f64]">.</span>
                        </h1>
                        <Sparkles className="w-3.5 h-3.5 text-gray-500 animate-pulse" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = active === item.href.replace('#', '')
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => handleClick(item.href)}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-250
                                        ${isActive
                                            ? 'bg-[#696f64] text-white shadow-md'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <item.icon className="w-3.5 h-3.5" />
                                    {item.name}
                                </button>
                            )
                        })}
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-full border border-white/10 bg-[#16161a] hover:bg-white/5 transition"
                    >
                        {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-45 md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Backdrop overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>

                <div className="absolute top-0 right-0 h-full w-80 bg-[#0f0f12] border-l border-white/10 shadow-2xl p-6 flex flex-col z-50">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="font-bold text-white text-lg">{personalInfo.name}</h2>
                            <p className="text-xs text-gray-400">{personalInfo.title}</p>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-white">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">
                        {navItems.map(item => {
                            const isActive = active === item.href.replace('#', '')
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => handleClick(item.href)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all
                                        ${isActive ? 'bg-[#696f64] text-white shadow-md' : 'text-gray-300 hover:bg-white/5'}
                                    `}
                                >
                                    <item.icon className="w-4 h-4" />
                                    <span className="text-sm font-medium">{item.name}</span>
                                    {isActive && <ArrowRight className="ml-auto w-4 h-4 opacity-70" />}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}