'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Home, User, Code, Folder, Mail, ArrowRight, Sparkles } from 'lucide-react'

const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    // { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Folder },
    { name: 'Contact', href: '#contact', icon: Mail },
]

export default function LightModernNav() {
    const [isOpen, setIsOpen] = useState(false)
    const [active, setActive] = useState('home')
    const linkRefs = useRef<(HTMLButtonElement | null)[]>([])

    useEffect(() => {
        const handleScroll = () => {
            navItems.forEach(item => {
                const section = item.href.replace('#', '')
                const el = document.getElementById(section)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 120 && rect.bottom >= 120) {
                        setActive(section)
                    }
                }
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = (href: string) => {
        setIsOpen(false)
        document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
        setActive(href.replace('#', ''))
    }

    return (
        <>
            {/* NAVBAR */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-11/12 max-w-6xl py-3 px-4 md:px-8 bg-white/90 backdrop-blur-lg border border-gray-200 rounded-xl shadow-md transition-all">
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => handleClick('#home')}
                    >
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#696f64] tracking-tight">
                            Portfolio.
                        </h1>
                        <Sparkles className="w-4 h-4 text-gray-400" />
                        <p className="text-xs text-gray-500">Developer</p>
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item, index) => {
                            const isActive = active === item.href.replace('#', '')
                            return (
                                <button
                                    key={item.name}
                                    ref={el => (linkRefs.current[index] = el)}
                                    onClick={() => handleClick(item.href)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
                                        ${isActive
                                        ? 'bg-[#696f64] text-white shadow-sm'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                        }`}
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.name}
                                </button>
                            )
                        })}
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 transition"
                    >
                        {isOpen
                            ? <X className="w-6 h-6 text-gray-900" />
                            : <Menu className="w-6 h-6 text-gray-900" />
                        }
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <div className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute top-0 right-0 h-full w-80 bg-white border-l border-gray-200 shadow-xl p-6 flex flex-col">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="font-bold text-gray-900">AZHAN BAIG</h2>
                            <p className="text-xs text-gray-500">Frontend Developer</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                            <X className="w-5 h-5 text-gray-900" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col gap-3">
                        {navItems.map(item => {
                            const Icon = item.icon
                            const isActive = active === item.href.replace('#', '')
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => handleClick(item.href)}
                                    className={`flex items-center gap-4 p-4 rounded-lg text-left transition-all
                                        ${isActive
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{item.name}</span>
                                    {isActive && <ArrowRight className="ml-auto w-5 h-5 opacity-70" />}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
