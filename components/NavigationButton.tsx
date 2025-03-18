'use client'

import { useRouter } from 'next/navigation'

interface NavigationButtonProps {
  href: string
  className?: string
  children: React.ReactNode
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ href, className = '', children }) => {
  const router = useRouter()
  const isInternalLink = href && href.startsWith('/')
  if (!isInternalLink) {
    return (
      <a
        href={href}
        target="_blank"
        className={`${className} button rounded-md px-6 py-2 transition-colors`}
      >
        {children}
      </a>
    )
  }

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault()
    router.push(href)
  }

  return (
    <button onClick={handleClick} className={`${className} rounded-md px-6 py-2 transition-colors`}>
      {children}
    </button>
  )
}

export default NavigationButton
