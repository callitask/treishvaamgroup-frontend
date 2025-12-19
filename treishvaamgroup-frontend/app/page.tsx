import HeroSection from '@/components/home/HeroSection'
import Link from 'next/link'
import { FiArrowRight, FiTrendingUp, FiSun, FiUsers } from 'react-icons/fi'

export default function Home() {
  return (
    <main className="bg-surface-50">
      <HeroSection />

      {/* SECTION 1: Strategic Vision (Text + Floating Image) */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            
            <div className="relative z-10">
              <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Ecosystem</span>
              <h2 className="text-5xl font-serif text-corporate-900 mb-8 leading-tight">
                Architecting <br/> <span className="italic text-gold-500">Value Chains.</span>
              </h2>
              <p className="text-lg text-corporate-600 font-light leading-relaxed mb-8">
                We don't just participate in markets; we create them. From the digital efficiency of <strong>Treishvaam Finance</strong> to the purity of <strong>Treishvaam Agro</strong>, our businesses are built on the bedrock of innovation.
              </p>
              
              <div className="flex gap-12 border-t border-gray-200 pt-8">
                <Stat number="03" label="Core Verticals" />
                <Stat number="2025" label="Global Expansion" />
                <Stat number="100%" label="Digital First" />
              </div>
            </div>

            {/* Visual: Image Grid with Gold Accents */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-100/50 rounded-full blur-3xl -z-10"></div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4 translate-y-8">
                    <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-lg relative group">
                       <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" alt="Finance" />
                       <div className="absolute inset-0 bg-corporate-900/10 group-hover:bg-transparent transition-colors" />
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-lg relative group">
                       <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" alt="Agro" />
                       <div className="absolute inset-0 bg-corporate-900/10 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="aspect-square rounded-sm bg-gold-500 flex items-center justify-center text-white p-6 text-center">
                       <p className="font-serif italic text-xl">"Innovation is our currency."</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: The Verticals (Rich Interactive Cards) */}
      <section className="py-32 bg-corporate-900 text-white relative">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Enterprises</h2>
             <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10 border-t border-b border-white/10">
            
            <VerticalCard 
              title="Treishvaam Finance"
              subtitle="Wealth Management"
              desc="Next-gen digital capital solutions."
              image="https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064"
              link="https://treishfin.treishvaamgroup.com"
              icon={<FiTrendingUp />}
            />

            <VerticalCard 
              title="Treishvaam Agro"
              subtitle="Solar Nutrition"
              desc="Zero-waste, solar-dried fruit powders."
              image="https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1974"
              link="/businesses"
              icon={<FiSun />}
            />

            <VerticalCard 
              title="Hire Marketplace (THM)"
              subtitle="Workforce Ecosystem"
              desc="The direct exchange for high-performance teams."
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
              link="/businesses"
              icon={<FiUsers />}
            />

          </div>
        </div>
      </section>
    </main>
  )
}

function Stat({ number, label }: any) {
  return (
    <div>
      <div className="text-3xl font-serif text-corporate-900 mb-1">{number}</div>
      <div className="text-[10px] uppercase tracking-widest text-corporate-500">{label}</div>
    </div>
  )
}

function VerticalCard({ title, subtitle, desc, image, link, icon }: any) {
  return (
    <Link href={link} className="group relative h-[500px] overflow-hidden block">
      {/* Background Image (Hidden initially, shown on hover or low opacity) */}
      <div className="absolute inset-0">
         <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" />
         <div className="absolute inset-0 bg-corporate-900/60 group-hover:bg-corporate-900/40 transition-colors duration-500"></div>
      </div>

      {/* Content */}
      <div className="relative h-full p-12 flex flex-col justify-between z-20">
         <div>
            <div className="text-gold-500 text-3xl mb-6 opacity-80 group-hover:opacity-100 transform group-hover:-translate-y-2 transition-all">{icon}</div>
            <h3 className="text-3xl font-serif mb-2 text-white">{title}</h3>
            <p className="text-gold-400 uppercase tracking-widest text-xs font-bold">{subtitle}</p>
         </div>

         <div className="transform translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-gray-300 leading-relaxed mb-6 border-l-2 border-gold-500 pl-4">
              {desc}
            </p>
            <span className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group-hover:text-gold-400 transition-colors">
              Explore <FiArrowRight />
            </span>
         </div>
      </div>
    </Link>
  )
}