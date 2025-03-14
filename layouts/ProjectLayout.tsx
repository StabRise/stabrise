import { ReactNode } from 'react'
import type { Blog, Projects } from 'contentlayer/generated'
import Image from '@/components/Image'
import Link from '@/components/Link'
import BadgeLinks from '@/components/BadgeLinks'
import SectionContainer from '@/components/SectionContainer'
import { Button } from '@headlessui/react'
import Card from '@/components/Card'
import { CoreContent } from 'pliny/utils/contentlayer'
import H3 from '@/components/H3'

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
      <section className="mb-6 px-6 pt-6 pb-3 text-center md:px-12 lg:px-18">
        {imgSrc && <Image src={imgSrc} alt={title} width={1200} height={600} className="w-full" />}
        <p className="mx-auto max-w-3xl pb-3 text-lg text-gray-600 italic">{description}</p>
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
      <hr />
      <section className="px-6 py-3 text-center md:px-12 lg:px-18">
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
          {/* GitHub Section */}
          <div className="flex items-center space-x-3">
            {gettingStarted && (
              <Link href={gettingStarted}>
                <Button className="bg-primary-500 hover:bg-primary-600 px-6 py-2 text-sm text-white">
                  Getting Started
                </Button>
              </Link>
            )}
            {github && (
              <Link href={github}>
                <button className="bg-secondary-400 hover:bg-secondary-500 px-6 py-2 text-sm text-white">
                  GitHub
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>

      <hr />
      <section className="px-6 pb-6 md:px-12 lg:px-18">
        <div className="prose max-w-none pb-8 xl:col-span-2">{children}</div>
      </section>

      {recentPosts.length > 0 && (
        <section className="bg-primary-100 pb-12">
          <div className="mx-auto max-w-screen-xl px-6">
            <H3>Recent Posts</H3>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
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
