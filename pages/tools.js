import { uses } from '@/data/tools'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

const Uses = () => {
  return (
    <>
      <PageSEO
        title={`${siteMetadata.title} | Uses/Tools ⚙`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Tools I use <span className="animate-spin">⚙</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3">
          {uses.map((use, index) => {
            return (
              <a
                key={index}
                href={use.link}
                target="_blank"
                rel="noreferrer"
                className="m-3 flex max-w-md space-x-4 rounded-lg px-1 py-10 duration-75 ease-linear hover:scale-105 hover:bg-gray-800 hover:text-primary-500 md:px-10"
              >
                <div>
                  <h3 className="text-xl font-bold">{use.name}</h3>
                  <p className="text-gray-500">{use.description}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Uses
