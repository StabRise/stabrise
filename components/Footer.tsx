'use client'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import FooterLogo from '@/data/logoFooter.svg'
import projectsData from '@/data/projectsData'
import { motion, Variants } from 'framer-motion'

const socialLinks = [
  { kind: 'mail', href: `mailto:${siteMetadata.email}` },
  { kind: 'github', href: siteMetadata.github },
  { kind: 'linkedin', href: siteMetadata.linkedin },
  { kind: 'facebook', href: siteMetadata.facebook },
  { kind: 'youtube', href: siteMetadata.youtube },
  { kind: 'twitter', href: siteMetadata.twitter },
  { kind: 'bluesky', href: siteMetadata.bluesky },
  { kind: 'x', href: siteMetadata.x },
  { kind: 'instagram', href: siteMetadata.instagram },
  { kind: 'threads', href: siteMetadata.threads },
  { kind: 'medium', href: siteMetadata.medium },
] as const

const iconContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const iconItem: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

export default function Footer() {
  return (
    <div>
      <footer className="border-t border-gray-300 bg-white py-6 dark:border-gray-700 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
            {/* Logo and Description */}
            <div className="col-span-1">
              <Link href="/">
                <FooterLogo className="mb-1 h-12 w-32 text-gray-800 dark:text-gray-200" />
              </Link>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                Document Processing Solutions
              </p>
              <p className="text-sm text-gray-600 italic dark:text-gray-400">
                Scalable by the Spark. Process structured and unstructured data with ease.
              </p>
            </div>

            {/* Product Links */}
            <div className="col-span-1">
              <div className="my-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
                Project
              </div>
              <div className="space-y-2">
                {projectsData.map((d) => (
                  <Link
                    key={d.title}
                    href={d.href}
                    className="block text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    {d.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="col-span-1">
              <div className="my-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
                Legal
              </div>
              <div className="space-y-2">
                <Link
                  href="/privacy"
                  className="block text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-use"
                  className="block text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/blog/"
                  className="mt-6 block text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  itemProp="url"
                >
                  Blog
                </Link>
              </div>
            </div>

            {/* Contact Us */}
            <div className="col-span-1">
              <div className="my-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
                Contact Us
              </div>
              <div className="space-y-2">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-600 dark:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <p className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                      Wilcza 19i, lok. 2, Marki, Mazovezkie, Poland, 05-270
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 text-gray-600 dark:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <a
                      href={`mailto:${siteMetadata.email}`}
                      className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                    >
                      {siteMetadata.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 text-gray-600 dark:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"
                      />
                    </svg>
                    <a
                      href={`tel:${siteMetadata.phone}`}
                      className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
                    >
                      {siteMetadata.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <motion.div
        className="mb-2 border-t border-gray-300 pt-4 text-center dark:border-gray-700 dark:bg-gray-950"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col items-center">
          <motion.div className="mb-3 flex flex-wrap justify-center gap-4" variants={iconContainer}>
            {socialLinks.map((icon) =>
              icon.href ? (
                <motion.div key={icon.kind} variants={iconItem} whileHover={{ scale: 1.15 }}>
                  <SocialIcon kind={icon.kind} href={icon.href} size={6} />
                </motion.div>
              ) : null
            )}
          </motion.div>

          <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div> •</div>
            <Link href="/">{siteMetadata.title}</Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
