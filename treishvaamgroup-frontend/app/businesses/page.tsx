import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Section, Button } from '@/components/ui'
import Link from 'next/link'
import { FiArrowRight, FiZap, FiTrendingUp, FiHome, FiServer, FiGlobe, FiArrowUpRight } from 'react-icons/fi'

export const metadata = {
  title: 'Our Businesses - Treishvaam Group',
  description: 'Explore Treishvaam Group\'s diverse portfolio of businesses across energy, finance, infrastructure, and technology.',
}

const businesses = [
  {
    title: 'Energy',
    description: 'Renewable and conventional energy solutions powering global economies.',
    icon: FiZap,
    color: 'from-orange-500 to-red-600',
    revenue: '$15B+',
    employees: '25,000+',
    highlights: ['Solar & Wind', 'Oil & Gas', 'Power Distribution'],
  },
  {
    title: 'Finance',
    description: 'Comprehensive financial services and investment management solutions.',
    icon: FiTrendingUp,
    color: 'from-green-500 to-emerald-600',
    revenue: '$8.5B+',
    employees: '12,000+',
    highlights: ['Banking', 'Insurance', 'Asset Management'],
  },
  {
    title: 'Infrastructure',
    description: 'Building critical infrastructure connecting communities worldwide.',
    icon: FiHome,
    color: 'from-blue-500 to-cyan-600',
    revenue: '$12B+',
    employees: '18,000+',
    highlights: ['Ports', 'Airports', 'Roads & Highways'],
  },
  {
    title: 'Technology',
    description: 'Digital solutions and IT infrastructure for modern enterprises.',
    icon: FiServer,
    color: 'from-purple-500 to-indigo-600',
    revenue: '$3.2B+',
    employees: '8,500+',
    highlights: ['Cloud Services', 'AI & ML', 'Cybersecurity'],
  },
  {
    title: 'Real Estate',
    description: 'Premium commercial and residential developments globally.',
    icon: FiGlobe,
    color: 'from-amber-500 to-orange-600',
    revenue: '$5.8B+',
    employees: '6,000+',
    highlights: ['Office Spaces', 'Residential', 'Retail'],
  },
  {
    title: 'Innovation & R&D',
    description: 'Cutting-edge research and technology commercialization.',
    icon: FiArrowUpRight,
    color: 'from-pink-500 to-rose-600',
    revenue: '$1.2B+',
    employees: '3,000+',
    highlights: ['Green Tech', 'Biotech', 'Advanced Materials'],
  },
]

export default function BusinessesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 sm:pt-26">
        {/* Hero */}
        <Section bgColor="corporate" spacingY="lg" fullBleed>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Our Businesses
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl font-light">
              A diversified portfolio of market-leading businesses operating across multiple sectors,
              generating sustainable value for stakeholders worldwide.
            </p>
          </div>
        </Section>

        {/* Overview Stats */}
        <Section spacingY="md" bgColor="slate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-heritage-600 mb-2">$45B+</div>
                <p className="text-slate-700 font-light">Combined Revenue</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-heritage-600 mb-2">125K+</div>
                <p className="text-slate-700 font-light">Global Employees</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold text-heritage-600 mb-2">150+</div>
                <p className="text-slate-700 font-light">Countries of Operation</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Businesses Grid */}
        <Section spacingY="lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businesses.map((business, idx) => {
                const Icon = business.icon
                return (
                  <div key={idx} className="group">
                    <div className="h-full bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-heritage-300 hover:shadow-lg transition-all duration-300">
                      {/* Color Header */}
                      <div className={`h-2 bg-gradient-to-r ${business.color}`}></div>

                      {/* Content */}
                      <div className="p-8">
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br ${business.color} text-white mb-6 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-7 h-7" />
                        </div>

                        {/* Title & Description */}
                        <h3 className="font-serif text-2xl font-bold text-corporate-900 mb-3 group-hover:text-heritage-600 transition-colors">
                          {business.title}
                        </h3>
                        <p className="text-slate-600 font-light mb-6 leading-relaxed">
                          {business.description}
                        </p>

                        {/* Key Figures */}
                        <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600 font-medium">Revenue</span>
                            <span className="font-semibold text-corporate-900">{business.revenue}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-600 font-medium">Employees</span>
                            <span className="font-semibold text-corporate-900">{business.employees}</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {business.highlights.map((highlight, hIdx) => (
                            <span key={hIdx} className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                              {highlight}
                            </span>
                          ))}
                        </div>

                        {/* Link */}
                        <Link
                          href={`/businesses/${business.title.toLowerCase()}`}
                          className="inline-flex items-center gap-2 text-heritage-600 font-semibold group-hover:gap-3 transition-all text-sm"
                        >
                          Learn More
                          <FiArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section bgColor="slate" spacingY="lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-corporate-900 mb-4">
                Why Partner With Treishvaam
              </h2>
              <p className="text-lg text-slate-600 font-light">
                Proven expertise, scale, and commitment to creating sustainable value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Market Leadership', desc: 'Industry leaders across all sectors' },
                { title: 'Integrated Synergies', desc: 'Cross-business opportunities and collaborations' },
                { title: 'Global Reach', desc: 'Operations in 150+ countries with local expertise' },
                { title: 'Sustainability Focus', desc: 'ESG-driven business practices' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6">
                  <h4 className="font-semibold text-corporate-900 mb-3 text-lg">{item.title}</h4>
                  <p className="text-slate-600 font-light text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section spacingY="lg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-corporate-900 mb-6">
              Explore Opportunities
            </h2>
            <p className="text-lg text-slate-600 font-light mb-8">
              Connect with our business leaders and discover partnership opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-corporate-800 hover:bg-corporate-900 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg group"
            >
              Get In Touch
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
