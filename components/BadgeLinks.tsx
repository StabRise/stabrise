import React from 'react'
import Link from '@/components/Link'
import Image from '@/components/Image'

interface BadgeProps {
  link: string
  imgSrc: string
  altText: string
  target?: string
  rel?: string
}

const Badge: React.FC<BadgeProps> = ({
  link,
  imgSrc,
  altText,
  target = '_self',
  rel = 'noopener noreferrer',
}) => (
  <Link href={link} target={target} rel={rel} className="flex items-center">
    <Image width={100} height={25} alt={altText} src={imgSrc} className="h-4" />
  </Link>
)

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
  // Define an array of badge data
  const badges = [
    {
      link: colabLink,
      imgSrc: 'https://colab.research.google.com/assets/colab-badge.svg',
      altText: 'Open In Colab Quick Start',
    },
    {
      link: testLink,
      imgSrc: 'https://github.com/StabRise/spark-pdf/actions/workflows/scala.yml/badge.svg',
      altText: 'Test',
    },
    {
      link: mavenLink,
      imgSrc: 'https://img.shields.io/maven-central/v/com.stabrise/spark-pdf-spark35_2.12',
      altText: 'Maven Central Version',
    },
    {
      link: licenseLink,
      imgSrc: 'https://img.shields.io/badge/License-AGPL%203-blue.svg',
      altText: 'License',
    },
    {
      link: codacyLink,
      imgSrc: 'https://app.codacy.com/project/badge/Grade/2fde782d0c754df1b60b389799f46f0f',
      altText: 'Codacy Badge',
      target: '_blank',
    },
    { link: pypiLink, imgSrc: 'https://img.shields.io/pypi/v/scaledp.svg', altText: 'PyPi Badge' },
    {
      link: pStabRiseLink,
      imgSrc:
        'https://img.shields.io/badge/powered%20by-StabRise-orange.svg?style=flat&colorA=E1523D&colorB=007D8A',
      altText: 'powered by StabRise',
    },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {badges.map(
        ({ link, imgSrc, altText, target = '_self' }, index) =>
          link && (
            <Badge key={index} link={link} imgSrc={imgSrc} altText={altText} target={target} />
          )
      )}
    </div>
  )
}

export default BadgeLinks
