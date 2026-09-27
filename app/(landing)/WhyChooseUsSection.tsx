import whyChooseUs from '@/data/whyChooseUs'

export default function WhyChooseUsSection() {
  return (
    <section className="bg-mist dark:bg-[#0d2032]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <h2 className="font-display text-ink text-4xl font-semibold tracking-[-0.02em] sm:text-5xl lg:sticky lg:top-28 dark:text-white">
            Why StabRise
          </h2>
        </div>
        <dl className="grid gap-x-10 sm:grid-cols-2">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="border-rule border-t py-7 dark:border-white/10">
              <dt className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</dt>
              <dd className="mt-2 leading-relaxed text-gray-600 dark:text-slate-400">
                {item.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
