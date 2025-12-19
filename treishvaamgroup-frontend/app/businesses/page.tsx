import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { FiTrendingUp, FiDatabase, FiUsers, FiGlobe, FiBarChart2, FiShield } from 'react-icons/fi'

const businesses = [
  {
    icon: FiDatabase,
    title: 'Technology Solutions',
    description: 'Cutting-edge software and IT infrastructure solutions for enterprises.',
    stats: '500+ Clients',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiTrendingUp,
    title: 'Consulting Services',
    description: 'Strategic consulting to drive business transformation and growth.',
    stats: '45 Countries',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FiBarChart2,
    title: 'Financial Services',
    description: 'Comprehensive financial advisory and investment management.',
    stats: '$5B+ AUM',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FiGlobe,
    title: 'Supply Chain Management',
    description: 'Optimized supply chain solutions for global operations.',
    stats: '150+ Facilities',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FiUsers,
    title: 'Talent Solutions',
    description: 'HR and recruitment services connecting top talent with opportunities.',
    stats: '10K+ Placements',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: FiShield,
    title: 'Risk Management',
    description: 'Comprehensive risk assessment and mitigation strategies.',
    stats: '1000+ Assessments',
    color: 'from-rose-500 to-orange-500',
  },
]

export default function BusinessesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Businesses</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Diverse portfolio of market-leading businesses driving innovation and value creation across multiple sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Business Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businesses.map((business, index) => {
                const Icon = business.icon
                return (
                  <div
                    key={index}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border-light hover:border-secondary cursor-pointer animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Color Bar */}
                    <div className={`h-1 bg-gradient-to-r ${business.color}`}></div>

                    <div className="p-8">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${business.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-secondary transition-colors">
                        {business.title}
                      </h3>

                      <p className="text-text-secondary mb-6 leading-relaxed">
                        {business.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-border-light">
                        <span className="text-secondary font-bold">{business.stats}</span>
                        <svg className="w-5 h-5 text-secondary group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Why Partner With Us</h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Industry expertise, global reach, and proven track record of delivering results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Industry Expertise', desc: '25+ years of specialized knowledge and experience' },
                { title: 'Global Scale', desc: 'Operations in 45 countries with local market insight' },
                { title: 'Proven Results', desc: '500+ successful client engagements and partnerships' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Create Value Together</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Explore how our diverse business portfolio can help accelerate your growth and success.
            </p>
            <a
              href="/contact"
              className="inline-block bg-secondary hover:bg-secondary/90 text-primary-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Start a Conversation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
