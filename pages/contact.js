import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

const ContactLink = ({ title, href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <li className="duration-250 mr-2 inline cursor-pointer text-xl transition-colors ease-in hover:text-gray-400 sm:text-6xl md:text-5xl lg:text-6xl">
        <span className="duration-250 transition-colors ease-in hover:text-primary-400">
          {icon}
        </span>
        <span className="font-light opacity-50">@</span>
        <a className="duration-250 transition-colors ease-in hover:text-gray-500 ">{title}</a>
      </li>
    </a>
  )
}

const Contact = () => {
  return (
    <>
      <PageSEO title={`${siteMetadata.title} | Contact 🤳🏻`} description="All my contacts" />
      <div className="overflow-hidden">
        <h1 className="text-5xl font-extrabold tracking-tight">Contact</h1>
        <div className="max-w-max pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink
              href={`${siteMetadata.github}`}
              title="github"
              icon={`${siteMetadata.github.split('/')[3]}`}
            />
            <ContactLink
              href={`mailto:${siteMetadata.email}`}
              title={`${siteMetadata.email.split('@')[1]}`}
              icon={`${siteMetadata.email.split('@')[0]}`}
            />
            <ContactLink
              href={`${siteMetadata.twitter}`}
              title="twitter"
              icon={`${siteMetadata.twitter.split('/')[3]}`}
            />
            <ContactLink
              href={`${siteMetadata.instagram}`}
              title="instagram"
              icon={`${siteMetadata.instagram.split('/')[3]}`}
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
