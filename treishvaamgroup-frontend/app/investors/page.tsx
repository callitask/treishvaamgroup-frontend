import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Section } from '@/components/ui'
import Link from 'next/link'
import { FiArrowRight, FiDownload, FiTrendingUp, FiBarChart2, FiPieChart } from 'react-icons/fi'

export const metadata = {
  title: 'Investor Relations - Treishvaam Group',
  description: 'Transparent communication, financial reports, and investor updates from Treishvaam Group.',
}

export default function InvestorsPage() {
  const financialDocuments = [
    { title: 'Annual Report 2024', date: 'December 2024', type: 'PDF', size: '8.5 MB' },
    { title: 'Q3 2024 Financial Results', date: 'November 2024', type: 'PDF', size: '4.2 MB' },
    { title: 'Investor Presentation', date: 'October 2024', type: 'PPT', size: '6.1 MB' },
    { title: 'Corporate Governance Guidelines', date: 'Updated 2024', type: 'PDF', size: '2.8 MB' },
    { title: 'Sustainability Report 2024', date: 'September 2024', type: 'PDF', size: '5.3 MB' },
    { title: 'Dividend Policy', date: 'Updated 2024', type: 'PDF', size: '1.9 MB' },
  ]

  const keyMetrics = [
    { label: 'Market Cap', value: '$180B+', change: '+12% YoY' },
    { label: 'Annual Revenue', value: '$45B+', change: '+18% YoY' },
    { label: 'Dividend Yield', value: '2.8%', change: 'Stable' },
    { label: 'Return on Equity', value: '14.2%', change: '+2.1% YoY' },
  ]

  return (
    <>
      <Navbar />
      <main className="pt-16 sm:pt-26">
        {/* Hero */}
        <Section bgColor="corporate" spacingY="lg" fullBleed>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Investor Relations
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl font-light">
              Transparent communication, financial performance, and shareholder value creation
              are at the core of our investor relations strategy.
            </p>
          </div>
        </Section>

        {/* Key Metrics */}
        <Section spacingY="lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-corporate-900 mb-12">
              Financial Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyMetrics.map((metric, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
                  <p className="text-sm text-slate-600 font-medium mb-3">{metric.label}</p>
                  <div className="mb-3">
                    <div className="text-4xl font-serif font-bold text-heritage-600">{metric.value}</div>
                  </div>
                  <p className="text-xs font-semibold text-green-600">{metric.change}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Stock Price & Analysis */}
        <Section bgColor="slate" spacingY="lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Stock Chart Placeholder */}
              <div className="lg:col-span-2">
                <h3 className="font-serif text-2xl font-bold text-corporate-900 mb-6">Stock Performance</h3>
                <div className="bg-white border border-slate-200 rounded-lg p-8 h-80 flex items-center justify-center">
                  <div className="text-center text-slate-600">
                    <FiTrendingUp className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p className="font-light">Stock chart data would be integrated here</p>
                    <p className="text-xs text-slate-500 mt-2">Real-time pricing integration available</p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-corporate-900 mb-6">Key Information</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold text-slate-600 uppercase mb-2">Stock Symbol</p>
                    <p className="font-serif text-2xl font-bold text-corporate-900">TRSH</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-600 uppercase mb-2">Listed On</p>
                    <p className="font-serif text-lg font-bold text-corporate-900">Global Exchange</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-600 uppercase mb-2">Sector</p>
                    <p className="font-serif text-lg font-bold text-corporate-900">Diversified</p>
                  </div>
                  <button className="w-full bg-corporate-800 hover:bg-corporate-900 text-white font-semibold py-2 rounded-lg transition-all duration-300">
                    View Detailed Chart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Financial Documents */}
        <Section spacingY="lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-corporate-900 mb-4">
                Financial Documents
              </h2>
              <p className="text-lg text-slate-600 font-light">
                Access our latest financial reports, presentations, and corporate governance documents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {financialDocuments.map((doc, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 hover:border-heritage-300 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 bg-heritage-100 rounded-lg flex items-center justify-center group-hover:bg-heritage-200 transition-colors">
                        <FiDownload className="w-6 h-6 text-heritage-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-corporate-900 mb-1 group-hover:text-heritage-600 transition-colors">
                          {doc.title}
                        </h4>
                        <p className="text-sm text-slate-600">{doc.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <span className="text-xs font-semibold text-slate-600 uppercase">{doc.type} • {doc.size}</span>
                    <FiArrowRight className="w-4 h-4 text-heritage-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Governance & Compliance */}
        <Section bgColor="slate" spacingY="lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Corporate Governance',
                  description: 'Board composition, committees, and governance best practices.',
                  icon: FiBarChart2,
                },
                {
                  title: 'Compliance & Ethics',
                  description: 'Commitment to regulatory compliance and ethical business conduct.',
                  icon: FiPieChart,
                },
                {
                  title: 'Stakeholder Engagement',
                  description: 'Regular communication and engagement with shareholders and stakeholders.',
                  icon: FiTrendingUp,
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="bg-white rounded-lg border border-slate-200 p-8">
                    <Icon className="w-8 h-8 text-heritage-600 mb-4" />
                    <h4 className="font-serif text-xl font-bold text-corporate-900 mb-3">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 font-light mb-6">{item.description}</p>
                    <Link href="#" className="text-heritage-600 font-semibold text-sm hover:text-heritage-700 transition-colors">
                      Learn More →
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section spacingY="lg">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-corporate-900 mb-6">
              Investor Inquiries
            </h2>
            <p className="text-lg text-slate-600 font-light mb-8">
              Our Investor Relations team is available to discuss our financial performance,
              investment opportunities, and shareholder benefits.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-corporate-800 hover:bg-corporate-900 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg group"
            >
              Contact IR Team
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
