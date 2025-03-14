import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import Image from '@/components/Image'
import SectionContainer from '@/components/SectionContainer'
import PageTitle from '@/components/PageTitle'
import H3 from '@/components/H3'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div className="pb-12">
      <PageTitle>Our Projects</PageTitle>
      <div className="space-y-8">
        {projectsData.map((d) => (
          <SectionContainer key={d.title} addMinHeight={false}>
            <Link href={d.href} aria-label={`Link to ${d.title}`}>
              <div className="m-3 p-6">
                <div className="flex flex-col items-center sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6">
                  {d.img2Src ? (
                    <div className="flex-shrink-0 sm:flex-none">
                      <Image
                        alt={d.title}
                        src={d.img2Src}
                        className="h-32 w-32 rounded-lg object-cover"
                        width={54}
                        height={54}
                      />
                    </div>
                  ) : null}
                  <div className="flex-1 text-center sm:text-left">
                    <H3 withPadding={false} className="pb-3">
                      {d.title}
                    </H3>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">{d.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          </SectionContainer>
        ))}
      </div>
    </div>
  )
}
