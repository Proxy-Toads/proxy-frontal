"use client"

import { useEffect, useRef } from "react"

export function InteractiveGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const gridSize = 50
    const glowRadius = 150

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const scrollY = window.scrollY
      const offsetY = scrollY % gridSize

      const cols = Math.ceil(canvas.width / gridSize) + 1
      const rows = Math.ceil(canvas.height / gridSize) + 2

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize
          const y = j * gridSize - offsetY

          const dx = x - mouseRef.current.x
          const dy = y - mouseRef.current.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          const intensity = Math.max(0, 1 - distance / glowRadius)
          
          // Base grid color (very subtle)
          const baseAlpha = 0.03
          // Glow color (mustard/primary color) - more subtle
          const glowAlpha = intensity * 0.25

          // Draw vertical line
          ctx.beginPath()
          ctx.moveTo(x, y)
          ctx.lineTo(x, y + gridSize)
          ctx.strokeStyle = `rgba(202, 178, 64, ${baseAlpha + glowAlpha})`
          ctx.lineWidth = 0.5
          ctx.stroke()

          // Draw horizontal line
          ctx.beginPath()
          ctx.moveTo(i * gridSize, y)
          ctx.lineTo((i + 1) * gridSize, y)
          ctx.strokeStyle = `rgba(202, 178, 64, ${baseAlpha + glowAlpha})`
          ctx.lineWidth = 0.5
          ctx.stroke()

          // Draw subtle glow dot at intersection
          if (intensity > 0.2) {
            ctx.beginPath()
            ctx.arc(x, y, 1.5 * intensity, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(202, 178, 64, ${intensity * 0.4})`
            ctx.fill()
          }
        }
      }

      requestAnimationFrame(draw)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animationId = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
    />
  )
}
