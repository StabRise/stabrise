'use client'

import { useEffect } from 'react'

const CalendlyWidget = () => {
  useEffect(() => {
    // Dynamically load Calendly's script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/stabrise"
      style={{ minWidth: '320px', height: '630px' }}
    ></div>
  )
}

export default CalendlyWidget
