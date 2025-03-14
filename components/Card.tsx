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
  <div className="mx-auto rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl">
    <Link href={href} aria-label={`Link to ${title}`}>
      {/* If there is an image, display it */}
      {imgSrc ? (
        <div className="overflow-hidden rounded-t-lg">
          <Image
            alt={title}
            src={imgSrc}
            className="w-full object-cover object-center"
            width={544}
            height={306}
          />
        </div>
      ) : (
        <H3 className="bg-primary-100 rounded-t-lg">
          <p className="px-4 py-10">{title}</p>
        </H3>
      )}

      {/* Divider */}
      <hr className="mb-4 border-gray-300" />

      {/* Content Section */}
      <div className="grey-700 px-6 pb-6">
        {/* Description */}
        <p className="text-justify text-base leading-relaxed text-gray-700 italic">{description}</p>

        {/* Features List */}
        {features && <FeaturesList features={features} />}
      </div>
    </Link>
  </div>
)

export default Card
