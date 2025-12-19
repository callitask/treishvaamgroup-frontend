import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-200">Your privacy is important to us. Learn how we protect your data.</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">1. Information We Collect</h2>
              <p className="text-text-secondary leading-relaxed">
                We collect information you provide directly to us, such as when you fill out a form, make a purchase, or contact us. This may include your name, email address, phone number, and other contact information. We also automatically collect certain information about your device and how you interact with our website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary mr-3 font-bold">•</span>
                  <span>Providing, maintaining, and improving our services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 font-bold">•</span>
                  <span>Communicating with you about updates and promotions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 font-bold">•</span>
                  <span>Processing transactions and sending related information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 font-bold">•</span>
                  <span>Analyzing usage patterns to enhance user experience</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">3. Data Security</h2>
              <p className="text-text-secondary leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and access controls.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">4. Third-Party Sharing</h2>
              <p className="text-text-secondary leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">5. Your Rights</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-start">
                  <span className="text-secondary mr-3 font-bold">•</span>
                  <span>Access your personal information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 font-bold">•</span>
                  <span>Request corrections to inaccurate data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 font-bold">•</span>
                  <span>Request deletion of your information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 font-bold">•</span>
                  <span>Opt-out of marketing communications</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">6. Cookies</h2>
              <p className="text-text-secondary leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-4">7. Contact Us</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                If you have questions or concerns about our privacy practices, please contact us at:
              </p>
              <div className="bg-light-bg p-6 rounded-lg">
                <p className="text-text-secondary"><strong>Treishvaam Group</strong></p>
                <p className="text-text-secondary">Email: privacy@treishvaam.com</p>
                <p className="text-text-secondary">Phone: +1 (555) 123-4567</p>
              </div>
            </div>

            <div className="border-t pt-8 mt-8">
              <p className="text-sm text-text-secondary">
                Last updated: December 2025. This privacy policy may be updated periodically to reflect changes in our practices.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
