import { FiSun, FiMonitor, FiLayers } from 'react-icons/fi'

export default function Sustainability() {
  return (
    <main className="pt-24 bg-white">
      <section className="py-20 container mx-auto px-6">
        <span className="text-green-600 font-bold tracking-widest uppercase text-xs mb-4 block">Our Pledge</span>
        <h1 className="text-5xl md:text-7xl font-serif text-corporate-900 mb-8">
          Born <span className="italic text-green-600">Green.</span>
        </h1>
        <p className="text-xl text-corporate-500 max-w-2xl mb-16">
          We don't need to transition to sustainability because we are starting there. Our manufacturing and digital operations are designed for Net-Zero from Day 1.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Agro Tech */}
          <div className="bg-surface-50 p-10 border-t-4 border-gold-500">
            <FiSun className="text-4xl text-gold-500 mb-6" />
            <h3 className="text-2xl font-serif mb-4">Solar-Powered Dehydration</h3>
            <p className="text-corporate-500 leading-relaxed">
              For <strong>Treishvaam Agro</strong>, we are implementing advanced solar-drying technology. Unlike conventional dryers that use coal or gas, our facilities harness the sun to preserve nutrients, ensuring a near-zero carbon footprint for our powder production.
            </p>
          </div>

          {/* Digital Tech */}
          <div className="bg-surface-50 p-10 border-t-4 border-corporate-900">
            <FiMonitor className="text-4xl text-corporate-900 mb-6" />
            <h3 className="text-2xl font-serif mb-4">The Paperless Enterprise</h3>
            <p className="text-corporate-500 leading-relaxed">
              <strong>Treishvaam Finance</strong> and <strong>THM</strong> operate on a 100% digital cloud infrastructure. By eliminating physical paperwork and promoting remote-first teams, we drastically reduce corporate waste and commuting emissions.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}