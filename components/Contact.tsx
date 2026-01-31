'use client'

import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react'

export default function ContactSection() {
    const socialLinks = [
        { icon: Github, href: "https://github.com/mazhanbaig", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-azhan-baig-a3b46a288", label: "LinkedIn" },
        { icon: Instagram, href: "https://instagram.com", label: "Instagram" }
    ]

    return (
        <section id="contact" className="bg-white py-10 md:py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-6 h-px bg-[#696f64]"></div>
                        <span className="text-sm font-medium text-[#696f64] uppercase tracking-wider">
                            Contact
                        </span>
                        <div className="w-6 h-px bg-[#696f64]"></div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Let's Connect
                    </h2>

                    <p className="text-gray-600 max-w-xl mx-auto">
                        I’m open to collaboration, new opportunities, or just a friendly chat. Feel free to reach out!
                    </p>
                </div>

                {/* Contact Info */}
                <div className="px-2 grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                            <Mail className="w-5 h-5 text-[#696f64]" />
                        </div>
                        <p className="text-gray-900 font-medium">Email</p>
                        <p className="text-gray-600 text-sm mt-1">mazhanbaig44@gmail.com</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                            <Phone className="w-5 h-5 text-[#696f64]" />
                        </div>
                        <p className="text-gray-900 font-medium">Phone</p>
                        <p className="text-gray-600 text-sm mt-1">+92 322 6045971</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                            <MapPin className="w-5 h-5 text-[#696f64]" />
                        </div>
                        <p className="text-gray-900 font-medium">Location</p>
                        <p className="text-gray-600 text-sm mt-1">Karachi, Pakistan</p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6">
                    {socialLinks.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#696f64] hover:text-white hover:border-[#696f64] transition-all"
                            aria-label={social.label}
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                {/* Footer Note */}
                <p className="text-gray-500 text-sm mt-12">
                    &copy; {new Date().getFullYear()} Muhammad Azhan Baig. All rights reserved.
                </p>
            </div>
        </section>
    )
}
