import React from 'react'
import Spline from '@splinetool/react-spline'
import Waveform from './Waveform'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-24 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFF200]"></span>
            <span className="text-sm tracking-wide uppercase text-neutral-500">Vocal Studio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-black">
            AI Voice Agents That Replace 80% of Your Calls in 7 Days
          </h1>
          <p className="mt-5 text-neutral-600 max-w-xl">
            Ultra-minimal design. Enterprise-grade performance. Launch your on-brand AI agent faster than building a slide deck.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href="#book" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#FFF200] text-black font-medium border border-black/10 shadow-sm hover:shadow transition">
              Book a Demo
            </a>
            <a href="#call" className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-black text-black font-medium hover:bg-black hover:text-white transition">
              Call Our AI Agent Live
            </a>
          </div>
          <div className="mt-8">
            <Waveform />
          </div>
        </div>
        <div className="flex-1 w-full h-[360px] sm:h-[420px] lg:h-[520px] rounded-3xl border border-black/10 overflow-hidden bg-white">
          <Spline scene="https://prod.spline.design/utrirTwDrFc8TLoE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,#FFF20033,transparent_40%),radial-gradient(circle_at_100%_20%,#0000000d,transparent_40%)]" />
    </section>
  )
}

export default Hero
