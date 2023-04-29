import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return {
    props: {
      posts,
    },
  }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <section className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <span className="mr-2 rounded-full bg-primary-500 px-3 py-1 text-white">Category A</span>
              <span className="mr-2 rounded-full bg-primary-500 px-3 py-1 text-white">Category B</span>
              <span className="rounded-full bg-primary-500 px-3 py-1 text-white">Category C</span>
            </div>
            <div className="flex items-center">
              <button className="rounded bg-primary-500 px-4 py-2 font-bold text-white hover:bg-primary-700">Sign Up</button>
            </div>
          </div>
          <div className="flex flex-1 flex-col md:flex-row">
            {!posts.length && 'No posts found.'}
            <div className="container__blogs mr-2 flex w-full flex-wrap justify-between md:w-4/5">
              {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                const { slug, date, title, summary, tags } = frontMatter
                return (
                  <article key={slug} className="mb-4 w-full px-4 md:w-1/3">
                    <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
                      <Image src="https://picsum.photos/200/300" className="aspect-video w-full object-cover" width={600} height={400} alt="" />
                      <div className="p-4">
                        <p className="mb-1 text-sm text-primary-500">
                          Andrea Felsted
                          <time dateTime={date} className="tex-base float-right font-medium leading-6 text-gray-500 dark:text-gray-400">
                            {formatDate(date)}
                          </time>
                        </p>
                        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
                        <p className="mt-1 text-gray-500">{summary}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Link href={`/blog/${slug}`} className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label={`Read "${title}"`}>
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
              <div className="mb-4 w-full px-4 md:w-1/3">
                <div className="h-full rounded bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-medium text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend bibendum lorem, vitae euismod nisl laoreet eget. Fusce ut ex vitae elit lobortis maximus. Nulla vitae nulla at nibh aliquam lobortis. Duis sed
                    suscipit turpis, eget suscipit nisl. Fusce ac nunc sit amet ipsum aliquam tempus quis et mauris.
                  </p>
                </div>
              </div>
              <div className="mb-4 w-full px-4 md:w-1/3">
                <div className="h-full rounded bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-medium text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend bibendum lorem, vitae euismod nisl laoreet eget. Fusce ut ex vitae elit lobortis maximus. Nulla vitae nulla at nibh aliquam lobortis. Duis sed
                    suscipit turpis, eget suscipit nisl. Fusce ac nunc sit amet ipsum aliquam tempus quis et mauris.
                  </p>
                </div>
              </div>
              <div className="mb-4 w-full px-4 md:w-1/3">
                <div className="h-full rounded bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-medium text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend bibendum lorem, vitae euismod nisl laoreet eget. Fusce ut ex vitae elit lobortis maximus. Nulla vitae nulla at nibh aliquam lobortis. Duis sed
                    suscipit turpis, eget suscipit nisl. Fusce ac nunc sit amet ipsum aliquam tempus quis et mauris.
                  </p>
                </div>
              </div>
              <div className="mb-4 w-full px-4 md:w-1/3">
                <div className="h-full rounded bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-medium text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend bibendum lorem, vitae euismod nisl laoreet eget. Fusce ut ex vitae elit lobortis maximus. Nulla vitae nulla at nibh aliquam lobortis. Duis sed
                    suscipit turpis, eget suscipit nisl. Fusce ac nunc sit amet ipsum aliquam tempus quis et mauris.
                  </p>
                </div>
              </div>
              <div className="mb-4 w-full px-4 md:w-1/3">
                <div className="h-full rounded bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-medium text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend bibendum lorem, vitae euismod nisl laoreet eget. Fusce ut ex vitae elit lobortis maximus. Nulla vitae nulla at nibh aliquam lobortis. Duis sed
                    suscipit turpis, eget suscipit nisl. Fusce ac nunc sit amet ipsum aliquam tempus quis et mauris.
                  </p>
                </div>
              </div>
              <div className="mb-4 w-full px-4 md:w-1/3">
                <div className="h-full rounded bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-medium text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend bibendum lorem, vitae euismod nisl laoreet eget. Fusce ut ex vitae elit lobortis maximus. Nulla vitae nulla at nibh aliquam lobortis. Duis sed
                    suscipit turpis, eget suscipit nisl. Fusce ac nunc sit amet ipsum aliquam tempus quis et mauris.
                  </p>
                </div>
              </div>
            </div>
            <div className="container__latest-posts ml-2 w-full px-4 md:w-1/5">
              <div className="mb-4">
                <h2 className="mb-2 text-lg font-medium text-gray-800">Latest Posts</h2>
                <ul>
                  {posts.slice(0, MAX_DISPLAY).map((frontMatter, index) => {
                    const { slug, date, title, summary, tags } = frontMatter
                    return (
                      <li key={slug} className={`mb-4 text-gray-900 ${index < MAX_DISPLAY - 1 ? 'border-b border-gray-300 pb-4' : ''}`}>
                        <div className="flex flex-col">
                          <div>
                            <Link href={`/blog/${slug}`}>{title}</Link>
                            <span className="block text-sm text-gray-500">Published on {formatDate(date)}</span>
                          </div>
                          <div>
                            <Link href={`/blog/${slug}`} className="float-right ml-4 mt-2 rounded bg-primary-500 px-3 py-1 text-sm font-semibold leading-none text-white transition-colors duration-200 hover:bg-primary-600">
                              Read More
                            </Link>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link href="/blog" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="all posts">
              All Posts &rarr;
            </Link>
          </div>
        )}
        {siteMetadata.newsletter.provider !== '' && (
          <div className="flex items-center justify-center pt-4">
            <NewsletterForm />
          </div>
        )}{' '}
      </section>
    </>
  )
}
