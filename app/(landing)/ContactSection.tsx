import Link from '@/components/Link'

export default function ContactSection() {
  return (
    <section className="bg-ink dark:bg-[#0f2c45]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            Have a document pipeline that needs to scale?
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Tell us about your files and volumes, and we will suggest a setup that fits.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact/"
            className="text-ink rounded-md bg-white px-6 py-3 font-semibold transition-colors hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact us
          </Link>
          <Link
            href="/schedule-meeting/"
            className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a call
          </Link>
        </div>
      </div>
    </section>
  )
}
