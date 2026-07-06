'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { personalInfo } from '@/constants/content'

export default function ContactSection() {
    return (
        <section id="contact" className="bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-6 h-px bg-[#696f64]"></div>
                        <span className="text-sm font-semibold text-[#696f64] uppercase tracking-widest">
                            Contact
                        </span>
                        <div className="w-6 h-px bg-[#696f64]"></div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Let's Connect
                    </h2>

                    <p className="text-gray-400 max-w-xl mx-auto text-base">
                        I’m open to collaboration, new opportunities, or just a friendly chat. Feel free to reach out!
                    </p>
                </div>

                {/* Contact Info Grid */}
                <div className="px-2 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                    {/* Email Card */}
                    <div className="flex flex-col items-center glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#696f64]/40 transition duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[#696f64]">
                            <Mail className="w-5 h-5" />
                        </div>
                        <p className="text-white font-bold">Email</p>
                        <a 
                            href={`mailto:${personalInfo.email}`} 
                            className="text-gray-400 hover:text-white text-sm mt-1.5 transition break-all px-2"
                        >
                            {personalInfo.email}
                        </a>
                    </div>

                    {/* Phone Card */}
                    <div className="flex flex-col items-center glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#696f64]/40 transition duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[#696f64]">
                            <Phone className="w-5 h-5" />
                        </div>
                        <p className="text-white font-bold">Phone</p>
                        <a 
                            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                            className="text-gray-400 hover:text-white text-sm mt-1.5 transition"
                        >
                            {personalInfo.phone}
                        </a>
                    </div>

                    {/* Location Card */}
                    <div className="flex flex-col items-center glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#696f64]/40 transition duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[#696f64]">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <p className="text-white font-bold">Location</p>
                        <p className="text-gray-400 text-sm mt-1.5">{personalInfo.location}</p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                    {personalInfo.socials.map((social, idx) => {
                        const SocialIcon = social.icon
                        return (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#696f64] hover:text-white hover:border-[#696f64] hover:-translate-y-1 transition-all duration-300 shadow-md"
                                aria-label={social.label}
                            >
                                <SocialIcon className="w-5 h-5" />
                            </a>
                        )
                    })}
                </div>

                {/* Footer Note */}
                <p className="text-gray-500 text-sm mt-16 tracking-wider">
                    &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>
            </div>
        </section>
    )
}
