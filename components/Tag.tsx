import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="transform rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 transition-all duration-150 hover:bg-gray-200 hover:text-gray-800 focus:ring-1 focus:ring-gray-300 focus:outline-none"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
