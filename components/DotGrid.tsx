'use client'

import { useEffect, useRef } from 'react'

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const mouse = { x: -1000, y: -1000 }
    const dotSpacing = 35
    const dotRadius = 1
    const activeRadius = 100

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height)

      const cols = Math.floor(width / dotSpacing) + 1
      const rows = Math.floor(height / dotSpacing) + 1

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originalX = i * dotSpacing
          const originalY = j * dotSpacing

          const dx = mouse.x - originalX
          const dy = mouse.y - originalY
          const dist = Math.sqrt(dx * dx + dy * dy)

          let drawX = originalX
          let drawY = originalY
          let currentRadius = dotRadius
          let opacity = 0.08

          if (dist < activeRadius) {
            const factor = (activeRadius - dist) / activeRadius
            
            // Subtle pull/push effect
            drawX -= dx * factor * 0.12
            drawY -= dy * factor * 0.12
            
            // Dynamic dot size increase
            currentRadius = dotRadius + factor * 1.5
            
            // Dynamic opacity increase
            opacity = 0.08 + factor * 0.15
          }

          ctx.beginPath()
          ctx.arc(drawX, drawY, currentRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(105, 111, 100, ${opacity})`
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 w-full h-full pointer-events-none"
    />
  )
}
