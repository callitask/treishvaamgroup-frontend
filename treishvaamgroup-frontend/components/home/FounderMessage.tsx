'use client'

import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

export default function FounderMessage() {
  
  // --- SEO DATA ---
  const founderSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amitsagar Kandpal",
    "jobTitle": "Founder & Chairman",
    "worksFor": {
      "@type": "Organization",
      "name": "Treishvaam Group",
      "url": "https://treishvaamgroup.com"
    },
    "description": "Visionary entrepreneur and architect of the Treishvaam Group ecosystem, focusing on finance, agriculture, and human capital.",
    "image": "https://treishvaamgroup.com/amitsagar-kandpal-photo.png",
    "sameAs": [
      "https://www.linkedin.com/in/amitsagarkandpal"
    ]
  }

  // --- ANIMATION ENGINE (Intersection Observer) ---
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Helper class: Transitions from Hidden (opacity-0, moved down) to Visible (opacity-100, original position)
  const getRevealClass = (delay: string) => 
    isVisible 
      ? `opacity-100 translate-y-0 transition-all duration-1000 ease-out ${delay}` 
      : 'opacity-0 translate-y-10'

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-white border-t border-gray-100 overflow-hidden" 
      aria-labelledby="founder-vision"
    >
      
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
      />

      {/* Subtle Background Texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-100/50 skew-x-12 translate-x-32 -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* 1. VISUAL IDENTITY */}
          <div className={`w-full lg:w-5/12 flex justify-center lg:justify-end ${getRevealClass('')}`}>
            <div className="relative w-72 h-80 md:w-80 md:h-96 group">
              
              {/* Image Container */}
              <div className="absolute inset-0 bg-gray-200 rounded-sm overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100">
                <Image 
                  src="/amitsagar-kandpal-photo.png" 
                  alt="Amitsagar Kandpal - Founder of Treishvaam Group"
                  fill
                  className="object-cover object-top transition-transform duration-[1.5s] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-gold-500/30 -z-10" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-gold-500/30 -z-10" />
              
              {/* Name Plate */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-max bg-white px-8 py-3 shadow-xl border border-gray-50 rounded-sm">
                <h3 className="text-xl font-serif text-corporate-900 leading-none">Amitsagar Kandpal</h3>
                <p className="text-[10px] text-gold-600 font-bold uppercase tracking-widest text-center mt-1">Founder & Chairman</p>
              </div>
            </div>
          </div>

          {/* 2. PHILOSOPHICAL NARRATIVE */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            
            {/* Tagline */}
            <div className={`inline-flex items-center gap-2 mb-6 ${getRevealClass('delay-200')}`}>
               <span className="w-8 h-[1px] bg-gold-600"></span>
               <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-600">Chairman's Message</span>
            </div>

            {/* Headline */}
            <h2 
              id="founder-vision" 
              className={`text-3xl md:text-5xl font-serif text-corporate-900 mb-8 leading-[1.2] ${getRevealClass('delay-300')}`}
            >
              Architecting the <br/>
              <span className="italic text-gold-600">Substrates of Permanence.</span>
            </h2>

            {/* Content Body */}
            <div className={`prose prose-lg text-corporate-600 font-light leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 ${getRevealClass('delay-500')}`}>
              <p className="mb-6">
                <FaQuoteLeft className="inline-block text-gold-300 text-2xl mr-3 -mt-3" />
                At Treishvaam Group, we are not merely building companies; we are engineering the structural necessities of a resilient future. My philosophy is rooted in a simple conviction: true value lies at the intersection of <strong className="text-corporate-900 font-medium">digital efficiency</strong> and <strong className="text-corporate-900 font-medium">tangible sovereignty</strong>.
              </p>
              <p>
                In an era of transience, we are committed to the long game. Whether we are decoding capital markets, revolutionizing nutritional supply chains, or liberating human potential from bureaucratic friction, our ideology remains constant—to build self-sustaining ecosystems that empower nations and individuals alike. We do not just predict the future; we build the infrastructure that makes it possible.
              </p>
            </div>

            {/* Signature Stats Footer */}
            <div className={`flex flex-col md:flex-row items-center lg:justify-start justify-center gap-8 mt-10 border-t border-gray-100 pt-8 ${getRevealClass('delay-700')}`}>
              <div className="flex items-center gap-4">
                 <div className="text-4xl font-serif text-gold-500">3</div>
                 <div className="text-xs text-gray-500 uppercase tracking-wide font-medium text-left">
                    Global <br/> Verticals
                 </div>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
              <div className="flex items-center gap-4">
                 <div className="text-4xl font-serif text-gold-500">∞</div>
                 <div className="text-xs text-gray-500 uppercase tracking-wide font-medium text-left">
                    Infinite <br/> Possibility
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}