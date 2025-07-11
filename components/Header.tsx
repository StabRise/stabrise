'use client'
import React from 'react'
import { motion } from 'framer-motion'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import NavigationButton from '@/components/NavigationButton'
import ThemeSwitch from './ThemeSwitch'
import { GradientTypingTitle } from '@/components/TypingTitle'

const navLinkVariants = {
  hover: {
    scale: 1.05,
    textDecoration: 'underline',
    transition: { duration: 0.3 },
  },
}

const Header: React.FC = () => {
  const headerClass = siteMetadata.stickyNav
    ? 'sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md backdrop-blur-md backdrop-saturate-150 transition-colors duration-500 flex items-center justify-between py-4 px-6 sm:px-10'
    : 'bg-white dark:bg-gray-900 shadow-md flex items-center justify-between py-4 px-6 sm:px-10'

  return (
    <header className={headerClass}>
      {/* Logo + Title */}
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center space-x-3">
          <Logo className="h-10 w-auto" />
          {/*<GradientTypingTitle text={siteMetadata.headerTitle} />*/}
        </div>
      </Link>

      {/* Navigation & controls */}
      <div className="flex items-center space-x-6">
        {/* Desktop Nav */}
        <nav className="hidden gap-x-8 sm:flex">
          {headerNavLinks
            // .filter((link) => link.href !== '/')
            .map((link) => (
              <motion.div
                key={link.title}
                variants={navLinkVariants}
                whileHover="hover"
                className="cursor-pointer"
              >
                <Link
                  href={link.href}
                  className="hover:text-primary-600 dark:hover:text-primary-400 text-lg font-medium text-gray-700 dark:text-gray-300"
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
        </nav>

        {/* Search */}
        <SearchButton />

        {/* Theme Switch */}
        <ThemeSwitch />

        {/* CTA */}
        <NavigationButton
          href="/contact/"
          className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-md px-5 py-2 font-semibold text-white shadow-lg transition"
        >
          Contact Us
        </NavigationButton>

        {/* Mobile Nav */}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
