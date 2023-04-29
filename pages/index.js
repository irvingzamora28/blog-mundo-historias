import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <section className="">
        <div className="flex h-screen flex-col">
          <div className="flex items-center justify-between bg-gray-100 py-4">
            <div className="flex items-center">
              <span className="mr-2 rounded-full bg-red-500 px-3 py-1 text-white">Category A</span>
              <span className="mr-2 rounded-full bg-blue-500 px-3 py-1 text-white">Category B</span>
              <span className="rounded-full bg-green-500 px-3 py-1 text-white">Category C</span>
            </div>
            <div className="flex items-center">
              <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                Sign Up
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col md:flex-row">
            <div className="flex w-full flex-wrap justify-between bg-gray-200 p-4 md:w-4/5">
              <div className="mb-4 w-full md:w-1/3">
                <div className="h-full rounded bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-medium text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend bibendum
                    lorem, vitae euismod nisl laoreet eget. Fusce ut ex vitae elit lobortis maximus.
                    Nulla vitae nulla at nibh aliquam lobortis. Duis sed suscipit turpis, eget
                    suscipit nisl. Fusce ac nunc sit amet ipsum aliquam tempus quis et mauris.
                  </p>
                </div>
              </div>
              <div className="mb-4 w-full md:w-1/3">
                <div className="h-full rounded bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-medium text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend bibendum
                    lorem, vitae euismod nisl laoreet eget. Fusce ut ex vitae elit lobortis maximus.
                    Nulla vitae nulla at nibh aliquam lobortis. Duis sed suscipit turpis, eget
                    suscipit nisl. Fusce ac nunc sit amet ipsum aliquam tempus quis et mauris.
                  </p>
                </div>
              </div>
              <div className="mb-4 w-full md:w-1/3">
                <div className="h-full rounded bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-medium text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend bibendum
                    lorem, vitae euismod nisl laoreet eget. Fusce ut ex vitae elit lobortis maximus.
                    Nulla vitae nulla at nibh aliquam lobortis. Duis sed suscipit turpis, eget
                    suscipit nisl. Fusce ac nunc sit amet ipsum aliquam tempus quis et mauris.
                  </p>
                </div>
              </div>
              <div className="mb-4 w-full md:w-1/3">
                <div className="h-full rounded bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-medium text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend bibendum
                    lorem, vitae euismod nisl laoreet eget. Fusce ut ex vitae elit lobortis maximus.
                    Nulla vitae nulla at nibh aliquam lobortis. Duis sed suscipit turpis, eget
                    suscipit nisl. Fusce ac nunc sit amet ipsum aliquam tempus quis et mauris.
                  </p>
                </div>
              </div>
              <div className="mb-4 w-full md:w-1/3">
                <div className="h-full rounded bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-medium text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend bibendum
                    lorem, vitae euismod nisl laoreet eget. Fusce ut ex vitae elit lobortis maximus.
                    Nulla vitae nulla at nibh aliquam lobortis. Duis sed suscipit turpis, eget
                    suscipit nisl. Fusce ac nunc sit amet ipsum aliquam tempus quis et mauris.
                  </p>
                </div>
              </div>
              <div className="mb-4 w-full md:w-1/3">
                <div className="h-full rounded bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-medium text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend bibendum
                    lorem, vitae euismod nisl laoreet eget. Fusce ut ex vitae elit lobortis maximus.
                    Nulla vitae nulla at nibh aliquam lobortis. Duis sed suscipit turpis, eget
                    suscipit nisl. Fusce ac nunc sit amet ipsum aliquam tempus quis et mauris.
                  </p>
                </div>
              </div>
              <div className="mb-4 w-full md:w-1/3">
                <div className="h-full rounded bg-white p-4 shadow">
                  <h2 className="mb-2 text-lg font-medium text-gray-800">Blog Post Title</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend bibendum
                    lorem, vitae euismod nisl laoreet eget. Fusce ut ex vitae elit lobortis maximus.
                    Nulla vitae nulla at nibh aliquam lobortis. Duis sed suscipit turpis, eget
                    suscipit nisl. Fusce ac nunc sit amet ipsum aliquam tempus quis et mauris.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-300 p-4 md:w-1/5">
              <div className="mb-4">
                <h2 className="mb-2 text-lg font-medium text-gray-800">Latest Posts</h2>
                <ul>
                  <li className="mb-2 text-gray-700">
                    <a href="#">Blog Post Title</a>
                  </li>
                  <li className="mb-2 text-gray-700">
                    <a href="#">Blog Post Title</a>
                  </li>
                  <li className="mb-2 text-gray-700">
                    <a href="#">Blog Post Title</a>
                  </li>
                  <li className="mb-2 text-gray-700">
                    <a href="#">Blog Post Title</a>
                  </li>
                  <li className="mb-2 text-gray-700">
                    <a href="#">Blog Post Title</a>
                  </li>
                  <li className="mb-2 text-gray-700">
                    <a href="#">Blog Post Title</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
