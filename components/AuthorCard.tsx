import Image from '@/components/Image'
import Link from '@/components/Link'

type AuthorProps = {
  name: string
  avatar?: string // Avatar is optional
  occupation?: string
  profileLink?: string // profileLink is optional
}

const AuthorCard = ({ name, avatar, occupation, profileLink }: AuthorProps) => {
  return (
    <div key={name} className="flex items-center">
      {avatar && (
        <Image src={avatar} width={40} height={40} alt={name} className="h-10 w-10 rounded-full" />
      )}
      <div className="ml-2">
        {profileLink ? (
          <Link
            href={profileLink}
            className="hover:text-primary-500 dark:hover:text-primary-400 text-sm text-gray-800 dark:text-gray-300"
          >
            {name}
          </Link>
        ) : (
          <p className="text-sm text-gray-800 dark:text-gray-300">{name}</p>
        )}
        <p className="text-xs text-gray-500 dark:text-gray-400">{occupation}</p>
      </div>
    </div>
  )
}

export default AuthorCard
