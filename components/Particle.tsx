'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
  alphaSpeed: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles: Particle[] = []
    const particleCount = 25

    const createParticle = (initRandomY = false): Particle => {
      return {
        x: Math.random() * width,
        y: initRandomY ? Math.random() * height : height + 10,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -0.1 - Math.random() * 0.2, // Floats upward
        radius: 1 + Math.random() * 1.5,
        alpha: 0.1 + Math.random() * 0.25,
        alphaSpeed: 0.002 + Math.random() * 0.003
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true))
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p, idx) => {
        // Update physics
        p.x += p.vx
        p.y += p.vy
        p.alpha += p.alphaSpeed

        // Fade in and out oscillation
        if (p.alpha > 0.4 || p.alpha < 0.05) {
          p.alphaSpeed = -p.alphaSpeed
        }
        p.alpha = Math.max(0.01, Math.min(0.4, p.alpha))

        // Reset if off screen
        if (p.y < -10 || p.x < -10 || p.x > width + 10) {
          particles[idx] = createParticle(false)
        }

        // Draw
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(105, 111, 100, ${p.alpha})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    drawParticles()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
    />
  )
}
