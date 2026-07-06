'use client'

import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { experiences, certifications } from '@/constants/content'

export default function ExperienceSection() {
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        setAnimated(true)
    }, [])

    return (
        <section id="experience" className="bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4 shadow-md backdrop-blur-md">
                        <Briefcase className="w-4 h-4 text-[#696f64]" />
                        <span className="text-sm font-medium text-gray-300">
                            Experience & Education
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        My Journey So Far
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base">
                        2+ years of hands-on development experience across the full stack
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Work Experience Column */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2.5">
                            <TrendingUp className="w-5 h-5 text-[#696f64]" />
                            Work Experience
                        </h3>
                        <div className="space-y-6">
                            {experiences.map((exp, idx) => (
                                <div
                                    key={idx}
                                    className={`glass-panel rounded-2xl p-6 hover:border-[#696f64]/40 transition-all duration-500 hover:shadow-2xl ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                                        <div>
                                            <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                                            <p className="text-[#696f64] text-sm font-semibold">{exp.type}</p>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
                                        <MapPin className="w-3.5 h-3.5 text-gray-500" />
                                        <span>{exp.location}</span>
                                    </div>
                                    <ul className="space-y-2 mb-5">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                                                <span className="text-[#696f64] mt-1.5">•</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Certifications Column */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2.5">
                            <Award className="w-5 h-5 text-[#696f64]" />
                            Education & Certifications
                        </h3>
                        <div className="space-y-6">
                            {/* Education 1 */}
                            <div className="glass-panel rounded-2xl p-6 hover:border-[#696f64]/30 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-2">FSc Computer Science</h4>
                                <p className="text-[#696f64] text-sm font-semibold mb-1">Army Public School and College System</p>
                                <p className="text-xs text-gray-400 mb-3">2025 - Present | Targeting 90%+ marks</p>
                                <p className="text-sm text-gray-300">Focus: Data structures, algorithms, CS fundamentals</p>
                            </div>

                            {/* Education 2 */}
                            <div className="glass-panel rounded-2xl p-6 hover:border-[#696f64]/30 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-2">Matriculation (SSC I & II)</h4>
                                <p className="text-[#696f64] text-sm font-semibold mb-1">Army Public School and College System</p>
                                <p className="text-xs text-gray-400 mb-3">Completed 2025 | 94% — SSC II, 89% — SSC I</p>
                                <p className="text-sm text-gray-300">Coursework: programming, software applications, computer fundamentals</p>
                            </div>

                            {/* Certifications */}
                            <div className="glass-panel rounded-2xl p-6 hover:border-[#696f64]/30 transition-all duration-300">
                                <h4 className="text-lg font-bold text-white mb-3">Certifications</h4>
                                <div className="space-y-3.5">
                                    {certifications.map((cert, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2.5 last:border-0 last:pb-0">
                                            <div>
                                                <p className="font-semibold text-white text-sm">{cert.name}</p>
                                                <p className="text-xs text-gray-400">{cert.issuer}</p>
                                            </div>
                                            <span className="text-xs text-gray-400">{cert.period}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Academic Achievement */}
                            <div className="bg-[#696f64]/10 rounded-2xl border border-[#696f64]/30 p-6 text-center backdrop-blur-sm shadow-md">
                                <div className="text-4xl font-extrabold text-white mb-2">94%</div>
                                <p className="text-sm font-semibold text-gray-200">SSC Distinction in Computer Science</p>
                                <p className="text-xs text-gray-400 mt-1">Academic Excellence Award</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quote or Motto */}
                <div className={`mt-14 text-center transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <blockquote className="text-gray-400 italic text-sm tracking-wide">
                        "Building scalable solutions, one line of code at a time."
                    </blockquote>
                </div>
            </div>
        </section>
    )
}