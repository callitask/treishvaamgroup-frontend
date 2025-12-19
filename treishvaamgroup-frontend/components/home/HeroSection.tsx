'use client'

import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-block mb-6 px-4 py-2 bg-secondary/20 rounded-full border border-secondary/40">
              <span className="text-secondary font-semibold text-sm">WELCOME TO EXCELLENCE</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Treishvaam Group
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
              Driving Business Excellence Globally
            </p>
            
            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-lg">
              A conglomerate dedicated to innovation, sustainability, and creating lasting value across multiple sectors. We partner with businesses to transform vision into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="bg-secondary hover:bg-secondary/90 text-primary-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center group"
              >
                Explore Our Story
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
              >
                Get in Touch
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-600">
              <div>
                <div className="text-3xl font-bold text-secondary">25+</div>
                <p className="text-gray-300 text-sm">Years of Excellence</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">45</div>
                <p className="text-gray-300 text-sm">Global Offices</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">5K+</div>
                <p className="text-gray-300 text-sm">Team Members</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="hidden lg:block relative animate-fade-in">
            <div className="relative w-full h-96 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl overflow-hidden border border-secondary/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-secondary/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="w-20 h-20 bg-secondary/50 rounded-full flex items-center justify-center">
                      <span className="text-4xl">🚀</span>
                    </div>
                  </div>
                  <p className="text-white font-bold text-xl">Innovation & Growth</p>
                  <p className="text-gray-300 text-sm mt-2">Transforming industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
