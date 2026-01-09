import HeroSection from '@/components/home/HeroSection'
import Link from 'next/link'
import { FiArrowRight, FiTrendingUp, FiSun, FiUsers, FiGlobe, FiLayers, FiCpu } from 'react-icons/fi'

export default function Home() {
  return (
    <main className="bg-white font-sans selection:bg-gold-500 selection:text-white overflow-hidden">
      <HeroSection />

      {/* =========================================================================
          SECTION 1: THE ECOSYSTEM (PRESERVED)
          ========================================================================= */}
      <section className="py-32 relative bg-white">
        
        {/* Background: Subtle Golden Grid Animation */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#B08D55 1px, transparent 1px), linear-gradient(to right, #B08D55 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Content */}
            <div>
              <span className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">The Ecosystem</span>
              
              <h2 className="text-5xl md:text-7xl font-serif text-black mb-8 leading-[1.1]">
                Architecting <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 italic">
                  Value Chains.
                </span>
              </h2>
              
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-12 border-l-2 border-gold-200 pl-6">
                We don't just participate in markets; we create them. By fusing <span className="text-black font-medium">digital efficiency</span> with <span className="text-black font-medium">tangible assets</span>, we are building a resilient infrastructure for the future economy.
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                <StatBox number="03" label="Core Verticals" />
                <StatBox number="2026" label="Global Scale" />
                <StatBox number="100%" label="Digital First" />
              </div>
            </div>

            {/* Right: Modern Floating Collage */}
            <div className="relative h-[600px] w-full hidden lg:block">
               {/* Decorative Circle */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gold-100 rounded-full animate-[spin_60s_linear_infinite]"></div>
               
               {/* Image 1: Main (Hire/Tech) */}
               <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-sm overflow-hidden shadow-2xl z-10 animate-[float_6s_ease-in-out_infinite]">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
                    className="object-cover w-full h-full"
                    alt="Corporate Structure"
                  />
               </div>

               {/* Image 2: Secondary (Agro) */}
               <div className="absolute bottom-0 left-10 w-1/2 h-1/2 rounded-sm overflow-hidden shadow-2xl z-20 border-4 border-white animate-[float_8s_ease-in-out_infinite_reverse]">
                  <img 
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070" 
                    className="object-cover w-full h-full"
                    alt="Sustainable Growth"
                  />
               </div>

               {/* Image 3: Accent (Gold Abstract) */}
               <div className="absolute top-20 left-0 w-1/3 h-1/3 rounded-sm overflow-hidden shadow-xl z-30 border-4 border-white animate-[float_10s_ease-in-out_infinite]">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000" 
                    className="object-cover w-full h-full scale-150"
                    alt="Abstract Gold"
                  />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR ENTERPRISES (UPDATED FINANCE IMAGE)
          ========================================================================= */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        
        {/* ANIMATED BACKGROUND: "Golden Fog" */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gold-200/20 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite] mix-blend-multiply"></div>
           <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-[100px] animate-[pulse_15s_ease-in-out_infinite] mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20 max-w-3xl mx-auto">
             <span className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Our Portfolio</span>
             <h2 className="text-4xl md:text-6xl font-serif mb-6 text-black">
               The <span className="italic text-gold-600">Enterprises</span>
             </h2>
             <p className="text-gray-500 text-lg font-light">
               Three distinct verticals. One unified vision of excellence.
             </p>
          </div>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-10">
            
            {/* CARD 1: FINANCE - COMPLETELY NEW (Golden City Skyline) */}
            <EnterpriseCard 
              title="Treishvaam Finance"
              subtitle="Wealth & Capital"
              desc="Next-generation digital banking and algorithmic investment strategies."
              // New Image: Golden Hour Financial District (Matches "Capital" and "Wealth")
              image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070" 
              link="https://treishfin.treishvaamgroup.com"
              icon={<FiTrendingUp />}
            />

            {/* CARD 2: AGRO - PRESERVED */}
            <EnterpriseCard 
              title="Treishvaam Agro"
              subtitle="Sustainable Nutrition"
              desc="Revolutionizing the food supply chain with solar-dried technology."
              image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070" 
              link="/businesses"
              icon={<FiSun />}
            />

            {/* CARD 3: HIRE - PRESERVED */}
            <EnterpriseCard 
              title="Hire Marketplace"
              subtitle="Human Capital"
              desc="Connecting elite global talent with high-performance organizations."
              image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070" 
              link="/businesses"
              icon={<FiUsers />}
            />

          </div>
        </div>
      </section>
    </main>
  )
}

// --- Components ---

function StatBox({ number, label }: any) {
  return (
    <div className="group p-6 bg-gray-50 border border-gray-100 rounded-sm hover:border-gold-300 transition-colors duration-300">
      <div className="text-4xl font-serif text-black mb-2 group-hover:text-gold-600 transition-colors">{number}</div>
      <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{label}</div>
    </div>
  )
}

function EnterpriseCard({ title, subtitle, desc, image, link, icon }: any) {
  return (
    <Link href={link} className="group relative h-[550px] bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gold-100/50 transition-all duration-700 block">
      
      {/* 1. Image Layer (Top Half) */}
      <div className="h-[60%] overflow-hidden relative">
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
         <img 
            src={image} 
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
            alt={title}
         />
         
         {/* Floating Icon Badge */}
         <div className="absolute bottom-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white z-20 rounded-full group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500 transition-all duration-500">
            <span className="text-xl">{icon}</span>
         </div>
      </div>

      {/* 2. Content Layer (Bottom Half) */}
      <div className="h-[40%] p-8 relative bg-white border-t border-gray-100 group-hover:border-gold-200 transition-colors">
         <span className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">
            {subtitle}
         </span>
         
         <h3 className="text-2xl font-serif text-black mb-4 group-hover:text-gold-600 transition-colors">
            {title}
         </h3>
         
         <p className="text-gray-500 leading-relaxed text-sm mb-6 line-clamp-2">
            {desc}
         </p>

         <span className="inline-flex items-center gap-3 text-black text-xs font-bold uppercase tracking-widest group/btn">
            <span className="border-b border-gray-200 group-hover:border-gold-500 transition-all">Discover</span>
            <FiArrowRight className="text-gold-500 group-hover:translate-x-2 transition-transform duration-300" />
         </span>
      </div>
    </Link>
  )
}