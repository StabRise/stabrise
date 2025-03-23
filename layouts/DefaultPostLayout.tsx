import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import type { Blog, Authors } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

import Comments from '@/components/Comments'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Tags from '@/components/Tags'
import AuthorCard from '@/components/AuthorCard'
import PageTitle from '@/components/PageTitle'

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function DefaultPostLayout({
  content,
  authorDetails,
  next,
  prev,
  children,
}: LayoutProps) {
  const { slug, date, title, tags, displayImage } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment toc={content.toc} />
      <article className="flex flex-col md:flex-row">
        {/* Left Panel: Table of Contents (Visible on large screens only) */}
        <div className="hidden md:block md:w-1/4 md:pr-6">
          {content.toc.length > 0 && (
            <div className="pl-1bg-white sticky top-20 overflow-y-auto border-r border-b border-gray-200 p-4 pt-5">
              <h3 className="text-lg font-semibold text-gray-800">Table of Contents</h3>
              <ul className="text-primary-700 mt-4 space-y-2">
                {content.toc.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      className={`hover:text-primary-950 block py-1 pl-2 text-sm ${
                        item.depth === 3 ? 'pl-4' : ''
                      }`}
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Panel: Main Content */}
        <div className="md:w-3/4">
          {displayImage && (
            <div className="relative h-64 w-full sm:h-80 md:h-96 lg:h-112">
              <Image src={displayImage} alt={title} fill className="object-cover" />
            </div>
          )}
          <div className="px-6 py-12">
            <header className="border-b border-gray-200 py-4 sm:py-6">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Publication Date and Title */}
                <div className="space-y-2 text-center">
                  <p className="text-sm text-gray-500">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </p>
                  <PageTitle withPadding={false}>{title}</PageTitle>
                </div>

                {/* Author Details and Tags */}
                <div className="mt-4 flex flex-col items-center space-y-3 md:flex-row md:justify-center md:space-y-0">
                  {authorDetails.map((author) => (
                    <div key={author.name} className="w-full flex-col justify-center">
                      <AuthorCard
                        name={author.name}
                        avatar={author.avatar}
                        occupation={author.occupation}
                        profileLink={author.linkedin || author.github}
                      />
                    </div>
                  ))}
                  <div className="flex w-full md:flex-grow">
                    <Tags tags={tags} />
                  </div>
                </div>
              </div>
            </header>
            <div className="grid-rows-[auto_1fr]">
              <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
                <div className="prose dark:prose-invert max-w-none pt-10 pb-8">{children}</div>
              </div>

              {siteMetadata.comments && (
                <div
                  className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}

              <footer>
                <Tags tags={tags} />
                <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                  {prev && prev.path && (
                    <div className="pt-4 xl:pt-8">
                      <Link
                        href={`/${prev.path}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Previous post: ${prev.title}`}
                      >
                        &larr; {prev.title}
                      </Link>
                    </div>
                  )}
                  {next && next.path && (
                    <div className="pt-4 xl:pt-8">
                      <Link
                        href={`/${next.path}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Next post: ${next.title}`}
                      >
                        {next.title} &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              </footer>
            </div>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
