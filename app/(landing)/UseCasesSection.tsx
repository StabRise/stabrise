import H2 from '@/components/H2'
import useCases from '@/data/useCases'

export default function UseCasesSection() {
  return (
    <section className="mx-auto max-w-screen-xl px-6 pt-6 sm:px-12 sm:pt-12">
      <H2 className="dark:text-gray-100">Use Cases</H2>
      <div className="mt-6 mb-12">
        {useCases.map((caseItem, idx) => (
          <div key={idx} className="mb-8">
            <div className="mb-2.5 flex items-center">
              <div className="text-primary mr-2.5">{caseItem.icon}</div>
              <p className="text-xl text-gray-800 dark:text-gray-200">{caseItem.title}</p>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-400">{caseItem.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
