import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

export default function ContactPage() {
  return (
    <main className="bg-white pt-24">
      <section className="py-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
           <h1 className="text-5xl font-serif text-corporate-900 text-center mb-4">Get in Touch</h1>
           <p className="text-slate-500 text-center mb-16">
             Our team is at your disposal. Connect with our corporate headquarters.
           </p>

           <div className="grid md:grid-cols-2 gap-12">
              
              {/* Form */}
              <div className="bg-surface-50 p-8 md:p-12 border border-gray-100">
                 <h3 className="text-2xl font-serif text-corporate-900 mb-8">Send a Message</h3>
                 <form className="space-y-6">
                    <div>
                       <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
                       <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                    </div>
                    <div>
                       <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                       <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors" />
                    </div>
                    <div>
                       <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Inquiry</label>
                       <textarea rows={4} className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors"></textarea>
                    </div>
                    <button className="w-full bg-corporate-900 text-white font-bold uppercase tracking-widest text-xs py-4 hover:bg-gold-500 transition-colors">
                      Submit Inquiry
                    </button>
                 </form>
              </div>

              {/* Info */}
              <div className="space-y-8 flex flex-col justify-center">
                 <InfoBlock 
                    icon={FiMapPin} 
                    title="Global Headquarters" 
                    desc="Treishvaam Towers, Financial District, Mumbai, India" 
                 />
                 <InfoBlock 
                    icon={FiMail} 
                    title="General Inquiries" 
                    desc="info@treishvaamgroup.com" 
                 />
                 <InfoBlock 
                    icon={FiPhone} 
                    title="Corporate Line" 
                    desc="+91 22 4567 8900" 
                 />
                 
                 <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-sm text-slate-400">
                      For investor specific inquiries, please visit our <a href="/investors" className="text-gold-600 underline">Investor Portal</a>.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </main>
  )
}

function InfoBlock({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-6 items-start">
       <div className="w-12 h-12 bg-surface-100 flex items-center justify-center text-gold-600 text-xl shrink-0">
         <Icon />
       </div>
       <div>
          <h4 className="font-serif text-lg text-corporate-900">{title}</h4>
          <p className="text-slate-500 mt-1">{desc}</p>
       </div>
    </div>
  )
}