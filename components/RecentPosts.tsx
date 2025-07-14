'use client'

import { motion, easeOut } from 'framer-motion'
import Card from './Card'
import H3 from '@/components/H3'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
}

const RecentPostsSection = ({ recentPosts }) => {
  if (!recentPosts || recentPosts.length === 0) return null

  return (
    <section className="bg-primary-100 py-12 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <H3 className="dark:text-white">Recent Posts</H3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <motion.div key={post.slug} variants={itemVariants}>
                <Card
                  title={post.title}
                  description={post.title}
                  imgSrc={post.displayImage}
                  href={`/blog/${post.slug}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RecentPostsSection
