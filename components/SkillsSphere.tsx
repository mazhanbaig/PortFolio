'use client'

import { useEffect, useRef } from 'react'

const skills = [
    'Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js',
    'Three.js', 'Framer', 'GraphQL', 'AWS', 'UI/UX',
    'Animation', 'WebGL', 'Python', 'PostgreSQL', 'Docker'
]

export default function SkillsSphere() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const container = containerRef.current
        const radius = 200
        const speed = 0.002
        let angle = 0

        const spheres = skills.map((skill, i) => {
            const sphere = document.createElement('div')
            sphere.className = 'absolute text-white/80 px-4 py-2 rounded-full bg-gradient-to-r from-primary-900/20 to-purple-900/20 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-primary-900/40 hover:text-white cursor-pointer'
            sphere.textContent = skill
            sphere.style.fontSize = `${Math.max(14, Math.random() * 8 + 14)}px`

            container.appendChild(sphere)
            return sphere
        })

        const updatePositions = () => {
            const time = Date.now() * speed

            spheres.forEach((sphere, i) => {
                const phi = Math.acos(-1 + (2 * i) / skills.length)
                const theta = Math.sqrt(skills.length * Math.PI) * phi + time

                const x = radius * Math.sin(phi) * Math.cos(theta)
                const y = radius * Math.sin(phi) * Math.sin(theta)
                const z = radius * Math.cos(phi)

                const scale = (z + radius) / (2 * radius) * 0.5 + 0.5
                const opacity = (z + radius) / (2 * radius) * 0.5 + 0.3

                sphere.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`
                sphere.style.opacity = `${opacity}`
            })

            angle += 0.001
            requestAnimationFrame(updatePositions)
        }

        updatePositions()

        return () => {
            spheres.forEach(sphere => sphere.remove())
        }
    }, [])

    return (
        <div className="relative w-full h-[500px] flex items-center justify-center">
            <div
                ref={containerRef}
                className="absolute w-full h-full perspective-1000"
                style={{ transformStyle: 'preserve-3d' }}
            />
            <div className="absolute w-64 h-64 bg-gradient-to-r from-primary-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>
    )
}