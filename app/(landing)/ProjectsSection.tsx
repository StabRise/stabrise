import H2 from '@/components/H2'
import Card from '@/components/Card'
import projectsData from '@/data/projectsData'

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-gray-50 px-6 py-8 text-center sm:py-12 dark:bg-gray-800">
      <H2>Our Projects</H2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projectsData.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
