'use client'

import Link from 'next/link'
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi'

export default function SustainabilitySection() {
  const pillars = [
    {
      title: 'Environmental',
      description: 'Net-zero emissions by 2050. Renewable energy investments exceeding $10 billion.',
    },
    {
      title: 'Social',
      description: 'Empowering 100,000+ lives through education and skill development programs.',
    },
    {
      title: 'Governance',
      description: 'Board diversity and transparent stakeholder engagement at all levels.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-corporate-50 to-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left: Content */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-full">
              <FiCheckCircle className="w-4 h-4 text-green-700" />
              <span className="text-xs font-semibold text-green-700 uppercase">Sustainability & ESG</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-corporate-900">
              Creating Shared Value
            </h2>

            <p className="text-lg text-slate-700 font-light leading-relaxed">
              We are committed to building a sustainable future. Our ESG strategy addresses critical global challenges while creating long-term value for all stakeholders.
            </p>

            {/* Pillars */}
            <div className="space-y-4">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-1 bg-gradient-to-b from-heritage-500 to-transparent rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-corporate-900 mb-2">{pillar.title}</h4>
                    <p className="text-slate-600 font-light">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/sustainability"
                className="inline-flex items-center gap-2 text-heritage-600 hover:text-heritage-700 font-semibold transition-colors group"
              >
                View ESG Report
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="w-full lg:w-1/3">
            <div className="grid grid-cols-3 gap-4">
              {/* ESG Score Cards */}
              <div className="bg-white rounded-lg border border-slate-200 p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-serif font-bold text-heritage-600 mb-2">A+</div>
                <div className="text-xs font-semibold text-slate-600 uppercase">ESG Rating</div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-serif font-bold text-green-600 mb-2">70%</div>
                <div className="text-xs font-semibold text-slate-600 uppercase">Women Leaders</div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-serif font-bold text-blue-600 mb-2">80%</div>
                <div className="text-xs font-semibold text-slate-600 uppercase">Renewable Energy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
