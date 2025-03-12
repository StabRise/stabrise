import { ReactNode } from 'react'
import type { Project } from 'contentlayer/generated'
import Image from '@/components/Image'
import BadgeLinks from '@/components/BadgeLinks'
import SectionContainer from '@/components/SectionContainer'
import SocialIcon from '@/components/social-icons'

interface Props {
  children: ReactNode
  content: Omit<Project, '_id' | '_raw' | 'body'>
}

export default function ProjectLayout({ children, content }: Props) {
  const { title, description, href, imgSrc, colab, test, maven, license, codacy, pypi, pStabRise, github } = content

  return (
    <SectionContainer>
      <section className="mb-6 text-center py-6 px-6">
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
        <div className="mt-1 inline-flex">
          <SocialIcon
            size={6}
            kind="github"
            href={github}
            className="transition-colors duration-200 hover:text-black"
          />
        </div>
      </section>
      <hr />
      <section className="px-6">
        <div className="prose max-w-none pt-8 pb-8 xl:col-span-2">
          {children}
        </div>
      </section>
    </SectionContainer>
  )
}
