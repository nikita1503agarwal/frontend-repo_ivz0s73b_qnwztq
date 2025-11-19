import React from 'react'
import { PhoneCall, MessageSquare, Workflow } from 'lucide-react'

const items = [
  {
    title: 'AI Phone Agents',
    desc: 'Natural, on-brand, and compliant voice agents that handle inbound/outbound calls end-to-end.',
    icon: PhoneCall,
  },
  {
    title: 'AI WhatsApp/SMS Agents',
    desc: 'Two-way conversational automation across WhatsApp and SMS with human handoff.',
    icon: MessageSquare,
  },
  {
    title: 'Full Automation Systems',
    desc: 'We connect CRMs, calendars, and payment flows to ship fully automated customer journeys.',
    icon: Workflow,
  },
]

const WhatWeBuild = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black">What We Build</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="group rounded-3xl border border-black/10 p-6 bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition">
                <div className="w-12 h-12 rounded-xl border border-black/10 flex items-center justify-center mb-4 bg-white">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                <p className="mt-2 text-neutral-600">{item.desc}</p>
                <div className="mt-6">
                  <a href="#example" className="inline-flex items-center gap-2 text-sm font-medium text-black hover:opacity-70">
                    <span>See Example</span>
                    <span className="inline-block w-1.5 h-1.5 bg-[#FFF200] rounded-full"></span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuild
