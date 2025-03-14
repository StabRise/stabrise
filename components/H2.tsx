import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string // Optional className prop
}

export default function H2({ children, className }: Props) {
  return (
    <h2
      className={`sd:text-4xl px-6 pt-2 pb-3 text-center text-3xl font-semibold text-gray-800 sm:pt-4 lg:text-4xl ${className || ''}`}
    >
      {children}
    </h2>
  )
}
