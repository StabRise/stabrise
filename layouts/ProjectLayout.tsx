import { ReactNode } from 'react'
import type { Blog, Projects } from 'contentlayer/generated'
import Image from '@/components/Image'
import BadgeLinks from '@/components/BadgeLinks'
import SectionContainer from '@/components/SectionContainer'
import Card from '@/components/Card'
import { CoreContent } from 'pliny/utils/contentlayer'
import H3 from '@/components/H3'
import NavigationButton from '@/components/NavigationButton'
import RecentPostsSection from '@/components/RecentPosts'

interface Props {
  children: ReactNode
  content: CoreContent<Projects>
  recentPosts: Blog[]
}

export default function ProjectLayout({ children, content, recentPosts }: Props) {
  const {
    title,
    description,
    imgSrc,
    colab,
    test,
    maven,
    license,
    codacy,
    pypi,
    pStabRise,
    github,
    gettingStarted,
  } = content

  return (
    <SectionContainer>
      {/* Header Section */}
      <div className="px-6 text-center sm:px-8 md:px-12 lg:px-18">
        <h1 className="mx-auto max-w-3xl pb-3 text-center text-lg text-gray-700 italic dark:text-gray-300">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt={title}
              width={1200}
              height={600}
              className="mb-4 w-full rounded-lg"
            />
          )}
          {description}
        </h1>

        <BadgeLinks
          colabLink={colab}
          testLink={test}
          mavenLink={maven}
          licenseLink={license}
          codacyLink={codacy}
          pypiLink={pypi}
          pStabRiseLink={pStabRise}
        />
      </div>

      {/* Buttons */}
      <div className="px-6 pt-6 pb-3 text-center sm:py-6 md:px-12 lg:px-18">
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <div className="flex items-center text-sm">
            {gettingStarted && (
              <NavigationButton
                href={gettingStarted}
                className="bg-primary-500 hover:bg-primary-600 mr-2 text-white"
              >
                Getting Started
              </NavigationButton>
            )}
            {github && (
              <NavigationButton
                href={github}
                className="bg-secondary-400 hover:bg-secondary-500 text-white"
              >
                GitHub
              </NavigationButton>
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Content Body */}
      <section className="bg-white px-6 py-6 sm:px-8 md:px-12 lg:px-18 dark:bg-gray-900">
        <div className="prose dark:prose-invert max-w-none pb-8 text-gray-800 xl:col-span-2 dark:text-gray-300">
          {children}
        </div>
      </section>

      {/* Recent Posts */}
      <RecentPostsSection recentPosts={recentPosts} />
    </SectionContainer>
  )
}
