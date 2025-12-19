import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function Card({ children, className = '', hoverEffect = true }: CardProps) {
  return (
    <div 
      className={`
        bg-white/80 backdrop-blur-md border border-white/50 shadow-glass rounded-sm p-6
        ${hoverEffect ? 'transition-all duration-500 hover:shadow-glow hover:-translate-y-1 hover:border-gold-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}