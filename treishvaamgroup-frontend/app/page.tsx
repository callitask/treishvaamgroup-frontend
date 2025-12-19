import HeroSection from '@/components/home/HeroSection'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />

      {/* Vision / Introduction */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 relative">
               <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                 {/* Placeholder for Chairman/HQ Image */}
                 <div className="absolute inset-0 bg-corporate-900/5"></div>
                 <div className="absolute bottom-8 left-8 right-8 bg-white p-6 shadow-xl">
                    <p className="font-serif italic text-xl text-corporate-900 mb-2">"We measure our success not just by profits, but by the lives we impact."</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-gold-600">— Chairman's Message</p>
                 </div>
               </div>
            </div>
            <div className="md:col-span-7 md:pl-12">
              <h2 className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">About The Group</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-corporate-900 mb-8 leading-tight">
                Pioneering the Future of <br/> Global Enterprise
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Treishvaam Group is a multinational conglomerate with a diversified portfolio. From powering nations to financing dreams, our businesses are united by a single purpose: to build a sustainable, robust, and inclusive future for all.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10 border-t border-gray-100 pt-8">
                <div>
                   <h4 className="text-3xl font-serif text-corporate-900 mb-1">25+</h4>
                   <p className="text-xs uppercase tracking-wider text-gray-500">Years of Legacy</p>
                </div>
                <div>
                   <h4 className="text-3xl font-serif text-corporate-900 mb-1">3</h4>
                   <p className="text-xs uppercase tracking-wider text-gray-500">Core Verticals</p>
                </div>
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 text-corporate-900 font-bold uppercase tracking-widest text-xs border-b border-corporate-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
                Read Our Story <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-32 bg-corporate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif text-corporate-900 mb-4">Our Businesses</h2>
              <p className="text-slate-600">Delivering excellence across critical sectors of the global economy.</p>
            </div>
            <Link href="/businesses" className="hidden md:block text-corporate-900 font-bold uppercase text-xs tracking-widest hover:text-gold-600 transition-colors">
              View All Sectors &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            <SectorCard 
              title="Energy" 
              desc="Renewable power & sustainable solutions."
              icon="⚡"
            />
            <SectorCard 
              title="Infrastructure" 
              desc="Smart cities, logistics, and heavy engineering."
              icon="🏗️"
            />
            <SectorCard 
              title="Finance" 
              desc="Strategic capital & asset management."
              icon="📈"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function SectorCard({ title, desc, icon }: { title: string, desc: string, icon: string }) {
  return (
    <div className="group bg-white p-12 hover:bg-corporate-900 transition-all duration-500 border border-gray-100 relative overflow-hidden">
      <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{icon}</div>
      <h3 className="text-2xl font-serif text-corporate-900 group-hover:text-white mb-3 transition-colors">{title}</h3>
      <p className="text-slate-500 group-hover:text-gray-400 mb-8 transition-colors">{desc}</p>
      <span className="text-gold-500 uppercase text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 block">
        Explore Vertical
      </span>
    </div>
  )
}