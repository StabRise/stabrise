// components/Tags.js

import { FaTag } from 'react-icons/fa' // Assuming you're using react-icons
import Tag from './Tag' // Import the Tag component

const Tags = ({ tags }) => {
  if (!tags || tags.length === 0) return null

  return (
    <div className="flex pl-2 text-xs">
      <div className="flex flex-wrap gap-1">
        <FaTag className="text-primary-500 mt-1 h-4 w-4 pt-1" />
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </div>
  )
}

export default Tags
