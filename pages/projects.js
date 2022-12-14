import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import ProjectCard from '@/components/ProjectCard'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`${siteMetadata.title} | Projects 🔨`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-700">
        <div className="space-y-2 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects <span className="wave">🔨</span>
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap justify-center">
            {projectsData.map((d) => (
              <ProjectCard
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
