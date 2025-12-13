'use client'

import { useState } from 'react'
import {
    Github,
    Linkedin,
    Twitter,
    Instagram,
    Mail,
    ArrowUpRight,
    Heart,
    Coffee,
    Copyright
} from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:hello@example.com', label: 'Email' },
]

const footerLinks = {
    Product: [
        { name: 'Projects', href: '#projects' },
        { name: 'Services', href: '#services' },
        { name: 'Pricing', href: '#pricing' },
    ],
    Company: [
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ],
    Resources: [
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'Tools', href: '#' },
    ],
    Legal: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Cookies', href: '#' },
    ],
}

export default function Footer() {
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            setIsSubscribed(true)
            setTimeout(() => {
                setEmail('')
                setIsSubscribed(false)
            }, 3000)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-gradient-to-b from-dark-surface to-black border-t border-white/10">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-noise opacity-5"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="container mx-auto px-6 py-16">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-4">
                            <div className="mb-8">
                                <Link href="/" className="inline-flex items-center gap-3 group">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-white font-bold text-xl">Y</span>
                                        </div>
                                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                                    </div>
                                    <div>
                                        <span className="text-2xl font-bold text-white">[Your Name]</span>
                                        <div className="text-sm text-primary-400">Creative Developer</div>
                                    </div>
                                </Link>
                            </div>

                            <p className="text-gray-400 mb-8 max-w-md">
                                Building the future of digital experiences with modern technologies
                                and innovative design thinking.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-3 mb-8">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:scale-110"
                                        aria-label={social.label}
                                    >
                                        <div className="text-gray-400 group-hover:text-white transition-colors">
                                            {social.icon}
                                        </div>
                                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    </a>
                                ))}
                            </div>

                            {/* Newsletter */}
                            <div>
                                <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
                                <form onSubmit={handleSubscribe} className="flex gap-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email"
                                        className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
                                    >
                                        {isSubscribed ? 'Subscribed!' : 'Join'}
                                    </button>
                                </form>
                                {isSubscribed && (
                                    <p className="mt-2 text-sm text-green-400 animate-pulse">
                                        Thanks for subscribing!
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category}>
                                    <h4 className="text-white font-semibold mb-6 text-lg">{category}</h4>
                                    <ul className="space-y-4">
                                        {links.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                                >
                                                    <span>{link.name}</span>
                                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Copyright className="w-4 h-4" />
                            <span>{new Date().getFullYear()} [Your Name]. All rights reserved.</span>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-gray-400">
                                <span>Made with</span>
                                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                                <span>&</span>
                                <Coffee className="w-4 h-4 text-amber-500" />
                                <span>by [Your Name]</span>
                            </div>

                            <button
                                onClick={scrollToTop}
                                className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all duration-300 hover:scale-110"
                                aria-label="Back to top"
                            >
                                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Gradient Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-500/10 to-transparent pointer-events-none"></div>
            </div>
        </footer>
    )
}