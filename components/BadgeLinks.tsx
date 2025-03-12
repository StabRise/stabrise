import React from 'react'
import Link from '@/components/Link'

interface BadgeLinksProps {
  colabLink?: string
  testLink?: string
  mavenLink?: string
  licenseLink?: string
  codacyLink?: string
  pypiLink?: string
  pStabRiseLink?: string
}

const BadgeLinks: React.FC<BadgeLinksProps> = ({
  colabLink,
  testLink,
  mavenLink,
  licenseLink,
  codacyLink,
  pypiLink,
  pStabRiseLink,
}) => {
  return (
    <div className="flex justify-center space-x-2">
      {colabLink && (
        <Link href={colabLink} rel="noopener noreferrer" className="flex items-center">
          <img
            alt="Open In Colab Quick Start"
            src="https://colab.research.google.com/assets/colab-badge.svg"
            className="h-4"
          />
        </Link>
      )}
      {testLink && (
        <Link href={testLink} className="flex items-center">
          <img
            alt="Test"
            src="https://github.com/StabRise/spark-pdf/actions/workflows/scala.yml/badge.svg"
            className="h-4"
          />
        </Link>
      )}
      {mavenLink && (
        <Link href={mavenLink} className="flex items-center">
          <img
            alt="Maven Central Version"
            src="https://img.shields.io/maven-central/v/com.stabrise/spark-pdf-spark35_2.12"
            className="h-4"
          />
        </Link>
      )}
      {licenseLink && (
        <Link href={licenseLink} className="flex items-center">
          <img
            alt="License"
            src="https://img.shields.io/badge/License-AGPL%203-blue.svg"
            className="h-4"
          />
        </Link>
      )}
      {codacyLink && (
        <Link
          href={codacyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            alt="Codacy Badge"
            src="https://app.codacy.com/project/badge/Grade/2fde782d0c754df1b60b389799f46f0f"
            className="h-4"
          />
        </Link>
      )}
      {pypiLink && (
        <Link href={pypiLink} className="flex items-center">
          <img alt="PyPi Badge" src="https://img.shields.io/pypi/v/scaledp.svg" className="h-4" />
        </Link>
      )}
      {pStabRiseLink && (
        <Link href={pStabRiseLink} className="flex items-center">
          <img
            alt="powered by StabRise"
            src="https://img.shields.io/badge/powered%20by-StabRise-orange.svg?style=flat&colorA=E1523D&colorB=007D8A"
            className="h-4"
          />
        </Link>
      )}
    </div>
  )
}

export default BadgeLinks
