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
    <div
      className={`bg-primary-50 text-md border-l-4 border-blue-800 p-3 text-gray-800 shadow-sm dark:border-blue-600 dark:bg-gray-900 dark:text-gray-200 ${className} `}
    >
      <div className="flex items-start space-x-3">
        <span className="text-xl">{icon}</span>
        <div>
          {title && <span className="font-semibold text-gray-800 dark:text-gray-100">{title}</span>}
          {description && <p className="text-gray-600 dark:text-gray-300">{description}</p>}
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Note
