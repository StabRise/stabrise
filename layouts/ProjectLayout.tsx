import { ReactNode } from 'react'
import type { Project } from 'contentlayer/generated'
import Image from '@/components/Image'
import BadgeLinks from '@/components/BadgeLinks'
import Link from 'next/link'

interface Props {
  children: ReactNode
  content: Omit<Project, '_id' | '_raw' | 'body'>
}

export default function ProjectLayout({ children, content }: Props) {
  const { title, description, href, imgSrc, colab, test, maven, license, codacy, pypi, pStabRise, github } = content

  return (
    <div className="px-8">
      <section className="mb-6 text-center">
        <h3>
          <Image
            src={imgSrc}
            alt={title}
            layout="intrinsic"
            width={1200}
            height={600}
            className="w-full"
          />
        </h3>
        <p className="mx-auto max-w-3xl pb-6 text-lg text-gray-600">{description}</p>
        <BadgeLinks
          colabLink={colab}
          testLink={test}
          mavenLink={maven}
          licenseLink={license}
          codacyLink={codacy}
          pypiLink={pypi}
          pStabRiseLink={pStabRise}
        />
        <Link href={github} className="text-center">
          <Image
            src="/static/images/github-icon.png"
            alt="github"
            width={40}
            height={40}
            className="mt-3 mr-auto ml-auto"
          />
        </Link>
      </section>
      <section>
        <div className="divide-y divide-gray-200 px-12 text-justify dark:divide-gray-700">
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
              {children}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
