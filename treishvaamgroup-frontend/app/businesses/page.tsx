import Link from 'next/link'
import { FiArrowRight, FiTrendingUp, FiSun, FiUsers } from 'react-icons/fi'

export const metadata = {
  title: 'Our Businesses - Treishvaam Group',
  description: 'Three authentic Treishvaam Group divisions: Finance, Agro, and Hiring Marketplace.',
}

export default function BusinessesPage() {
  const businesses = [
    { title: 'Treishvaam Finance', icon: FiTrendingUp, desc: 'Institutional financial intelligence and capital solutions.', status: 'LIVE', link: 'https://treishvaamfinance.com' },
    { title: 'Treishvaam Agro', icon: FiSun, desc: 'Solar-dehydrated B2B powders and extracts for global manufacturing.', status: 'MANUFACTURING', link: 'https://treishvaamagro.com' },
    { title: 'Treishvaam Hiring Marketplace', icon: FiUsers, desc: 'Direct-access hiring of high-performance enterprise teams.', status: 'BETA', link: 'https://thm.treishvaamgroup.com' },
  ]

  return (
    <main className="bg-surface-50 pt-24">
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif text-corporate-900 mb-6 leading-tight">
                Global Scale, <br/> <span className="text-gold-500">Local Impact.</span>
              </h1>
              <p className="text-lg text-slate-500 mb-8 max-w-lg">
                Three authentic divisions. One unified Treishvaam Group.
              </p>
              <div className="flex gap-8">
                 <div>
                   <span className="block text-3xl font-serif text-corporate-900 font-bold">03</span>
                   <span className="text-xs uppercase tracking-wider text-slate-400">Divisions</span>
                 </div>
                 <div>
                   <span className="block text-3xl font-serif text-corporate-900 font-bold">24</span>
                   <span className="text-xs uppercase tracking-wider text-slate-400">Agro SKUs</span>
                 </div>
              </div>
            </div>
            <div className="h-64 md:h-96 bg-surface-100 relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-100/50 to-transparent"></div>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-corporate-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

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
                    <span className="text-xs font-bold text-slate-300 group-hover:text-gold-600 transition-colors">{biz.status}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-corporate-900 mb-4">{biz.title}</h3>
                  <p className="text-slate-500 mb-8 leading-relaxed text-sm h-12">
                    {biz.desc}
                  </p>
                  <Link href={biz.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-corporate-900 group-hover:text-gold-600 transition-colors border-b border-transparent group-hover:border-gold-600 pb-1">
                    Visit Division <FiArrowRight />
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
