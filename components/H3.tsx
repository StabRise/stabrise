import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string // Optional className prop
}

export default function H3({ children, className }: Props) {
  return (
    <h3
      className={`sd:text-3xl px-6 pt-6 pb-3 text-center text-2xl font-semibold text-gray-800 sm:pt-8 lg:text-3xl ${className || ''}`}
    >
      {children}
    </h3>
  )
}
