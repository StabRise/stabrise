'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import { FaCalendar } from 'react-icons/fa'
import AuthorCard from '@/components/AuthorCard'
import { getAuthorsByPost } from '@/components/utils/authorsHelper'
import H2 from '@/components/H2'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.replace(/^\//, '').replace(/\/page\/\d+$/, '')
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
        {!prevPage ? (
          <button className="cursor-not-allowed opacity-50" disabled>
            Previous
          </button>
        ) : (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          Page {currentPage} of {totalPages}
        </span>
        {!nextPage ? (
          <button className="cursor-not-allowed opacity-50" disabled>
            Next
          </button>
        ) : (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])
  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <aside className="hidden flex-col border-r border-gray-200 py-5 pl-4 sm:flex sm:w-1/4 md:pl-6 lg:pl-12 dark:border-gray-800">
          <div className="text-center">
            {pathname.startsWith('/blog') ? (
              <h4 className="border-primary-500 text-primary-500 dark:border-primary-400 dark:text-primary-400 mb-4 inline-block rounded-lg border px-3 py-2 font-semibold">
                All Posts
              </h4>
            ) : (
              <Link
                href="/blog"
                className="hover:text-primary-500 dark:hover:text-primary-400 font-semibold text-gray-700 dark:text-gray-300"
              >
                All Posts
              </Link>
            )}
          </div>
          <ul className="mt-4 space-y-3">
            {sortedTags.map((t) => {
              const isSelected = decodeURI(pathname.split('/tags/')[1]) === `${slug(t)}/`
              return (
                <li key={t}>
                  <Link
                    href={`/tags/${slug(t)}`}
                    className={`rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      isSelected
                        ? 'bg-primary-200 dark:bg-primary-500 text-gray-900 dark:text-white'
                        : 'hover:bg-primary-100 hover:text-primary-500 text-gray-500 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                    aria-label={`View posts tagged ${t}`}
                  >
                    {`${t} (${tagCounts[t]})`}
                  </Link>
                </li>
              )
            })}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 pt-6 md:px-6 lg:px-10">
          <ul>
            {displayPosts.map((post) => {
              const { path, date, title, summary, tags, authors } = post
              const authorDetails = getAuthorsByPost(authors || ['default'])

              return (
                <li key={path} className="mb-8 border-b border-gray-200 pb-12 dark:border-gray-800">
                  <article className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
                    {/* Text */}
                    <div className="flex-1">
                      <H2>
                        <Link
                          href={`/${path}`}
                          className="hover:text-primary-500 dark:hover:text-primary-400"
                        >
                          {title}
                        </Link>
                      </H2>

                      {/* Tags */}
                      <div className="mt-6 flex flex-wrap gap-2 text-sm">
                        {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                      </div>

                      {/* Summary */}
                      <p className="mt-3 text-justify text-gray-800 dark:text-gray-300">
                        {summary}
                      </p>

                      {/* Footer */}
                      <div className="mt-4 flex flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-wrap gap-4">
                          {authorDetails.map((author) => (
                            <AuthorCard
                              key={author.name}
                              name={author.name}
                              avatar={author.avatar}
                              occupation={author.occupation}
                              profileLink={author.linkedin || author.github}
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <FaCalendar className="text-sm" />
                          <time dateTime={date} suppressHydrationWarning>
                            {formatDate(date, siteMetadata.locale)}
                          </time>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>

          {pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </main>
      </div>
    </SectionContainer>
  )
}
