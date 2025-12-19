import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">We'd love to hear from you. Let's start a conversation.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {[
                { icon: FiPhone, label: 'Phone', value: '+91 (0) 98765 43210' },
                { icon: FiMail, label: 'Email', value: 'info@treishvaam.com' },
                { icon: FiMapPin, label: 'Address', value: 'Mumbai, India' },
              ].map((contact, index) => {
                const Icon = contact.icon
                return (
                  <div key={index} className="text-center p-8 rounded-xl bg-light-bg">
                    <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{contact.label}</h3>
                    <p className="text-text-secondary">{contact.value}</p>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-light-bg p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-primary-900 mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 ring-secondary" />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 ring-secondary" />
                  <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 border border-border-light rounded-lg focus:ring-2 ring-secondary"></textarea>
                  <button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-3 rounded-lg transition-all">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-6">Get in Touch</h2>
                <p className="text-text-secondary mb-6">
                  Have a question or want to discuss partnership opportunities? Our team is ready to help. Contact us through any channel that works best for you.
                </p>
                <div className="space-y-4">
                  {['Sales Inquiries', 'Partnership Opportunities', 'Support & Service', 'Investor Relations'].map((item, index) => (
                    <p key={index} className="text-text-secondary flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-xl text-gray-200">Let's explore how we can work together</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
