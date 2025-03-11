'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import { FaCalendar, FaUser } from 'react-icons/fa'

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
  const segments = pathname.split('/')
  const lastSegment = segments[segments.length - 1]
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+$/, '') // Remove any trailing /page
  console.log(pathname)
  console.log(basePath)
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
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
    <>
      <div className="px-6">
        <div className="flex sm:space-x-12">
          <div className="hidden h-full max-h-screen max-w-[200px] min-w-[200px] flex-wrap overflow-auto rounded-sm border-r border-gray-200 bg-gray-50 pt-5 shadow-md sm:flex dark:border-gray-700 dark:bg-gray-900/70 dark:shadow-gray-800/40">
            <div className="px-6 py-4">
              {pathname.startsWith('/blog') ? (
                <h4 className="text-primary-500 mb-4 font-semibold">All Posts</h4>
              ) : (
                <Link
                  href={`/blog`}
                  className="hover:text-primary-500 dark:hover:text-primary-500 font-semibold text-gray-700 dark:text-gray-300"
                >
                  All Posts
                </Link>
              )}

              <ul className="mt-4 space-y-3">
                {sortedTags.map((t) => {
                  const isSelected = decodeURI(pathname.split('/tags/')[1]) === slug(t)
                  return (
                    <li key={t}>
                      <Link
                        href={`/tags/${slug(t)}`}
                        className={`rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${isSelected ? 'bg-primary-500 text-white' : 'hover:bg-primary-100 dark:hover:bg-primary-500 hover:text-primary-500 text-gray-500 dark:text-gray-300'}`}
                        aria-label={`View posts tagged ${t}`}
                      >
                        {`${t} (${tagCounts[t]})`}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="pr-6">
            <ul>
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags, author, smallImage } = post
                return (
                  <li key={path} className="border-b border-gray-200 py-8 dark:border-gray-700">
                    <article className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
                      {/* Image Section */}

                      {smallImage && (
                        <div className="flex-shrink-0">
                          <img
                            src={smallImage}
                            alt={title}
                            className="h-16 w-16 rounded-md object-cover"
                          />
                        </div>
                      )}

                      {/* Content Section */}
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                          <Link href={`/${path}`} className="hover:text-primary-500">
                            {title}
                          </Link>
                        </h2>

                        {/* Tags */}
                        <div className="text-primary-500 mt-2 flex flex-wrap space-x-2 text-sm">
                          {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                        </div>

                        {/* Summary/Description */}
                        <div className="mt-3 text-justify text-gray-500 dark:text-gray-400">
                          <p>{summary}</p>
                        </div>

                        {/* Date & Author */}
                        <div className="mt-4 flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <span className="material-icons text-sm">
                              <FaCalendar className="text-sm" />
                            </span>
                            <span>
                              <time dateTime={date} suppressHydrationWarning>
                                {formatDate(date, siteMetadata.locale)}
                              </time>
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaUser className="text-sm" />
                            <span>StabRise Team</span>
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
          </div>
        </div>
      </div>
    </>
  )
}
