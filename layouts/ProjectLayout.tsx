import { ReactNode } from 'react'
import type { Project } from 'contentlayer/generated'
import Image from '@/components/Image'
import Link from '@/components/Link'
import BadgeLinks from '@/components/BadgeLinks'
import SectionContainer from '@/components/SectionContainer'
import SocialIcon from '@/components/social-icons'
import { Button } from "@headlessui/react";

interface Props {
  children: ReactNode
  content: Omit<Project, '_id' | '_raw' | 'body'>
}

export default function ProjectLayout({ children, content }: Props) {
  const { title, description, href, imgSrc, colab, test, maven, license, codacy, pypi, pStabRise, github, gettingStarted } = content

  return (
    <SectionContainer>
      <section className="mb-6 text-center pt-6 pb-3 px-6 md:px-12 lg:px-18">
        <Image
          src={imgSrc}
          alt={title}
          layout="intrinsic"
          width={1200}
          height={600}
          className="w-full"
        />
        <p className="mx-auto max-w-3xl pb-3 text-lg italic text-gray-600">{description}</p>
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
      <section className=" text-center py-3 px-6 md:px-12 lg:px-18">
        <div className="flex flex-col items-center space-y-4 sm:items-center sm:space-y-0 sm:space-x-4 sm:flex-row justify-center">
          {/* GitHub Section */}
          <div className="flex items-center space-x-3">
            {gettingStarted && (
                <Link href={gettingStarted}>
                  <Button className="bg-primary-500 text-white hover:bg-primary-600 px-6 py-2 text-sm">
                    Getting Started
                  </Button>
                </Link>
            )}
            <Link href={github}>
              <Button className="bg-secondary-400 text-white hover:bg-secondary-500 px-6 py-2 text-sm">
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <hr />
      <section className="px-6 md:px-12 lg:px-18 pb-12">
        <div className="prose max-w-none pt-8 pb-8 xl:col-span-2">
          {children}
        </div>
      </section>
    </SectionContainer>
  )
}
