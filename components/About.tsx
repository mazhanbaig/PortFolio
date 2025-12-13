'use client'

import Image from 'next/image'
import { User, Sparkles, Target, Rocket, Brain, Lightbulb } from 'lucide-react'

export default function AboutSection() {
    return (
        <section id="about" className="relative w-full bg-black text-white py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="flex-1 space-y-8">
                    {/* Section Header */}
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-cyan-400">
                            <User className="w-5 h-5" />
                            <span className="uppercase text-sm font-semibold tracking-wider">About Me</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who I Am</h2>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            I'm Azhan, a passionate Full-Stack Developer creating modern, responsive, and
                            user-friendly web and app experiences using HTML, CSS, JavaScript, Tailwind CSS, React, Next.js, Node.js, and more.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800 hover:border-cyan-400 transition">
                            <div className="flex items-center gap-3 mb-2 text-cyan-400">
                                <Sparkles className="w-5 h-5" />
                                <h3 className="font-semibold text-white">My Journey</h3>
                            </div>
                            <p className="text-gray-300 text-sm">
                                I love transforming ideas into interactive digital experiences. My journey is driven by curiosity and a desire to learn.
                            </p>
                        </div>
                        <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800 hover:border-blue-400 transition">
                            <div className="flex items-center gap-3 mb-2 text-blue-400">
                                <Target className="w-5 h-5" />
                                <h3 className="font-semibold text-white">My Mission</h3>
                            </div>
                            <p className="text-gray-300 text-sm">
                                To build clean, functional websites that offer smooth user experiences with attention to detail and performance.
                            </p>
                        </div>
                        <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800 hover:border-purple-400 transition">
                            <div className="flex items-center gap-3 mb-2 text-purple-400">
                                <Brain className="w-5 h-5" />
                                <h3 className="font-semibold text-white">Beyond Code</h3>
                            </div>
                            <p className="text-gray-300 text-sm">
                                Outside of development, I enjoy exploring tech, playing chess, and learning about space and science.
                            </p>
                        </div>
                        <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800 hover:border-green-400 transition">
                            <div className="flex items-center gap-3 mb-2 text-green-400">
                                <Rocket className="w-5 h-5" />
                                <h3 className="font-semibold text-white">Future Goals</h3>
                            </div>
                            <p className="text-gray-300 text-sm">
                                Learning advanced frameworks like React, contributing to open-source, and building impactful projects.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="flex-1 flex justify-center lg:justify-end">
                    <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg">
                        <Image
                            src="/pics/aboutmelogo.jpg"
                            alt="Azhan Baig"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Optional Quick Facts */}
            <div className="mt-16 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-cyan-400 transition">
                    <div className="text-xl font-bold text-white">6+</div>
                    <div className="text-gray-400 text-sm">Projects</div>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-400 transition">
                    <div className="text-xl font-bold text-white">3+</div>
                    <div className="text-gray-400 text-sm">Years Learning</div>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-400 transition">
                    <div className="text-xl font-bold text-white">∞</div>
                    <div className="text-gray-400 text-sm">Passion</div>
                </div>
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-green-400 transition">
                    <div className="text-xl font-bold text-white">24/7</div>
                    <div className="text-gray-400 text-sm">Learning</div>
                </div>
            </div>
        </section>
    )
}
