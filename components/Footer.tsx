import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import projectsData from '@/data/projectsData'

export default function Footer() {
  return (
    <div>
      <footer className="border-t border-gray-300 bg-white py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Logo and Description */}
            <div className="col-span-1">
              <Logo className="mb-1 h-12 w-32 text-gray-800" />
              <p className="mb-4 text-sm text-gray-600">Document Processing Solutions</p>
              <p className="text-sm text-gray-600 italic">
                Scalable by the Spark. Process structured and unstructured data with ease.
              </p>
            </div>

            {/* Product Links */}
            <div className="col-span-1">
              <div className="my-3 text-lg font-semibold text-gray-800">Products</div>
              <div className="space-y-2">
                {projectsData.map((d) => (
                  <Link href={d.href} className="block text-sm text-gray-600 hover:text-gray-800">
                    {d.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal Links */}
            <div className="col-span-1">
              <div className="my-3 text-lg font-semibold text-gray-800">Legal</div>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-sm text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-use"
                  className="block text-sm text-gray-600 hover:text-gray-800"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="col-span-1">
              <div className="my-3 text-lg font-semibold text-gray-800">Contact Us</div>
              <div className="space-y-2">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg
                      className="h-5 w-5 text-gray-600 dark:text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z" />
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
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z" />
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
      <div className="mb-2 border-t border-gray-300 pt-4 text-center dark:border-gray-700">
        <div className="flex flex-col items-center">
          <div className="mb-3 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
            <SocialIcon kind="bluesky" href={siteMetadata.bluesky} size={6} />
            <SocialIcon kind="x" href={siteMetadata.x} size={6} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
            <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
            <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
          </div>
          <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <Link href="/">{siteMetadata.title}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
