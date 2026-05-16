// components/Navbar.tsx (Fixed for better scrolling)
'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Home, User, Folder, Mail, Briefcase, Code, ArrowRight, Sparkles } from 'lucide-react'

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
            <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-6xl py-2.5 px-4 md:px-6 bg-white/90 backdrop-blur-lg border border-gray-200 rounded-full shadow-sm transition-all duration-300 ${scrolled ? 'top-2 shadow-md' : 'top-4'}`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleClick('#home')}>
                        <h1 className="text-xl sm:text-2xl font-bold text-[#696f64] tracking-tight">
                            Azhan.
                        </h1>
                        <Sparkles className="w-3.5 h-3.5 text-gray-400" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = active === item.href.replace('#', '')
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => handleClick(item.href)}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all
                                        ${isActive
                                            ? 'bg-[#696f64] text-white shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
                        className="md:hidden p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition"
                    >
                        {isOpen ? <X className="w-5 h-5 text-gray-900" /> : <Menu className="w-5 h-5 text-gray-900" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute top-0 right-0 h-full w-80 bg-white border-l border-gray-200 shadow-xl p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="font-bold text-gray-900">Azhan Baig</h2>
                            <p className="text-xs text-gray-500">Full-Stack Developer</p>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                            <X className="w-5 h-5 text-gray-900" />
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
                                        ${isActive ? 'bg-[#696f64] text-white' : 'text-gray-700 hover:bg-gray-100'}
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