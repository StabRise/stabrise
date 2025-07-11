import Image from './Image'
import Link from './Link'
import FeaturesList from '@/components/FeaturesList'
import H3 from '@/components/H3'

interface CardProps {
  title: string
  description: string
  imgSrc?: string // Optional image source
  href: string
  features?: string[] // Optional features list
}

const Card: React.FC<CardProps> = ({ title, description, imgSrc, href, features }) => (
  <div className="mx-auto h-full transform rounded-lg bg-white shadow-lg transition duration-300 hover:scale-[1.03] hover:shadow-2xl dark:bg-gray-900 dark:shadow-none dark:hover:shadow-xl">
    <Link href={href} aria-label={`Link to ${title}`}>
      {/* If there is an image, display it */}
      {imgSrc ? (
        <div className="overflow-hidden rounded-t-lg bg-gradient-to-tr dark:from-gray-950 dark:to-gray-800">
          <Image
            alt={title}
            src={imgSrc}
            className="w-full object-cover object-center"
            width={544}
            height={306}
          />
        </div>
      ) : (
        <H3 className="rounded-t-lg bg-gray-50 dark:bg-gray-800">
          <p className="px-4 py-10 text-gray-900 dark:text-gray-100">{title}</p>
        </H3>
      )}

      {/* Divider */}
      <hr className="mb-4 border-gray-300 dark:border-gray-700" />

      {/* Content Section */}
      <div className="px-6 pb-6">
        {/* Description */}
        <p className="text-justify text-base leading-relaxed text-gray-700 italic dark:text-gray-300">
          {description}
        </p>

        {/* Features List */}
        {features && <FeaturesList features={features} />}
      </div>
    </Link>
  </div>
)

export default Card
