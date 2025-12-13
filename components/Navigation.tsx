'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Home, User, Code, Folder, Mail, ArrowRight, Sparkles } from 'lucide-react'

const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Folder },
    { name: 'Contact', href: '#contact', icon: Mail },
]

export default function DarkModernNav() {
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
                    if (rect.top <= 120 && rect.bottom >= 120) setActive(section)
                }
            })
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = (href: string, index: number) => {
        setIsOpen(false)
        document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
        setActive(href.replace('#', ''))
    }

    return (
        <>
            {/* NAVBAR */}
            <nav
                className="relative top-6 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-6xl py-3 px-4 md:px-8 bg-[#10120F]/90 backdrop-blur-lg border border-[#C2CABB]/20 rounded-xl shadow-md transition-all duration-300"
            >
                <div className="flex items-center justify-between">
                    {/* LOGO */}
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => handleClick('#home', 0)}
                    >
                        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#C2CABB] tracking-tight">
                            Portfolio.
                        </h1>
                        <Sparkles className="w-3 h-3 text-[#C2CABB]/60" />
                        <p className="text-xs text-[#C2CABB]/70">Developer</p>
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-4">
                        {navItems.map((item, index) => {
                            const isActive = active === item.href.replace('#', '')
                            return (
                                <button
                                    key={item.name}
                                    ref={el => (linkRefs.current[index] = el)}
                                    onClick={() => handleClick(item.href, index)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 ${isActive
                                        ? 'bg-[#C2CABB]/20 text-[#C2CABB]'
                                        : 'text-[#C2CABB]/70 hover:text-[#C2CABB] hover:bg-[#C2CABB]/10'
                                        }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span className="text-sm font-medium">{item.name}</span>
                                </button>
                            )
                        })}
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-3 rounded-lg bg-[#10120F]/80 border border-[#C2CABB]/30 hover:bg-[#10120F]/90 transition-all duration-300"
                    >
                        {isOpen ? <X className="w-6 h-6 text-[#C2CABB]" /> : <Menu className="w-6 h-6 text-[#C2CABB]" />}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <div className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute top-0 right-0 h-full w-80 bg-[#10120F] border-l border-[#C2CABB]/20 shadow-lg p-6 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="font-bold text-[#C2CABB]">AZHAN BAIG</h2>
                            <p className="text-xs text-[#C2CABB]/70">Frontend Developer</p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-10 h-10 rounded-lg bg-[#10120F]/80 flex items-center justify-center border border-[#C2CABB]/30 hover:bg-[#10120F]/90"
                        >
                            <X className="w-5 h-5 text-[#C2CABB]" />
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
                                    onClick={() => handleClick(item.href, 0)}
                                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-300 ${isActive ? 'bg-[#C2CABB]/20 text-[#C2CABB]' : 'hover:bg-[#C2CABB]/10 text-[#C2CABB]/70'}`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{item.name}</span>
                                    {isActive && <ArrowRight className="ml-auto w-5 h-5 text-[#C2CABB]/70" />}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
