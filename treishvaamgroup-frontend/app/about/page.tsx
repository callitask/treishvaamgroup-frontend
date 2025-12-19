import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Section } from '@/components/ui'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export const metadata = {
  title: 'About Us - Treishvaam Group',
  description: 'Learn about Treishvaam Group\'s history, mission, vision, and leadership.',
}

export default function AboutPage() {
  const timeline = [
    {
      year: '1998',
      title: 'Founded',
      description: 'Treishvaam Group established with a vision to create a diversified business conglomerate.',
    },
    {
      year: '2005',
      title: 'Expansion',
      description: 'Entered energy and infrastructure sectors, doubling our market presence.',
    },
    {
      year: '2012',
      title: 'Global Reach',
      description: 'Expanded operations to 50+ countries across Asia, Europe, and Africa.',
    },
    {
      year: '2018',
      title: 'Sustainability Focus',
      description: 'Committed to net-zero emissions and launched major ESG initiatives.',
    },
    {
      year: '2023',
      title: 'Digital Transformation',
      description: 'Launched group-wide technology modernization and innovation programs.',
    },
    {
      year: '2024',
      title: 'Future Ready',
      description: 'Positioned as a leader in sustainable and future-ready conglomerate.',
    },
  ]

  const leaders = [
    { name: 'Rajesh Kumar', title: 'Chairman & CEO', image: '🧑‍💼' },
    { name: 'Priya Sharma', title: 'Vice Chairman', image: '👩‍💼' },
    { name: 'Amit Patel', title: 'Chief Financial Officer', image: '🧑‍💼' },
    { name: 'Neha Singh', title: 'Chief Operating Officer', image: '👩‍💼' },
    { name: 'Vikram Reddy', title: 'Chief Technology Officer', image: '🧑‍💼' },
    { name: 'Anjali Dutta', title: 'Chief Sustainability Officer', image: '👩‍💼' },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-16 sm:pt-26">
        {/* Hero */}
        <Section bgColor="corporate" spacingY="lg" fullBleed>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl font-light">
              From humble beginnings in 1998 to becoming a global conglomerate spanning multiple sectors,
              Treishvaam Group's journey is one of vision, resilience, and sustainable growth.
            </p>
          </div>
        </Section>

        {/* Timeline */}
        <Section spacingY="lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-corporate-900 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-slate-600 font-light">
                Key milestones in our growth and evolution.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-heritage-500 via-heritage-400 to-slate-200 md:translate-x-[-1px]"></div>

              <div className="space-y-12 md:space-y-16">
                {timeline.map((item, idx) => (
                  <div key={idx} className={`relative flex gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 relative z-10 w-16 h-16 md:w-20 md:h-20 bg-white border-4 border-heritage-500 rounded-full flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                      <span className="text-lg font-serif font-bold text-heritage-600">{item.year}</span>
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 flex flex-col justify-center pl-0 md:pl-12">
                      <h3 className="font-serif text-2xl font-bold text-corporate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Vision & Mission */}
        <Section bgColor="slate" spacingY="lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white rounded-lg border border-slate-200 p-12">
                <h3 className="font-serif text-3xl font-bold text-corporate-900 mb-6">Our Mission</h3>
                <p className="text-lg text-slate-700 font-light leading-relaxed">
                  To create sustainable value for all stakeholders through operational excellence,
                  innovation, and responsible business practices across our diverse portfolio of businesses.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-lg border border-slate-200 p-12">
                <h3 className="font-serif text-3xl font-bold text-corporate-900 mb-6">Our Vision</h3>
                <p className="text-lg text-slate-700 font-light leading-relaxed">
                  To be recognized as a global conglomerate leading in sustainability, innovation,
                  and stakeholder value creation, while making a positive impact on society and the environment.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Leadership */}
        <Section spacingY="lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-corporate-900 mb-4">
                Our Leadership
              </h2>
              <p className="text-lg text-slate-600 font-light">
                Experienced visionaries guiding Treishvaam Group's strategic direction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-br from-corporate-100 to-slate-100 h-48 flex items-center justify-center text-6xl">
                    {leader.image}
                  </div>
                  <div className="p-8">
                    <h4 className="font-serif text-xl font-bold text-corporate-900 mb-2">
                      {leader.name}
                    </h4>
                    <p className="text-heritage-600 font-semibold text-sm">
                      {leader.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Governance */}
        <Section bgColor="slate" spacingY="lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-corporate-900 mb-6">
                Corporate Governance
              </h2>
              <p className="text-lg text-slate-700 font-light mb-8">
                We are committed to the highest standards of corporate governance, transparency,
                and ethical business practices.
              </p>
              <Link
                href="/about/governance"
                className="inline-flex items-center gap-2 px-8 py-3 bg-corporate-800 hover:bg-corporate-900 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg group"
              >
                View Governance Details
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
