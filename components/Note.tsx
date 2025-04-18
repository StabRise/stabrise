import React from 'react'

interface NoteProps {
  title?: string
  description?: string
  icon?: string
  className?: string
  children?: React.ReactNode
}

const Note: React.FC<NoteProps> = ({
  title,
  description = '',
  icon = 'ℹ️',
  className = '',
  children,
}) => {
  return (
    <div className={`bg-primary-50 text-md border-l-3 border-blue-800 p-3 shadow-sm ${className}`}>
      <div className="flex items-start space-x-3">
        <span className="text-xl">{icon}</span> {/* Increased icon size */}
        <div>
          {title && <span className="font-semibold text-gray-800">{title}</span>}
          {/* Use description if available */}
          {description && <p className="text-gray-600">{description}</p>}
          {/* Render children passed into the component */}
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Note
