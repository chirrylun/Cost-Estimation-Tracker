import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export const Card: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  )
}

export const CardHeader: React.FC<CardProps> = ({ className = '', children }) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>
}

export const CardTitle: React.FC<CardProps> = ({ className = '', children }) => {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>
}

export const CardContent: React.FC<CardProps> = ({ className = '', children }) => {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>
}