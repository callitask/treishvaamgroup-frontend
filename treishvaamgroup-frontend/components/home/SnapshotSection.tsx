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
    <section ref={ref} className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {hasStarted ? (
                  <>
                    <CountUp end={stat.value} duration={2.5} />
                    {stat.label === 'Client Satisfaction' && '%'}
                  </>
                ) : (
                  '0'
                )}
              </div>
              <p className="text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
