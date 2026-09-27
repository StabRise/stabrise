import Image from '@/components/Image'
import Link from '@/components/Link'
import projectsData from '@/data/projectsData'

type Project = (typeof projectsData)[number]

function ProjectBody({ project }: { project: Project }) {
  return (
    <>
      <h4 className="font-display text-ink group-hover:decoration-brand text-2xl font-semibold tracking-tight group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4 dark:text-white">
        {project.title}
      </h4>
      <p className="mt-3 max-w-prose leading-relaxed text-gray-700 dark:text-slate-300">
        {project.description.trim()}
      </p>
      {project.features && (
        <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600 dark:text-slate-400">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="bg-brand h-1.5 w-1.5 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

function Banner({ project, className = '' }: { project: Project; className?: string }) {
  if (!project.imgSrc) return null
  return (
    <div
      className={`border-rule overflow-hidden rounded-md border bg-white dark:border-white/10 ${className}`}
    >
      <Image
        src={project.imgSrc}
        alt=""
        width={1000}
        height={300}
        className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
  )
}

export default function ProjectsSection() {
  const openSource = projectsData.filter((p) => p.category === 'open-source')
  const webTools = projectsData.filter((p) => p.category === 'web-tool')

  return (
    <section id="projects" className="bg-mist scroll-mt-24 dark:bg-[#0d2032]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <h2 className="font-display text-ink text-4xl font-semibold tracking-[-0.02em] sm:text-5xl dark:text-white">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-gray-700 dark:text-slate-300">
          Open-source libraries for Spark clusters and for the browser, and a free tool anyone can
          use online.
        </p>

        <h3 className="mt-14 text-lg font-semibold text-gray-800 dark:text-slate-200">
          Open source libraries
        </h3>
        <div className="border-rule mt-5 grid gap-12 border-t pt-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 dark:border-white/10">
          {openSource.map((project) => (
            <Link key={project.title} href={project.href} className="group block">
              <Banner project={project} className="mb-6" />
              <ProjectBody project={project} />
            </Link>
          ))}
        </div>

        <h3 className="mt-20 text-lg font-semibold text-gray-800 dark:text-slate-200">
          Free online tool
        </h3>
        <div className="border-rule mt-5 border-t pt-8 dark:border-white/10">
          {webTools.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group grid items-start gap-6 md:grid-cols-2 md:gap-10"
            >
              <Banner project={project} />
              <div>
                <ProjectBody project={project} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
