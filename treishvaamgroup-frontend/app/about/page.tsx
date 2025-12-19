import HeroSection from '@/components/home/HeroSection'
import Link from 'next/link'
import { FiArrowRight, FiTrendingUp, FiSun, FiUsers } from 'react-icons/fi'

export default function Home() {
  return (
    <main className="bg-white selection:bg-gold-100">
      <HeroSection />

      {/* The Strategic Vision */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-100 -skew-x-12 opacity-50 -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Treishvaam Ecosystem</span>
            <h2 className="text-5xl md:text-6xl font-serif text-corporate-900 mb-8 leading-tight">
              Empowering the <br/> <span className="italic text-gold-500">Essentials of Tomorrow.</span>
            </h2>
            <p className="text-xl text-corporate-500 font-light leading-relaxed mb-12">
              We identify critical gaps in the global economy and build digital-first enterprises to fill them. From wealth management to sustainable nutrition and workforce scaling, Treishvaam is architecting the future.
            </p>
          </div>

          {/* The 3 Real Verticals */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            
            {/* 1. Finance */}
            <VerticalCard 
              icon={<FiTrendingUp />}
              title="Treishvaam Finance"
              desc="Digital-first wealth management and strategic capital solutions."
              status="LIVE"
              link="https://treishfin.treishvaamgroup.com"
            />

            {/* 2. Agro */}
            <VerticalCard 
              icon={<FiSun />}
              title="Treishvaam Agro"
              desc="Solar-dried, zero-waste nutritional powders for the global market."
              status="MANUFACTURING"
              link="/businesses"
            />

            {/* 3. THM (Hire Marketplace) */}
            <VerticalCard 
              icon={<FiUsers />}
              title="Hire Marketplace (THM)"
              desc="The direct-access platform for hiring entire high-performance teams."
              status="BETA"
              link="/businesses"
            />

          </div>
        </div>
      </section>
    </main>
  )
}

function VerticalCard({ icon, title, desc, status, link }: any) {
  return (
    <Link href={link} className="group bg-surface-50 p-10 border border-transparent hover:border-gold-300 hover:shadow-glow transition-all duration-500 relative overflow-hidden">
      <div className="absolute top-4 right-4">
        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${status === 'LIVE' ? 'bg-green-100 text-green-700' : 'bg-gold-100 text-gold-700'}`}>
          {status}
        </span>
      </div>
      <div className="text-3xl text-corporate-900 mb-6 group-hover:text-gold-500 transition-colors">{icon}</div>
      <h3 className="text-2xl font-serif mb-3">{title}</h3>
      <p className="text-corporate-500 text-sm leading-relaxed mb-8">{desc}</p>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-corporate-900 group-hover:text-gold-500 transition-colors">
        Explore <FiArrowRight />
      </div>
    </Link>
  )
}