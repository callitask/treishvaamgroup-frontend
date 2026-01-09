'use client'

import HeroSection from '@/components/home/HeroSection'
import FounderMessage from '@/components/home/FounderMessage'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { FiArrowRight, FiTrendingUp, FiSun, FiUsers, FiGlobe, FiLayers, FiCpu, FiShield, FiZap, FiBox, FiCheckCircle, FiDatabase, FiLock, FiHexagon, FiBriefcase, FiAnchor, FiActivity, FiUser, FiCheck, FiClock, FiWifi, FiServer } from 'react-icons/fi'

export default function Home() {
  
  // --- INFRASTRUCTURE HEALTH ENGINE ---
  const [metrics, setMetrics] = useState({
    uptime: 99.9,
    security: 100,
    performance: 98,
    networkHealth: 99,
    status: 'Operational',
    latency: '24ms'
  })

  // --- ANIMATION ENGINE (ECOSYSTEM SECTION) ---
  const ecosystemRef = useRef<HTMLElement>(null)
  const [isEcoVisible, setIsEcoVisible] = useState(false)

  useEffect(() => {
    // 1. Metrics Simulation
    // @ts-ignore
    const conn = typeof navigator !== 'undefined' && navigator.connection ? navigator.connection : { downlink: 10 };

    const interval = setInterval(() => {
      setMetrics(prev => {
        const newPerf = Math.min(100, Math.max(92, prev.performance + (Math.random() * 2 - 1)));
        const avg = Math.round((99.9 + 100 + newPerf) / 3);
        const latencyVal = Math.round(Math.random() * 30 + 15);

        return {
          uptime: 99.9,
          security: 100,
          performance: parseFloat(newPerf.toFixed(1)),
          networkHealth: avg,
          status: 'Operational',
          latency: `${latencyVal}ms`
        }
      })
    }, 3000);

    // 2. Intersection Observer for Ecosystem Animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsEcoVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 } // Trigger when 15% is visible
    )

    if (ecosystemRef.current) observer.observe(ecosystemRef.current)

    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  // Helper for reveal classes
  const getRevealClass = (delay: string) => 
    isEcoVisible 
      ? `opacity-100 translate-y-0 transition-all duration-1000 ease-out ${delay}` 
      : 'opacity-0 translate-y-16'

  return (
    <main className="bg-white font-sans selection:bg-gold-500 selection:text-white overflow-hidden">
      <HeroSection />

      {/* =========================================================================
          SECTION 1: THE ECOSYSTEM (INFRASTRUCTURE VISUALIZATION)
          ========================================================================= */}
      <section 
        ref={ecosystemRef}
        className="py-28 relative bg-gray-50/50 overflow-hidden border-b border-gray-100"
      >
        
        {/* Background: Mesh Gradient Blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-100/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-200/40 rounded-full blur-[90px] -z-10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            {/* LEFT COLUMN: Text Content (Staggered Reveal) */}
            <div className="max-w-xl">
              
              {/* Badge */}
              <div className={`flex items-center gap-3 mb-6 ${getRevealClass('')}`}>
                <span className="h-[2px] w-8 bg-gold-600"></span>
                <span className="text-gold-600 font-bold tracking-[0.2em] uppercase text-[10px]">The Ecosystem</span>
              </div>
              
              {/* Headline */}
              <h2 className={`text-4xl md:text-5xl font-serif text-black mb-6 leading-[1.15] ${getRevealClass('delay-100')}`}>
                Architecting <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gold-600 to-gray-800 italic">
                  Value Chains.
                </span>
              </h2>
              
              {/* Description */}
              <p className={`text-lg text-gray-600 font-light leading-relaxed mb-8 ${getRevealClass('delay-200')}`}>
                We don't just participate in markets; we create them. By fusing <span className="text-black font-medium border-b border-gold-200">digital efficiency</span> with <span className="text-black font-medium border-b border-gold-200">tangible assets</span>, we are building a resilient infrastructure for the future economy.
              </p>
              
              {/* Stats Grid */}
              <div className={`grid grid-cols-3 gap-4 pt-6 ${getRevealClass('delay-300')}`}>
                <ModernStatBox number="03" label="Verticals" icon={<FiLayers />} />
                <ModernStatBox number="Global" label="Scale" icon={<FiGlobe />} />
                <ModernStatBox number="100%" label="Digital" icon={<FiCpu />} />
              </div>
            </div>

            {/* RIGHT COLUMN: The Densified Isometric Visualization (Delayed Reveal) */}
            {/* Wrapper div handles the entrance animation to avoid conflict with inner 3D transforms */}
            <div className={`w-full ${getRevealClass('delay-500')}`}>
              <div className="relative h-[700px] w-full flex items-center justify-center lg:justify-end perspective-[2000px]">
                 
                 {/* --- PERIPHERAL ELEMENTS --- */}
                 
                 {/* 1. Global Operations Card */}
                 <div className="absolute top-1/3 -left-12 w-40 px-4 py-3 bg-white/95 backdrop-blur-md border border-gray-100 rounded-lg shadow-xl transform rotate-y-12 rotate-z-[-5deg] animate-float z-20 flex flex-col gap-2">
                    <div className="flex items-center justify-between border-b border-gray-50 pb-1">
                       <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Operations</span>
                       <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="p-1.5 bg-gold-50 rounded-md">
                          <FiGlobe className="text-gold-600 text-lg" />
                       </div>
                       <div>
                          <div className="text-xs font-serif font-bold text-gray-900 leading-none mb-0.5">Global Reach</div>
                          <div className="text-[8px] text-gray-500 font-medium">Expansion Active</div>
                       </div>
                    </div>
                 </div>

                 {/* 2. Talent Network Node */}
                 <div className="absolute bottom-40 -right-5 w-32 px-3 py-2 bg-white/90 backdrop-blur-md border border-gray-100 rounded-lg shadow-lg transform rotate-y-[-12deg] rotate-z-[5deg] animate-float delay-200 z-10">
                    <div className="flex items-center gap-2 mb-2">
                       <FiUsers className="text-gold-500 text-xs" />
                       <span className="text-[9px] font-bold text-gray-500 uppercase">Talent Node</span>
                    </div>
                    <div className="flex -space-x-2">
                       <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[8px] text-gray-600">A</div>
                       <div className="w-6 h-6 rounded-full bg-gold-100 border-2 border-white flex items-center justify-center text-[8px] text-gold-600">B</div>
                       <div className="w-6 h-6 rounded-full bg-gray-800 border-2 border-white flex items-center justify-center text-[8px] text-white">+</div>
                    </div>
                 </div>

                 {/* 3. Agro-Tech Sphere */}
                 <div className="absolute top-24 left-10 w-16 h-16 rounded-full border border-gold-400/30 flex items-center justify-center animate-float delay-500 -z-10 bg-white/50 backdrop-blur-sm">
                    <div className="absolute inset-0 rounded-full border-t-2 border-gold-400 animate-spin"></div>
                    <FiSun className="text-gold-600 text-2xl fill-gold-100" />
                 </div>

                 {/* 4. Hexagon Cluster */}
                 <div className="absolute top-20 right-0 flex flex-col gap-1 transform rotate-z-[15deg] animate-float delay-500 -z-10">
                    <FiHexagon className="text-gold-200 text-3xl fill-gold-50/50" />
                    <div className="flex gap-1 -mt-2 ml-4">
                       <FiHexagon className="text-gray-200 text-2xl" />
                       <FiHexagon className="text-gold-300 text-2xl fill-gold-50" />
                    </div>
                 </div>

                 {/* 5. Candidate Match Card */}
                 <div className="absolute top-[55%] -left-8 px-3 py-2 bg-white/90 backdrop-blur-md border border-gray-100 rounded-lg shadow-lg transform -rotate-z-[8deg] animate-float delay-700 z-10 flex items-center gap-3">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200">
                        <FiUser className="text-gray-400 text-sm" />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                         <FiCheck className="text-white text-[8px]" />
                      </div>
                    </div>
                    <div>
                       <div className="text-[9px] font-bold text-gray-800 leading-none">Top Talent</div>
                       <div className="text-[7px] font-medium text-gold-600 uppercase tracking-wider mt-0.5">Matched</div>
                    </div>
                 </div>

                 {/* 6. Hiring Velocity Badge */}
                 <div className="absolute top-[55%] right-0 px-3 py-2 bg-gold-50/90 backdrop-blur-sm border border-gold-100 rounded-lg shadow-sm transform rotate-z-[6deg] animate-float delay-1000 z-10 flex items-center gap-2">
                     <div className="p-1 bg-white rounded-md shadow-sm">
                        <FiClock className="text-gold-600 text-xs" />
                     </div>
                     <div>
                        <div className="text-[8px] font-bold text-gray-500 uppercase">Time-to-Hire</div>
                        <div className="text-[10px] font-bold text-gray-900 leading-none">-40% Faster</div>
                     </div>
                 </div>

                 {/* 7. Grid & Lines */}
                 <div className="absolute bottom-10 left-0 w-full h-64 bg-[radial-gradient(#9ca3af_1px,transparent_1px)] [background-size:20px_20px] transform rotate-x-[75deg] opacity-20 -z-50 pointer-events-none"></div>
                 <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-30">
                    <line x1="20%" y1="20%" x2="40%" y2="40%" stroke="#B08D55" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="80%" y1="70%" x2="60%" y2="50%" stroke="#B08D55" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="10%" y1="55%" x2="30%" y2="50%" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="2,2" />
                 </svg>

                 {/* 8. Wireframe Cubes */}
                 <div className="absolute top-40 left-0 w-24 h-24 border border-gray-200 rounded-xl transform rotate-x-[60deg] rotate-z-[20deg] animate-[spin_40s_linear_infinite] -z-20 opacity-50"></div>
                 <div className="absolute bottom-32 right-10 w-32 h-32 border border-gold-200/40 rounded-xl transform rotate-x-[60deg] rotate-z-[-20deg] animate-[spin_50s_linear_infinite_reverse] -z-20 opacity-50"></div>


                 {/* --- MAIN ISOMETRIC STACK (CORE) --- */}
                 <div className="relative w-[320px] h-[420px] transform rotate-x-[60deg] rotate-z-[45deg] hover:rotate-z-[40deg] transition-transform duration-1000 ease-out preserve-3d z-10 my-10">
                    
                    {/* LAYER 1: BOTTOM (Infrastructure) */}
                    <div className="absolute inset-0 bg-gray-900 rounded-xl shadow-2xl transform translate-z-0 border border-gray-700 group">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                           <FiBox className="text-gray-600 text-3xl" />
                           <span className="text-gray-600 font-mono text-[10px] tracking-widest uppercase">Base Layer</span>
                        </div>
                    </div>

                    {/* LAYER 2: MIDDLE (Network Flow) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl shadow-[0_20px_50px_rgba(176,141,85,0.3)] transform translate-z-[70px] animate-[float-iso_6s_ease-in-out_infinite] border border-gold-300 overflow-hidden">
                        <div className="absolute inset-0 bg-white/10"></div>
                        <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-45 animate-[shimmer_3s_infinite]"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm shadow-inner">
                              <FiServer className="text-white text-4xl" />
                           </div>
                        </div>
                    </div>

                    {/* LAYER 3: TOP (INFRASTRUCTURE HEALTH VISUALIZATION) */}
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-xl shadow-lg border border-white/60 transform translate-z-[140px] animate-[float-iso_6s_ease-in-out_infinite_reverse]">
                        <div className="p-8 h-full flex flex-col justify-between">
                           
                           {/* Header */}
                           <div className="flex justify-between items-center">
                              <div className="px-3 py-1 rounded-full bg-white/50 text-gold-700 text-[10px] font-bold uppercase shadow-sm border border-gold-100 flex items-center gap-2">
                                <span>System Status</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                              </div>
                              <FiActivity className="text-gold-600 text-sm" />
                           </div>
                           
                           {/* INFRASTRUCTURE METRICS */}
                           <div className="space-y-3 opacity-90">
                              
                              {/* Uptime Bar */}
                              <div className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div>
                                 <div className="h-1.5 w-full bg-gray-200/50 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gray-900 rounded-full transition-all duration-700 ease-out"
                                      style={{ width: `${metrics.uptime}%` }}
                                    ></div>
                                 </div>
                                 <span className="text-[8px] font-bold text-gray-600 uppercase w-6 text-right">{metrics.uptime}%</span>
                              </div>
                               <div className="text-[7px] text-gray-400 pl-4 -mt-2 uppercase tracking-wider">Uptime</div>

                              {/* Security Bar */}
                              <div className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                                 <div className="h-1.5 w-full bg-gray-200/50 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gold-500 rounded-full transition-all duration-700 ease-out"
                                      style={{ width: `${metrics.security}%` }}
                                    ></div>
                                 </div>
                                 <span className="text-[8px] font-bold text-gray-600 uppercase w-6 text-right">{metrics.security}%</span>
                              </div>
                              <div className="text-[7px] text-gray-400 pl-4 -mt-2 uppercase tracking-wider">Security</div>

                              {/* Performance Bar */}
                              <div className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                                 <div className="h-1.5 w-full bg-gray-200/50 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gray-500 rounded-full transition-all duration-700 ease-out"
                                      style={{ width: `${metrics.performance}%` }}
                                    ></div>
                                 </div>
                                 <span className="text-[8px] font-bold text-gray-600 uppercase w-6 text-right">{Math.round(metrics.performance)}%</span>
                              </div>
                              <div className="text-[7px] text-gray-400 pl-4 -mt-2 uppercase tracking-wider">Speed</div>
                           </div>

                           {/* Footer: Network Health */}
                           <div className="pt-6 border-t border-white/30 flex justify-between items-end">
                              <div>
                                 <div className="text-[10px] text-gray-600 uppercase tracking-wider mb-1">Network Health</div>
                                 <div className="text-3xl font-serif text-gray-900 leading-none transition-all duration-500">{metrics.networkHealth}%</div>
                                 <div className="flex items-center gap-1 mt-1">
                                   <FiWifi className="text-[8px] text-gray-400" />
                                   <div className="text-[8px] text-gold-600 font-medium uppercase tracking-widest">{metrics.status}</div>
                                 </div>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-gold-500 text-white flex items-center justify-center shadow-lg transform transition-transform duration-500 hover:scale-110">
                                 <FiCheckCircle />
                              </div>
                           </div>
                        </div>
                        
                        {/* Gloss Overlay */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/40 to-transparent pointer-events-none rounded-xl"></div>
                    </div>

                    {/* Vertical Guide Line */}
                    <div className="absolute inset-0 flex items-center justify-center transform translate-z-[35px] opacity-30 pointer-events-none">
                       <div className="w-[1px] h-[140px] border-l-2 border-dashed border-gray-400"></div>
                    </div>
                 </div>
                 
                 {/* Foreground Floating Icons (Anchors) */}
                 <div className="absolute top-1/3 right-5 w-16 h-16 bg-white rounded-xl shadow-2xl animate-bounce delay-700 flex items-center justify-center z-20 border border-gray-100">
                    <FiBriefcase className="text-gold-500 text-xl" />
                 </div>
                 <div className="absolute bottom-1/4 left-5 w-12 h-12 bg-gold-500 rounded-xl shadow-2xl animate-pulse flex items-center justify-center z-20 border border-white/20">
                    <FiAnchor className="text-white text-lg" />
                 </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1.5: FOUNDER MESSAGE & VISION (NEW)
          ========================================================================= */}
      <FounderMessage />

      {/* =========================================================================
          SECTION 2: OUR ENTERPRISES (PRESERVED)
          ========================================================================= */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
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