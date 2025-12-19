import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  noPadding?: boolean
  bordered?: boolean
  hover?: boolean
  clickable?: boolean
}

export default function Card({
  children,
  className = '',
  noPadding = false,
  bordered = true,
  hover = false,
  clickable = false,
}: CardProps) {
  const baseStyles = 'bg-white rounded-lg transition-all duration-300'
  const paddingStyles = noPadding ? '' : 'p-6'
  const borderStyles = bordered ? 'border border-slate-200' : ''
  const shadowStyles = 'shadow-subtle'
  const hoverStyles = hover ? 'hover:shadow-md hover:border-slate-300' : ''
  const cursorStyles = clickable ? 'cursor-pointer' : ''

  return (
    <div
      className={`${baseStyles} ${paddingStyles} ${borderStyles} ${shadowStyles} ${hoverStyles} ${cursorStyles} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
