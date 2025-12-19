import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const articles = [
  { title: 'Treishvaam Expands Operations to Asia', date: 'December 15, 2025', excerpt: 'We are excited to announce our expansion into key Asian markets...' },
  { title: 'New Sustainability Initiative Launched', date: 'December 10, 2025', excerpt: 'Treishvaam Group commits to net-zero emissions by 2030...' },
  { title: 'Strategic Partnership Announced', date: 'December 5, 2025', excerpt: 'We partner with leading global organizations to drive innovation...' },
]

export default function NewsroomPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Newsroom</h1>
            <p className="text-xl text-gray-200">Latest updates and press releases from Treishvaam Group.</p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {articles.map((article, index) => (
                <article key={index} className="bg-light-bg p-8 rounded-lg border-l-4 border-secondary hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-primary-900 mb-2">{article.title}</h2>
                      <p className="text-secondary font-semibold text-sm">{article.date}</p>
                    </div>
                  </div>
                  <p className="text-text-secondary mb-4">{article.excerpt}</p>
                  <a href="#" className="text-secondary hover:text-secondary/80 font-semibold text-sm">
                    Read Full Story →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-200">Stay updated with latest news and announcements</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
