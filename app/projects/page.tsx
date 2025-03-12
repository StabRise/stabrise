import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'
import Link from '@/components/Link'
import Image from '@/components/Image'
import SectionContainer from "@/components/SectionContainer";

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div className=" px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Our Projects</h1>
        </div>

        <div className="space-y-8">
          {projectsData.map((d) => (
            <SectionContainer
              key={d.title}
              addMinHeight={false}
             >
              <Link href={d.href} aria-label={`Link to ${d.title}`}>
                <div className="p-6">
                  <div className="flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6">
                    {d.img2Src ? (
                      <div className="flex-shrink-0">
                        <Image
                          alt={d.title}
                          src={d.img2Src}
                          className="h-32 w-32 rounded-lg object-cover"
                          width={54}
                          height={30}
                        />
                      </div>
                    ) : null}
                    <div className="flex-1">
                      <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
                        {d.title}
                      </h3>
                      <p className="mb-4 text-gray-600 dark:text-gray-300">{d.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </SectionContainer>
          ))}
        </div>
      </div>
    </div>
  )
}
