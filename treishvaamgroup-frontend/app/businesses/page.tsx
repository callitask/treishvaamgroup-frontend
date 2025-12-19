import Link from 'next/link'
import { FiArrowRight, FiZap, FiTrendingUp, FiHome, FiServer, FiGlobe, FiAnchor } from 'react-icons/fi'

export const metadata = {
  title: 'Our Businesses - Treishvaam Group',
  description: 'A diversified portfolio across Energy, Finance, and Infrastructure.',
}

export default function BusinessesPage() {
  const businesses = [
    { title: 'Energy', icon: FiZap, desc: 'Leading the renewable transition with 5GW+ capacity.', revenue: '$15B' },
    { title: 'Finance', icon: FiTrendingUp, desc: 'Strategic capital and asset management solutions.', revenue: '$8.5B' },
    { title: 'Infrastructure', icon: FiHome, desc: 'Building smart cities and heavy industrial corridors.', revenue: '$12B' },
    { title: 'Technology', icon: FiServer, desc: 'Enterprise AI and digital transformation services.', revenue: '$3.2B' },
    { title: 'Real Estate', icon: FiGlobe, desc: 'Premium commercial and residential developments.', revenue: '$5.8B' },
    { title: 'Logistics', icon: FiAnchor, desc: 'Global supply chain and port management.', revenue: '$4.1B' },
  ]

  return (
    <main className="bg-surface-50 pt-24">
      {/* Hero */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif text-corporate-900 mb-6 leading-tight">
                Global Scale, <br/> <span className="text-gold-500">Local Impact.</span>
              </h1>
              <p className="text-lg text-slate-500 mb-8 max-w-lg">
                Our portfolio spans critical sectors that drive the modern economy. We build businesses that last.
              </p>
              <div className="flex gap-8">
                 <div>
                   <span className="block text-3xl font-serif text-corporate-900 font-bold">$45B+</span>
                   <span className="text-xs uppercase tracking-wider text-slate-400">Total Revenue</span>
                 </div>
                 <div>
                   <span className="block text-3xl font-serif text-corporate-900 font-bold">125K</span>
                   <span className="text-xs uppercase tracking-wider text-slate-400">Employees</span>
                 </div>
              </div>
            </div>
            <div className="h-64 md:h-96 bg-surface-100 relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-100/50 to-transparent"></div>
                {/* Abstract Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-corporate-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-surface-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((biz, idx) => {
              const Icon = biz.icon
              return (
                <div key={idx} className="group bg-white p-10 hover:shadow-gold-glow transition-all duration-500 border border-transparent hover:border-gold-200">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-surface-100 text-corporate-900 flex items-center justify-center text-2xl group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                      <Icon />
                    </div>
                    <span className="text-xs font-bold text-slate-300 group-hover:text-gold-600 transition-colors">{biz.revenue}</span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-corporate-900 mb-4">{biz.title}</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed text-sm h-12">
                    {biz.desc}
                  </p>
                  
                  <Link href={`/businesses`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-corporate-900 group-hover:text-gold-600 transition-colors border-b border-transparent group-hover:border-gold-600 pb-1">
                    View Sector <FiArrowRight />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}