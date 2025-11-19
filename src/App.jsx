import React from 'react'
import Hero from './components/Hero'
import WhatWeBuild from './components/WhatWeBuild'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-black" />
            <span className="font-medium tracking-tight">Vocal Studio</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600">
            <a href="#build" className="hover:text-black">What We Build</a>
            <a href="#book" className="hover:text-black">Book</a>
            <a href="#call" className="hover:text-black">Live Call</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="build">
          <WhatWeBuild />
        </div>

        <section id="book" className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl border border-black/10 p-8 bg-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold">Ready to see it in action?</h3>
                <p className="text-neutral-600">We’ll tailor a live demo to your use case and KPIs.</p>
              </div>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#FFF200] text-black font-medium border border-black/10 shadow-sm hover:shadow transition">
                Book a Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-neutral-600">
          <span>© {new Date().getFullYear()} Vocal Studio</span>
          <a href="#" className="hover:text-black">Privacy</a>
        </div>
      </footer>
    </div>
  )
}

export default App
