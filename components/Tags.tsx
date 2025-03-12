// components/Tags.js

import { FaTag } from 'react-icons/fa'; // Assuming you're using react-icons
import Tag from './Tag'; // Import the Tag component

const Tags = ({ tags }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="flex items-center space-x-2">
      <FaTag className="h-4 w-4 text-gray-500" />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default Tags;
