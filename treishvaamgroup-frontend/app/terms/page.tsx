export default function TermsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Use</h1>
          <p className="text-xl text-gray-200">Please read these terms carefully before using our website and services.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-text-secondary leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">2. Use License</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Treishvaam Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <span className="text-secondary mr-3 font-bold">•</span>
                <span>Modifying or copying the materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 font-bold">•</span>
                <span>Using the materials for any commercial purpose or for any public display</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 font-bold">•</span>
                <span>Attempting to decompile or reverse engineer any software contained on the website</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 font-bold">•</span>
                <span>Removing any copyright or other proprietary notations from the materials</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">3. Disclaimer</h2>
            <p className="text-text-secondary leading-relaxed">
              The materials on Treishvaam Group's website are provided on an 'as is' basis. Treishvaam Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">4. Limitations</h2>
            <p className="text-text-secondary leading-relaxed">
              In no event shall Treishvaam Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Treishvaam Group's website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">5. Accuracy of Materials</h2>
            <p className="text-text-secondary leading-relaxed">
              The materials appearing on Treishvaam Group's website could include technical, typographical, or photographic errors. Treishvaam Group does not warrant that any of the materials on our website are accurate, complete, or current. Treishvaam Group may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">6. Links</h2>
            <p className="text-text-secondary leading-relaxed">
              Treishvaam Group has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Treishvaam Group of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">7. Modifications</h2>
            <p className="text-text-secondary leading-relaxed">
              Treishvaam Group may revise these terms of use for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of use.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">8. Governing Law</h2>
            <p className="text-text-secondary leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Bangalore, Karnataka, India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div className="border-t pt-8 mt-8">
            <p className="text-sm text-text-secondary">
              Last updated: January 2026. These terms of use may be updated periodically at our sole discretion.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}