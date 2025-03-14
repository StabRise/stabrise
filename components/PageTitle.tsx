import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  withPadding?: boolean // Optional prop to control padding, default is true
  cssClass?: string // Optional custom CSS class
}

export default function PageTitle({ children, withPadding = true, cssClass = '' }: Props) {
  return (
    <h1
      className={`sd:text-5xl text-center text-4xl font-semibold text-gray-800 lg:text-5xl ${
        withPadding ? 'px-6 py-6 pt-12 pb-6 sm:py-8 sm:pt-18' : '' // Conditionally add padding based on withPadding prop
      } ${cssClass}`} // Allow custom CSS classes via cssClass prop
    >
      {children}
    </h1>
  )
}
