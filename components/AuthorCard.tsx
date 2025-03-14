import Image from '@/components/Image'
import Link from '@/components/Link'

type AuthorProps = {
  name: string
  avatar?: string // Avatar is optional
  occupation?: string
  linkedin?: string // LinkedIn is optional
  github?: string // GitHub is optional
}

const AuthorCard = ({ name, avatar, occupation, linkedin, github }: AuthorProps) => {
  const profileLink = linkedin || github // If linkedin exists, use it, otherwise fallback to github

  return (
    <div key={name} className="flex items-center">
      {avatar && (
        <Image
          src={avatar}
          width={40}
          height={40}
          alt="avatar"
          className="h-10 w-10 rounded-full"
        />
      )}
      <div className="ml-2">
        {profileLink ? (
          <Link href={profileLink} className="text-sm text-gray-800 hover:text-gray-700">
            {name}
          </Link>
        ) : (
          <p className="text-sm text-gray-800">{name}</p> // Fallback if neither LinkedIn nor GitHub is provided
        )}
        <p className="text-xs text-gray-500">{occupation}</p>
      </div>
    </div>
  )
}

export default AuthorCard
