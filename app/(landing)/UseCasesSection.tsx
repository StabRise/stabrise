import useCases from '@/data/useCases'

export default function UseCasesSection() {
  return (
    <section className="dark:bg-ink-deep bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <h2 className="font-display text-ink max-w-2xl text-4xl font-semibold tracking-[-0.02em] sm:text-5xl dark:text-white">
          What teams build with it
        </h2>
        <div className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map(({ title, description, icon: Icon }) => (
            <div key={title} className="border-rule border-t py-7 dark:border-white/10">
              <Icon className="text-brand h-5 w-5" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-600 dark:text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
