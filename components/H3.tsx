import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  withPadding?: boolean
}

export default function H3({ children, className = '', withPadding }: Props) {
  return (
    <h3
      className={`${
        withPadding ? 'px-6 pt-6 pb-3 sm:pt-8' : ''
      } sd:text-3xl text-center text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-gray-100 ${className}`}
    >
      {children}
    </h3>
  )
}
