'use client'

export default function FooterNewsletter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle newsletter subscription
  }

  return (
    <div className="border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-slate-400">Get the latest insights and updates from Treishvaam Group delivered to your inbox.</p>
          </div>
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-slate-400 border border-slate-700 focus:outline-none focus:border-accent-600 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
