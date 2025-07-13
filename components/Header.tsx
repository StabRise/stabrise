'use client'
import React from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import SearchButton from './SearchButton'
import NavigationButton from '@/components/NavigationButton'
import ThemeSwitch from './ThemeSwitch'

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
      <div className="flex items-center space-x-3">
        {/* Desktop Nav */}
        <nav className="hidden gap-x-6 sm:flex">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-md relative font-normal text-black transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:text-blue-500 hover:after:w-full dark:text-gray-300 dark:hover:text-blue-400"
            >
              {link.title}
            </Link>
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
