'use client'

interface ScrollToTopButtonProps {
  className?: string
}

export default function ScrollToTopButton({ className = '' }: ScrollToTopButtonProps) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`w-12 h-12 bg-accent hover:bg-red-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  )
}
