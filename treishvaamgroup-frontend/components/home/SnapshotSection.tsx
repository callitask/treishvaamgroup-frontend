'use client'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export default function SnapshotSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true)
    }
  }, [inView, hasStarted])

  const stats = [
    { label: 'Years of Excellence', value: 25 },
    { label: 'Global Offices', value: 45 },
    { label: 'Employees Worldwide', value: 5000 },
    { label: 'Client Satisfaction', value: 99 },
  ]

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gradient-to-b from-neutral-light to-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Global Impact
          </h2>
          <p className="text-lg text-slate-600">
            Measured excellence across our organization, driving measurable results for clients and stakeholders worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-accent-300 transition-all duration-300 hover:shadow-lg hover:shadow-accent-100">
                <div className="flex flex-col items-center text-center">
                  <div className="text-5xl md:text-6xl font-bold text-accent-600 mb-3">
                    {hasStarted ? (
                      <>
                        <CountUp end={stat.value} duration={2.5} />
                        {stat.label === 'Client Satisfaction' && '%'}
                      </>
                    ) : (
                      '0'
                    )}
                  </div>
                  <p className="text-slate-600 font-medium text-base">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Mission-Driven</h3>
              <p className="text-slate-600 text-sm">Dedicated to sustainable growth and positive impact across all business operations.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Global Reach</h3>
              <p className="text-slate-600 text-sm">Operating across multiple continents with local expertise and international standards.</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Excellence</h3>
              <p className="text-slate-600 text-sm">Committed to delivering exceptional quality and innovation in everything we do.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
