'use client'

import Link from 'next/link'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'

export default function NewsSection() {
  const news = [
    {
      date: 'December 15, 2024',
      title: 'Treishvaam Announces $2B Green Energy Investment',
      excerpt: 'Expanding renewable energy portfolio across Southeast Asia with major solar farm projects.',
      category: 'Energy',
      href: '/newsroom/article-1',
    },
    {
      date: 'December 10, 2024',
      title: 'Q3 Financial Results Exceed Expectations',
      excerpt: 'Revenue growth of 18% YoY, driven by strong performance across all sectors.',
      category: 'Finance',
      href: '/newsroom/article-2',
    },
    {
      date: 'December 5, 2024',
      title: 'Strategic Partnership with Global Tech Leader',
      excerpt: 'Collaboration to accelerate digital transformation initiatives across the group.',
      category: 'Technology',
      href: '/newsroom/article-3',
    },
    {
      date: 'November 30, 2024',
      title: 'Sustainability Awards Recognition',
      excerpt: 'Recognized as industry leader for ESG initiatives and environmental stewardship.',
      category: 'Sustainability',
      href: '/newsroom/article-4',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div className="flex-1">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-corporate-900 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-lg text-slate-600 font-light">
              Stay informed about our latest initiatives, achievements, and market announcements.
            </p>
          </div>
          <Link
            href="/newsroom"
            className="hidden md:inline-flex items-center gap-2 text-heritage-600 hover:text-heritage-700 font-semibold transition-colors group whitespace-nowrap ml-8"
          >
            View All
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((article, idx) => (
            <Link key={idx} href={article.href}>
              <div className="group h-full bg-slate-50 border border-slate-200 rounded-xl hover:border-heritage-300 p-8 transition-all duration-300 hover:shadow-lg hover:bg-white cursor-pointer">
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1.5 bg-heritage-100 text-heritage-700 text-xs font-semibold rounded-full mb-4">
                  {article.category}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl font-bold text-corporate-900 mb-3 group-hover:text-heritage-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 font-light mb-6 leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <FiCalendar className="w-4 h-4" />
                  {article.date}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-8 text-center">
          <Link
            href="/newsroom"
            className="inline-flex items-center gap-2 px-8 py-3 bg-corporate-800 hover:bg-corporate-900 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg group"
          >
            View All Articles
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
