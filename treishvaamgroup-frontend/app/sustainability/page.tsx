import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { FiAward, FiDroplet, FiTrendingDown, FiUsers } from 'react-icons/fi'

export default function SustainabilityPage() {
  const initiatives = [
    {
      icon: FiAward,
      title: 'Carbon Neutral Operations',
      description: 'We are committed to achieving net-zero carbon emissions by 2030 through renewable energy and efficiency programs.',
    },
    {
      icon: FiDroplet,
      title: 'Water Conservation',
      description: 'Implementing advanced water management systems across all facilities to reduce consumption by 40%.',
    },
    {
      icon: FiTrendingDown,
      title: 'Waste Reduction',
      description: 'Targeting 90% waste reduction through circular economy principles and recycling initiatives.',
    },
    {
      icon: FiUsers,
      title: 'Community Impact',
      description: 'Supporting local communities through education, health, and livelihood development programs.',
    },
  ]

  const sdgs = [1, 3, 5, 7, 8, 12, 13, 17]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-green-900 to-green-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sustainability</h1>
            <p className="text-xl text-gray-200">Driving positive environmental and social impact for future generations.</p>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Our Sustainability Commitment</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                At Treishvaam Group, sustainability is not just a responsibility—it's a core business strategy that creates value for all stakeholders.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-light-bg p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary-900 mb-4">Environmental Goals</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 font-bold">•</span>
                    <span>Net-zero carbon emissions by 2030</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 font-bold">•</span>
                    <span>100% renewable energy adoption</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 font-bold">•</span>
                    <span>Zero waste to landfill by 2035</span>
                  </li>
                </ul>
              </div>
              <div className="bg-light-bg p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary-900 mb-4">Social Impact Goals</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 font-bold">•</span>
                    <span>Empower 1M+ people with skills and employment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 font-bold">•</span>
                    <span>50% diverse workforce by 2030</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-3 font-bold">•</span>
                    <span>Health and education for underprivileged communities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Initiatives */}
        <section className="py-20 bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-primary-900 mb-16">Key Initiatives</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {initiatives.map((initiative, index) => {
                const Icon = initiative.icon
                return (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <Icon className="text-secondary text-4xl mb-4" />
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">{initiative.title}</h3>
                    <p className="text-text-secondary">{initiative.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* UN SDG */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-primary-900 mb-12">UN Sustainable Development Goals</h2>
            <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
              We are aligned with the UN SDGs and actively contribute to the following goals:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sdgs.map((sdg) => (
                <div key={sdg} className="bg-gradient-to-br from-primary-900 to-primary-800 text-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                  <p className="text-4xl font-bold mb-2">SDG {sdg}</p>
                  <p className="text-sm text-gray-200">Goal #{sdg}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-green-900 to-green-800 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Join Us in Building a Sustainable Future</h2>
          <p className="text-xl text-gray-200 mb-8">Together, we can create lasting positive impact.</p>
          <button className="bg-secondary text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-all">
            Get Involved
          </button>
        </section>
      </main>
      <Footer />
    </>
  )
}
