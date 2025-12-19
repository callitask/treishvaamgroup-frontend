'use client'

import Link from 'next/link'
import { FiArrowRight, FiZap, FiTrendingUp, FiHome, FiServer, FiGlobe, FiArrowUpRight } from 'react-icons/fi'

export default function SectorsSection() {
  const sectors = [
    {
      name: 'Energy',
      icon: FiZap,
      description: 'Renewable and conventional energy solutions powering global growth.',
      color: 'from-orange-500 to-red-600',
    },
    {
      name: 'Finance',
      icon: FiTrendingUp,
      description: 'Comprehensive financial services and investment solutions.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      name: 'Infrastructure',
      icon: FiHome,
      description: 'Building the backbone of modern economies.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      name: 'Technology',
      icon: FiServer,
      description: 'Digital transformation and IT solutions.',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      name: 'Real Estate',
      icon: FiGlobe,
      description: 'Premium commercial and residential developments.',
      color: 'from-amber-500 to-orange-600',
    },
    {
      name: 'Innovation',
      icon: FiArrowUpRight,
      description: 'Cutting-edge research and development initiatives.',
      color: 'from-pink-500 to-rose-600',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-corporate-900 mb-4">
            Our Sectors
          </h2>
          <p className="text-lg text-slate-600 font-light">
            Diverse portfolio of businesses delivering value across key industries.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, idx) => {
            const Icon = sector.icon
            return (
              <Link key={idx} href={`/businesses/${sector.name.toLowerCase()}`}>
                <div className="group h-full bg-white border border-slate-200 rounded-xl hover:border-heritage-300 p-8 transition-all duration-300 hover:shadow-lg cursor-pointer">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${sector.color} text-white mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-corporate-900 mb-3 font-serif group-hover:text-heritage-600 transition-colors">
                    {sector.name}
                  </h3>
                  <p className="text-slate-600 font-light mb-6 leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-heritage-600 font-medium group-hover:gap-3 transition-all">
                    Learn More
                    <FiArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/businesses"
            className="inline-flex items-center gap-2 px-8 py-3 bg-corporate-800 hover:bg-corporate-900 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg group"
          >
            View All Businesses
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
