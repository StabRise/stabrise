import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  addMinHeight?: boolean
}

export default function SectionContainer({ children, className, addMinHeight = true }: Props) {
  return (
    <section
      className={`${
        addMinHeight ? 'min-h-[50vh]' : ''
      } ${className || ''} flex items-center justify-center`}
    >
      <div
        className={`mx-auto w-full max-w-5xl px-0 sm:px-6 lg:px-8 ${addMinHeight ? 'py-0 sm:py-8' : 'py-0'}`}
      >
        <div
          className={`rounded bg-white sm:shadow-lg dark:bg-gray-900 dark:sm:shadow-md ${
            addMinHeight ? 'py-6 sm:py-0' : 'py-3'
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
