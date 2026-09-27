import Link from '@/components/Link'
import DocToDataFrame from './DocToDataFrame'

export default function HeroSection() {
  return (
    <section className="dark:bg-ink-deep overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:px-8 lg:pt-24 lg:pb-28">
        <div>
          <h1 className="font-display text-ink text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.03em] sm:text-6xl lg:text-[3.75rem] dark:text-white">
            Turn millions of documents into Spark DataFrames
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-700 dark:text-slate-300">
            StabRise builds tools that read PDFs, scans and DICOM files at cluster scale. Extract
            text, tables and entities, and redact what has to stay private, all on your own
            infrastructure.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact/"
              className="bg-ink hover:bg-ink-deep focus-visible:outline-brand dark:text-ink rounded-md px-6 py-3 font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 dark:bg-white dark:hover:bg-slate-200"
            >
              Talk to an engineer
            </Link>
            <Link
              href="#projects"
              className="border-rule text-ink hover:border-ink focus-visible:outline-brand rounded-md border px-6 py-3 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-white/20 dark:text-white dark:hover:border-white/60"
            >
              See our projects
            </Link>
          </div>
          <p className="mt-10 max-w-md text-sm text-gray-500 dark:text-slate-400">
            Runs on Apache Spark, Databricks, AWS, Azure and Google Cloud. Built for HIPAA and GDPR
            workloads.
          </p>
        </div>

        <DocToDataFrame />
      </div>
    </section>
  )
}
