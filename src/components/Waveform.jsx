import React, { useEffect, useRef } from 'react'

const Waveform = () => {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const tRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let dpr = Math.max(1, window.devicePixelRatio || 1)

    const resize = () => {
      const { width } = canvas.getBoundingClientRect()
      const height = 80
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.height = height + 'px'
      draw()
    }

    const draw = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      // background subtle
      ctx.fillStyle = '#ffffff'
      ctx.fillRect(0, 0, w, h)

      // baseline
      ctx.strokeStyle = 'rgba(0,0,0,0.06)'
      ctx.lineWidth = 1 * dpr
      ctx.beginPath()
      ctx.moveTo(0, h / 2)
      ctx.lineTo(w, h / 2)
      ctx.stroke()

      // animated waves
      const t = tRef.current
      const bars = 120
      for (let i = 0; i < bars; i++) {
        const x = (i / (bars - 1)) * w
        const base = Math.sin((i * 0.25 + t) * 0.6) * 0.5 + 0.5
        const env = Math.sin((i / bars) * Math.PI)
        const amp = 28 * dpr * env
        const y = h / 2
        const half = base * amp

        // black stem
        ctx.strokeStyle = '#000'
        ctx.lineWidth = 2 * dpr
        ctx.beginPath()
        ctx.moveTo(x, y - half)
        ctx.lineTo(x, y + half)
        ctx.stroke()

        // yellow cap
        ctx.strokeStyle = '#FFF200'
        ctx.lineWidth = 4 * dpr
        ctx.beginPath()
        ctx.moveTo(x, y - half)
        ctx.lineTo(x, y - half + 6 * dpr)
        ctx.stroke()
      }

      tRef.current += 0.06
      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="w-full rounded-xl border border-black/10 overflow-hidden">
      <canvas ref={canvasRef} className="w-full block" />
    </div>
  )
}

export default Waveform
