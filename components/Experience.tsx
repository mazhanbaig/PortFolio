// components/Experience.tsx
'use client'

import { Briefcase, Calendar, MapPin, Award, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ExperienceSection() {
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        setAnimated(true)
    }, [])

    const experiences = [
        {
            title: "Full-Stack Developer",
            type: "Personal Projects & Practice",
            period: "July 2025 - Present",
            location: "Karachi, Pakistan",
            achievements: [
                "Built 5+ full-stack web and mobile applications independently",
                "Developed responsive interfaces using React.js, Next.js, and React Native",
                "Implemented secure REST APIs with JWT authentication and RBAC",
                "Integrated MongoDB and Firebase Firestore with optimized schemas"
            ],
            technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Firebase"]
        },
        {
            title: "Hackathon Participant",
            type: "Competitive Development",
            period: "2024 - Present",
            location: "Karachi, Pakistan",
            achievements: [
                "Built projects under time-constrained environments",
                "Collaborated with teams to deliver functional prototypes",
                "Experience in rapid development and pressure testing"
            ],
            technologies: ["Rapid Prototyping", "Team Collaboration", "Agile"]
        }
    ]

    const certifications = [
        {
            name: "Full Stack Web Development",
            issuer: "SMIT (Saiyami Masa IT Training)",
            period: "Feb 2025 - Feb 2026"
        },
        {
            name: "Mobile App Development",
            issuer: "SMIT (Saiyami Mass IT Training)",
            period: "Feb 2025 - Feb 2026"
        },
        {
            name: "CISCO Certification",
            issuer: "CISCO Networking",
            period: "Feb 2025 - Feb 2026"
        }
    ]

    return (
        <section id="experience" className="bg-gray-50 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#696f64]/40 rounded-full mb-4">
                        <Briefcase className="w-4 h-4 text-[#696f64]" />
                        <span className="text-sm font-medium text-[#696f64]">
                            Experience & Education
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        My Journey So Far
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        2+ years of hands-on development experience across the full stack
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Work Experience Column */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-[#696f64]" />
                            Work Experience
                        </h3>
                        <div className="space-y-6">
                            {experiences.map((exp, idx) => (
                                <div
                                    key={idx}
                                    className={`bg-white rounded-xl border border-gray-200 p-6 transition-all duration-500 hover:shadow-md ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <div className="flex flex-wrap justify-between items-start mb-3">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900">{exp.title}</h4>
                                            <p className="text-[#696f64] text-sm font-medium">{exp.type}</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-gray-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                                        <MapPin className="w-4 h-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                    <ul className="space-y-2 mb-4">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                                                <span className="text-[#696f64] mt-1">•</span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
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
                        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                            <Award className="w-5 h-5 text-[#696f64]" />
                            Education & Certifications
                        </h3>
                        <div className="space-y-6">
                            {/* Education */}
                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">FSc Computer Science</h4>
                                <p className="text-[#696f64] text-sm font-medium mb-1">Army Public School and College System</p>
                                <p className="text-sm text-gray-500 mb-3">2025 - Present | Targeting 90%+ marks</p>
                                <p className="text-sm text-gray-600">Focus: Data structures, algorithms, CS fundamentals</p>
                            </div>

                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Matriculation (SSC I & II)</h4>
                                <p className="text-[#696f64] text-sm font-medium mb-1">Army Public School and College System</p>
                                <p className="text-sm text-gray-500 mb-3">Completed 2025 | 94% — SSC II, 89% — SSC I</p>
                                <p className="text-sm text-gray-600">Coursework: programming, software applications, computer fundamentals</p>
                            </div>

                            {/* Certifications */}
                            <div className="bg-white rounded-xl border border-gray-200 p-6">
                                <h4 className="text-lg font-bold text-gray-900 mb-3">Certifications</h4>
                                <div className="space-y-3">
                                    {certifications.map((cert, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0">
                                            <div>
                                                <p className="font-medium text-gray-900">{cert.name}</p>
                                                <p className="text-xs text-gray-500">{cert.issuer}</p>
                                            </div>
                                            <span className="text-xs text-gray-400">{cert.period}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Academic Achievement */}
                            <div className="bg-[#696f64]/5 rounded-xl border border-[#696f64]/20 p-6 text-center">
                                <div className="text-3xl font-bold text-[#696f64] mb-2">94%</div>
                                <p className="text-sm text-gray-700">SSC Distinction in Computer Science</p>
                                <p className="text-xs text-gray-500 mt-1">Academic Excellence Award</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quote or Motto */}
                <div className={`mt-12 text-center transition-all duration-700 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    <blockquote className="text-gray-500 italic text-sm">
                        "Building scalable solutions, one line of code at a time."
                    </blockquote>
                </div>
            </div>
        </section>
    )
}