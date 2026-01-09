import HeroSection from '@/components/home/HeroSection'
import Link from 'next/link'
import { FiArrowRight, FiTrendingUp, FiSun, FiUsers, FiGlobe, FiLayers, FiCpu, FiBarChart2, FiShield, FiZap, FiBox } from 'react-icons/fi'

export default function Home() {
  return (
    <main className="bg-white font-sans selection:bg-gold-500 selection:text-white overflow-hidden">
      <HeroSection />

      {/* =========================================================================
          SECTION 1: THE ECOSYSTEM (DENSIFIED MODERN ISOMETRIC STACK)
          ========================================================================= */}
      <section className="py-28 relative bg-gray-50/50 overflow-hidden border-b border-gray-100">
        
        {/* Background: Mesh Gradient Blobs (Subtle) - KEPT */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-100/30 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-200/40 rounded-full blur-[80px] -z-10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* LEFT COLUMN: Text Content (KEPT) */}
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-8 bg-gold-600"></span>
                <span className="text-gold-600 font-bold tracking-[0.2em] uppercase text-[10px]">The Ecosystem</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif text-black mb-6 leading-[1.15]">
                Architecting <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gold-600 to-gray-800 italic">
                  Value Chains.
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                We don't just participate in markets; we create them. By fusing <span className="text-black font-medium border-b border-gold-200">digital efficiency</span> with <span className="text-black font-medium border-b border-gold-200">tangible assets</span>, we are building a resilient infrastructure for the future economy.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-6">
                <ModernStatBox number="03" label="Vertials" icon={<FiLayers />} />
                <ModernStatBox number="Global" label="Scale" icon={<FiGlobe />} />
                <ModernStatBox number="100%" label="Digital" icon={<FiCpu />} />
              </div>
            </div>

            {/* RIGHT COLUMN: The Densified Isometric Visualization */}
            <div className="relative h-[600px] w-full flex items-center justify-center lg:justify-end perspective-[2000px]">
               
               {/* --- NEW BACKGROUND INFRASTRUCTURE ELEMENTS (SUBTLE & BLURRED) --- */}
               
               {/* Abstract Cube 1 (Top Left - Gray Wireframe) */}
               <div className="absolute top-20 left-10 w-32 h-32 border border-gray-300/40 rounded-xl transform rotate-x-[60deg] rotate-z-[30deg] animate-[spin_60s_linear_infinite] blur-[2px] -z-10 opacity-60">
                  <div className="absolute inset-4 border border-gray-300/20 rounded-lg"></div>
               </div>
                {/* Abstract Cube 2 (Bottom Right - Gold Wireframe) */}
               <div className="absolute bottom-32 right-0 w-40 h-40 border border-gold-300/30 rounded-xl transform rotate-x-[60deg] rotate-z-[-20deg] animate-[spin_80s_linear_infinite_reverse] blur-[3px] -z-10 opacity-50">
                  <div className="absolute inset-6 border border-gold-300/10 rounded-lg"></div>
               </div>
               {/* Abstract Grid Plane (Bottom Left) */}
               <div className="absolute bottom-10 left-20 w-48 h-48 bg-[radial-gradient(#9ca3af_1px,transparent_1px)] [background-size:12px_12px] transform rotate-x-[70deg] rotate-z-[10deg] opacity-20 blur-[1px] -z-20 animate-pulse"></div>
               {/* Floating Data Box (Top Right) */}
               <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 border border-gold-200/20 transform rotate-x-[45deg] rotate-z-[45deg] animate-float blur-[1px] -z-10"></div>
                {/* Distant Structure (Far back center) */}
               <div className="absolute top-1/2 left-1/3 w-24 h-48 border-l border-b border-gray-200/30 transform skew-y-12 blur-md -z-30 opacity-40"></div>


               {/* --- MAIN ISOMETRIC STACK (KEPT) --- */}
               <div className="relative w-[300px] h-[400px] transform rotate-x-[60deg] rotate-z-[45deg] hover:rotate-z-[40deg] transition-transform duration-1000 ease-out preserve-3d z-10">
                  
                  {/* LAYER 1: BOTTOM */}
                  <div className="absolute inset-0 bg-gray-900 rounded-xl shadow-2xl transform translate-z-0 border border-gray-700 group">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <span className="text-gray-500 font-mono text-xs tracking-widest uppercase">Infrastructure Layer</span>
                      </div>
                  </div>

                  {/* LAYER 2: MIDDLE */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl shadow-[0_20px_50px_rgba(176,141,85,0.3)] transform translate-z-[60px] animate-[float-iso_6s_ease-in-out_infinite] border border-gold-300">
                      <div className="absolute inset-0 bg-white/10"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                            <FiTrendingUp className="text-white text-3xl" />
                         </div>
                      </div>
                  </div>

                  {/* LAYER 3: TOP */}
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-xl shadow-lg border border-white/60 transform translate-z-[120px] animate-[float-iso_6s_ease-in-out_infinite_reverse]">
                      <div className="p-6 h-full flex flex-col justify-between">
                         <div className="flex justify-between items-center">
                            <div className="w-8 h-8 rounded-md bg-white shadow-sm flex items-center justify-center text-gold-600"><FiZap /></div>
                            <div className="px-2 py-1 rounded-full bg-green-500/10 text-green-700 text-[10px] font-bold uppercase">Active</div>
                         </div>
                         <div className="space-y-3">
                            <div className="h-2 w-3/4 bg-gray-900/10 rounded-full"></div>
                            <div className="h-2 w-1/2 bg-gray-900/10 rounded-full"></div>
                         </div>
                         <div className="pt-4 border-t border-white/20 flex justify-between items-end">
                            <div>
                               <div className="text-[10px] text-gray-500 uppercase tracking-wider">Growth</div>
                               <div className="text-2xl font-serif text-gray-900">+128%</div>
                            </div>
                            <FiBarChart2 className="text-gold-600 text-xl" />
                         </div>
                      </div>
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 to-transparent pointer-events-none rounded-xl"></div>
                  </div>

                  {/* Connection Lines */}
                  <div className="absolute inset-0 flex items-center justify-center transform translate-z-[30px] opacity-20">
                     <div className="w-[1px] h-[120px] bg-dashed border-l border-gray-400 border-dashed"></div>
                  </div>
               </div>
               
               {/* Floating Foreground Icons (KEPT) */}
               <div className="absolute top-1/3 right-5 w-16 h-16 bg-white rounded-lg shadow-xl animate-bounce delay-700 flex items-center justify-center z-20 border border-gray-50">
                  <FiUsers className="text-gold-500" />
               </div>
               <div className="absolute bottom-1/4 left-5 w-12 h-12 bg-gold-500 rounded-lg shadow-xl animate-pulse flex items-center justify-center z-20">
                  <FiShield className="text-white" />
               </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR ENTERPRISES (PRESERVED)
          ========================================================================= */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        {/* ... (Content of this section remains exactly the same) ... */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gold-200/20 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite] mix-blend-multiply"></div>
           <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gray-200/50 rounded-full blur-[100px] animate-[pulse_15s_ease-in-out_infinite] mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
             <span className="text-gold-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Our Portfolio</span>
             <h2 className="text-4xl md:text-6xl font-serif mb-6 text-black">
               The <span className="italic text-gold-600">Enterprises</span>
             </h2>
             <p className="text-gray-500 text-lg font-light">
               Three distinct verticals. One unified vision of excellence.
             </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <EnterpriseCard 
              title="Treishvaam Finance"
              subtitle="Wealth & Capital"
              desc="Next-generation digital banking and algorithmic investment strategies."
              image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2070" 
              link="https://treishfin.treishvaamgroup.com"
              icon={<FiTrendingUp />}
            />
            <EnterpriseCard 
              title="Treishvaam Agro"
              subtitle="Sustainable Nutrition"
              desc="Revolutionizing the food supply chain with solar-dried technology."
              image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070" 
              link="/businesses"
              icon={<FiSun />}
            />
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
function ModernStatBox({ number, label, icon }: any) {
  return (
    <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
       <div className="text-gold-500 mb-2">{icon}</div>
       <div className="font-serif text-xl text-gray-900">{number}</div>
       <div className="text-[10px] uppercase tracking-wide text-gray-400 font-medium">{label}</div>
    </div>
  )
}
// (EnterpriseCard remains the same)
function EnterpriseCard({ title, subtitle, desc, image, link, icon }: any) {
  return (
    <Link href={link} className="group relative h-[550px] bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gold-100/50 transition-all duration-700 block">
      <div className="h-[60%] overflow-hidden relative">
         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
         <img 
            src={image} 
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" 
            alt={title}
         />
         <div className="absolute bottom-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white z-20 rounded-full group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500 transition-all duration-500">
            <span className="text-xl">{icon}</span>
         </div>
      </div>
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