import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium transition-all duration-150 transform hover:bg-gray-200 hover:text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
