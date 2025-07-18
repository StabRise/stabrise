import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import PageTitle from '@/components/PageTitle'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 text-center">
            {avatar && (
              <Image
                src={avatar}
                alt={name}
                width={192}
                height={192}
                className="h-32 w-32 rounded-full border-2 border-gray-300 dark:border-gray-600"
              />
            )}
            <PageTitle cssClass="mt-6 mb-1" withPadding={false}>
              {name}
            </PageTitle>
            <div className="text-gray-600 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-600 dark:text-gray-400">{company}</div>
            <div className="flex items-center space-x-4 pt-3">
              <SocialIcon
                size={6}
                kind="mail"
                href={`mailto:${email}`}
                className="transition-colors duration-200 hover:text-blue-500"
              />
              <SocialIcon
                size={6}
                kind="github"
                href={github}
                className="transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
              />
              <SocialIcon
                size={6}
                kind="linkedin"
                href={linkedin}
                className="transition-colors duration-200 hover:text-blue-700"
              />
              <SocialIcon
                size={6}
                kind="x"
                href={twitter}
                className="transition-colors duration-200 hover:text-blue-400"
              />
              <SocialIcon
                size={6}
                kind="bluesky"
                href={bluesky}
                className="transition-colors duration-200 hover:text-sky-400"
              />
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
