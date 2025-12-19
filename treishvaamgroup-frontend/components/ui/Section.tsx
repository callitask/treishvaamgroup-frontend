import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  fullBleed?: boolean
  spacingY?: 'sm' | 'md' | 'lg' | 'xl'
  bgColor?: 'white' | 'slate' | 'corporate'
  id?: string
}

export default function Section({
  children,
  className = '',
  fullBleed = false,
  spacingY = 'lg',
  bgColor = 'white',
  id,
}: SectionProps) {
  const spacingMap = {
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-24',
    xl: 'py-20 sm:py-32',
  }

  const bgColorMap = {
    white: 'bg-white',
    slate: 'bg-slate-50 border-y border-slate-200',
    corporate: 'bg-corporate-50 border-y border-corporate-100',
  }

  const containerClass = fullBleed ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'

  return (
    <section
      id={id}
      className={`${bgColorMap[bgColor]} ${spacingMap[spacingY]}`.trim()}
    >
      <div className={`${containerClass} ${className}`.trim()}>
        {children}
      </div>
    </section>
  )
}
