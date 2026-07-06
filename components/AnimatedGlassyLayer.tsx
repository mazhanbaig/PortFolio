'use client'

import { motion } from 'framer-motion'

export default function AnimatedGlassyLayer() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Animated Glassy Orb 1 - Top Left - HIGHLY VISIBLE */}
            <motion.div
                className="absolute top-[5%] left-[5%] w-96 h-96 rounded-full"
                style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(105, 111, 100, 0.8), rgba(105, 111, 100, 0.3))',
                    backdropFilter: 'blur(60px)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 0 80px rgba(105, 111, 100, 0.6)',
                    filter: 'drop-shadow(0 0 40px rgba(105, 111, 100, 0.4))'
                }}
                animate={{
                    x: [0, 60, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />

            {/* Animated Glassy Orb 2 - Bottom Right - HIGHLY VISIBLE */}
            <motion.div
                className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full"
                style={{
                    background: 'radial-gradient(circle at 40% 40%, rgba(139, 149, 128, 0.7), rgba(139, 149, 128, 0.2))',
                    backdropFilter: 'blur(50px)',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 0 60px rgba(139, 149, 128, 0.5)',
                    filter: 'drop-shadow(0 0 30px rgba(139, 149, 128, 0.3))'
                }}
                animate={{
                    x: [0, -70, 0],
                    y: [0, 60, 0],
                    scale: [1, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1
                }}
            />

            {/* Animated Glassy Orb 3 - Center - HIGHLY VISIBLE */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{
                    background: 'radial-gradient(circle at 35% 35%, rgba(85, 91, 79, 0.6), rgba(85, 91, 79, 0.15))',
                    backdropFilter: 'blur(40px)',
                    border: '2px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 0 50px rgba(85, 91, 79, 0.4)',
                    filter: 'drop-shadow(0 0 25px rgba(85, 91, 79, 0.25))'
                }}
                animate={{
                    x: [0, 40, -20, 0],
                    y: [0, 30, -30, 0],
                    scale: [1, 1.1, 0.95, 1],
                }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5
                }}
            />

            {/* Floating Glassy Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-4 h-4 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(105, 111, 100, 0.8), rgba(105, 111, 100, 0.3))',
                        top: `${15 + i * 12}%`,
                        left: `${8 + i * 11}%`,
                        backdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        boxShadow: '0 0 15px rgba(105, 111, 100, 0.6)'
                    }}
                    animate={{
                        y: [0, -150, 0],
                        x: [0, 40, 0],
                        opacity: [0.2, 1, 0.2],
                        scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 6 + i * 0.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.3
                    }}
                />
            ))}
        </div>
    )
}
