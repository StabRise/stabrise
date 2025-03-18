import { ReactNode } from 'react'
import type { Blog, Projects } from 'contentlayer/generated'
import Image from '@/components/Image'
import BadgeLinks from '@/components/BadgeLinks'
import SectionContainer from '@/components/SectionContainer'
import Card from '@/components/Card'
import { CoreContent } from 'pliny/utils/contentlayer'
import H3 from '@/components/H3'
import NavigationButton from '@/components/NavigationButton'

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
      <section className="mb-6 px-6 pt-6 text-center sm:px-8 md:px-12 lg:px-18">
        <h1 className="mx-auto max-w-3xl pb-3 text-lg text-gray-600 italic">
          {imgSrc && (
            <Image src={imgSrc} alt={title} width={1200} height={600} className="w-full" />
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
      </section>
      <section className="px-6 py-3 text-center sm:py-6 md:px-12 lg:px-18">
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
          {/* GitHub Section */}

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
      </section>
      <hr />
      <section className="px-6 py-6 sm:px-8 md:px-12 lg:px-18">
        <div className="prose max-w-none pb-8 xl:col-span-2">{children}</div>
      </section>

      {recentPosts.length > 0 && (
        <section className="bg-primary-100 py-12">
          <div className="mx-auto max-w-screen-xl px-6">
            <H3>Recent Posts</H3>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Card
                  key={post.slug}
                  title={post.title}
                  description={post.title}
                  imgSrc={post.displayImage}
                  href={`/blog/${post.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </SectionContainer>
  )
}
