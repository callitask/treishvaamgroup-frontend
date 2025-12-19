import Link from 'next/link'
import { FiPieChart, FiArrowUpRight } from 'react-icons/fi'

export default function Investors() {
  return (
    <main className="pt-24 bg-surface-50 min-h-screen">
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-serif text-corporate-900 mb-6">Partnership Opportunities</h1>
          <p className="text-lg text-corporate-500 mb-12">
            Treishvaam Group is privately held and in a high-growth expansion phase. We invite institutional investors and strategic partners to explore our vision.
          </p>

          <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
             <h3 className="text-2xl font-serif mb-8">Why Partner With Us?</h3>
             <div className="grid md:grid-cols-3 gap-8">
                <GrowthStat label="Global Food Powder Market" value="$12B" sub="Growing at 7.2% CAGR" />
                <GrowthStat label="Gig-Economy Valuation" value="$455B" sub="Shift to Team-Based Hiring" />
                <GrowthStat label="Fintech Adoption" value="64%" sub="Global Consumer Usage" />
             </div>
          </div>

          <div className="bg-corporate-900 text-white p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-serif mb-2">Request Investment Thesis</h3>
              <p className="text-gray-400 text-sm">Strictly for accredited investors and VCs.</p>
            </div>
            <Link href="/contact" className="bg-gold-500 text-white px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-white hover:text-corporate-900 transition-colors">
              Contact Relations
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function GrowthStat({ label, value, sub }: any) {
  return (
    <div className="border-l-2 border-gold-500 pl-4">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">{label}</p>
      <div className="text-4xl font-serif text-corporate-900 mb-1">{value}</div>
      <div className="flex items-center gap-1 text-green-600 text-xs font-bold">
        <FiArrowUpRight /> {sub}
      </div>
    </div>
  )
}