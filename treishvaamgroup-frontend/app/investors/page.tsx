import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function InvestorsPage() {
  const documents = [
    { title: 'Annual Report 2024', date: 'Q4 2024' },
    { title: 'Quarterly Earnings Q3 2024', date: 'Nov 2024' },
    { title: 'Investor Presentation', date: 'Oct 2024' },
    { title: 'Corporate Governance', date: 'Updated 2024' },
  ]

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Investor Relations</h1>
            <p className="text-xl text-gray-200">Committed to transparent communication and sustainable shareholder value creation.</p>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { label: 'Market Cap', value: '$25B+' },
                { label: 'Revenue Growth', value: '18%' },
                { label: 'Dividend Yield', value: '3.5%' },
                { label: 'P/E Ratio', value: '22x' },
              ].map((metric, index) => (
                <div key={index} className="text-center p-8 bg-light-bg rounded-xl">
                  <div className="text-3xl font-bold text-secondary mb-2">{metric.value}</div>
                  <p className="text-text-secondary">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-20 bg-light-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-primary-900 mb-12">Financial Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-border-light hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-primary-900">{doc.title}</h3>
                      <p className="text-text-secondary text-sm">{doc.date}</p>
                    </div>
                    <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Investor Queries</h2>
          <p className="text-xl text-gray-200 mb-8">Contact our Investor Relations team for more information</p>
          <a href="/contact" className="inline-block bg-secondary hover:bg-secondary/90 text-primary-900 font-bold px-8 py-4 rounded-lg">
            Get in Touch
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
