import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Hero from '@/components/Hero'
import Link from '@/components/Link'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Tag from '@/components/Tag'
import { motion } from 'framer-motion'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title="AcidOP | Developer | Blogger" description={siteMetadata.description} />
      <Hero />
      <div className="container mx-auto divide-y divide-gray-700">
        <div className="my-4 flex flex-col">
          <span className="font-poppins title-font text-3xl font-bold">Recent Posts</span>
        </div>

        <ul>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter

            return (
              <motion.li
                key={slug}
                className="my-5 mx-auto rounded-xl bg-gray-800 p-6 lg:w-2/3"
                whileHover={{ scale: 1.05 }}
              >
                <article className="space-y-2  p-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="flex flex-col space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/blog/${slug}`} className="text-gray-100">
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="prose max-w-none text-gray-400">{summary}</div>
                  </div>
                </article>
              </motion.li>
            )
          })}
        </ul>

        {posts.length > MAX_DISPLAY && (
          <div className="mt-5 flex justify-end text-base font-medium leading-6">
            <Link href="/posts" className="mt-5 hover:text-primary-400" aria-label="all posts">
              All Posts &rarr;
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
