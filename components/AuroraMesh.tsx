'use client'

import { motion } from 'framer-motion'

export default function AuroraMesh() {
  return (
    <div className="absolute inset-0 -z-30 overflow-hidden bg-[#070708] pointer-events-none">
      {/* Glow blob 1 */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#696f64]/8 blur-[120px]"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glow blob 2 */}
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#696f64]/5 blur-[150px]"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 80, -60, 0],
          scale: [1, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glow blob 3 */}
      <motion.div
        className="absolute top-[30%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-emerald-950/10 blur-[100px]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, 90, -40, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glow blob 4 */}
      <motion.div
        className="absolute bottom-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#1b1c1d]/50 blur-[130px]"
        animate={{
          x: [0, -40, 50, 0],
          y: [0, -70, 30, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
