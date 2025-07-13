import { motion, Variants, easeOut } from 'framer-motion'
import H2 from '@/components/H2'
import SimpleCard from '@/components/SimpleCard'
import whyChooseUs from '@/data/whyChooseUs'

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: easeOut,
    },
  }),
}

export default function WhyChooseUsSection() {
  return (
    <section className="from-primary-100 to-primary-200 mx-auto max-w-screen-xl bg-gradient-to-tr px-6 pt-6 pb-16 sm:pt-12 dark:from-gray-900 dark:to-gray-800">
      <H2 className="dark:text-gray-100">Why Choose StabRise?</H2>
      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item, index) => (
          <motion.div
            key={item.title}
            custom={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex h-full flex-col"
          >
            <SimpleCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
