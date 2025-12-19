import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const openPositions = [
  {
    title: 'Senior Software Engineer',
    department: 'Technology',
    location: 'Mumbai, India',
    type: 'Full-time',
  },
  {
    title: 'Business Strategy Consultant',
    department: 'Consulting',
    location: 'Delhi, India',
    type: 'Full-time',
  },
  {
    title: 'Financial Analyst',
    department: 'Finance',
    location: 'Bangalore, India',
    type: 'Full-time',
  },
  {
    title: 'Operations Manager',
    department: 'Supply Chain',
    location: 'Chennai, India',
    type: 'Full-time',
  },
]

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Careers</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Join our talented team and help shape the future of global business.
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary-900 mb-12">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openPositions.map((job, index) => (
                <div key={index} className="border border-border-light rounded-lg p-6 hover:shadow-lg transition-all group cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary-900 group-hover:text-secondary transition-colors">{job.title}</h3>
                      <p className="text-secondary font-semibold text-sm">{job.department}</p>
                    </div>
                    <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-semibold">{job.type}</span>
                  </div>
                  <p className="text-text-secondary mb-4">{job.location}</p>
                  <button className="text-secondary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Culture</h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
              We foster an environment of collaboration, innovation, and continuous growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Flexible Work', 'Career Growth', 'Team Collaboration'].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{item}</h3>
                  <p className="text-text-secondary">Experience the best of work life balance</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-gray-200 mb-8">Submit your resume and let's talk about your future.</p>
            <button className="bg-secondary hover:bg-secondary/90 text-primary-900 font-bold px-8 py-4 rounded-lg transition-all">
              View All Opportunities
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
