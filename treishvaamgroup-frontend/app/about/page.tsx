import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { FiTarget, FiEye, FiHeart, FiTrendingUp, FiShield, FiGlobe } from 'react-icons/fi'

const coreValues = [
  {
    icon: FiTarget,
    title: 'Excellence',
    description: 'Pursuit of the highest standards in every project and interaction',
  },
  {
    icon: FiEye,
    title: 'Vision',
    description: 'Forward-thinking approach to identify opportunities ahead',
  },
  {
    icon: FiHeart,
    title: 'Integrity',
    description: 'Transparent, ethical business practices and accountability',
  },
  {
    icon: FiTrendingUp,
    title: 'Growth',
    description: 'Continuous innovation and sustainable value creation',
  },
  {
    icon: FiShield,
    title: 'Trust',
    description: 'Building lasting relationships based on reliability',
  },
  {
    icon: FiGlobe,
    title: 'Global Reach',
    description: 'Local expertise with worldwide presence and perspective',
  },
]

const milestones = [
  { year: '2000', title: 'Foundation', description: 'Treishvaam Group established' },
  { year: '2008', title: 'Expansion', description: 'Expanded to 15 countries' },
  { year: '2015', title: 'Innovation', description: 'Launched digital transformation' },
  { year: '2020', title: 'Sustainability', description: 'Achieved carbon neutrality' },
  { year: '2023', title: 'Excellence', description: '45 offices, 5000+ employees' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Treishvaam Group</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                A global leader in business excellence, innovation, and sustainable value creation across multiple sectors.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-up">
                <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Story</h2>
                <p className="text-lg text-text-secondary mb-4">
                  Founded in 2000, Treishvaam Group emerged from a vision to transform how businesses operate globally. What began as a small consulting firm has evolved into a diversified conglomerate with operations in 45 countries.
                </p>
                <p className="text-lg text-text-secondary mb-4">
                  Our journey is marked by consistent innovation, strategic acquisitions, and an unwavering commitment to creating sustainable value for all stakeholders.
                </p>
                <p className="text-lg text-text-secondary">
                  Today, with over 5,000 employees and a presence in multiple industries, we continue to lead transformation and drive excellence across global markets.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative h-96 bg-gradient-to-br from-primary-100 to-secondary/20 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary-700 mb-2">25+</div>
                      <p className="text-text-secondary">Years of Excellence</p>
                      <p className="text-2xl mt-4">🏆</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                These principles guide every decision and define our organizational culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border-t-4 border-secondary"
                  >
                    <Icon className="w-12 h-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-primary-900 mb-3">{value.title}</h3>
                    <p className="text-text-secondary">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline/Milestones */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Our Journey</h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Key milestones that shaped our company's evolution.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary to-accent"></div>

              <div className="space-y-8 md:space-y-0">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="flex-1 flex justify-end">
                      <div className={`w-full md:w-5/6 ${index % 2 === 0 ? 'text-right' : ''}`}>
                        <div className="bg-light-bg p-6 rounded-lg border border-border-light hover:shadow-lg transition-all">
                          <div className="text-2xl font-bold text-secondary mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-primary-900 mb-2">{milestone.title}</h3>
                          <p className="text-text-secondary">{milestone.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="flex justify-center md:block">
                      <div className="w-4 h-4 bg-secondary rounded-full border-4 border-white relative z-10 hidden md:block"></div>
                      <div className="md:hidden w-4 h-4 bg-secondary rounded-full"></div>
                    </div>

                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                Visionary leaders driving innovation and excellence across our organization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <div className="h-64 bg-gradient-to-br from-primary-700 to-secondary flex items-center justify-center">
                    <div className="text-6xl">👤</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-1">Executive {member}</h3>
                    <p className="text-secondary font-semibold mb-3">Chief Officer</p>
                    <p className="text-text-secondary text-sm">Leading strategic initiatives and driving organizational excellence.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              We're looking for talented individuals passionate about excellence and innovation.
            </p>
            <a
              href="/careers"
              className="inline-block bg-secondary hover:bg-secondary/90 text-primary-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Explore Opportunities
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
