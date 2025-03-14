import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="sd:text-5xl px-6 pt-12 pb-6 text-center text-4xl font-semibold text-gray-800 sm:pt-18 lg:text-5xl">
      {children}
    </h1>
  )
}
