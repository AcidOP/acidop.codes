import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  const date = new Date()
  const currentDayName = date.toLocaleString('default', { weekday: 'long' })
  return (
    <footer className="my-10 flex flex-col items-center justify-between md:flex-row">
      <div className="mb-3 flex space-x-4">
        <SocialIcon kind="github" href={siteMetadata.github} size="5" />
        <SocialIcon kind="instagram" href={siteMetadata.instagram} size="5" />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="5" />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size="5" />
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="5" />
      </div>
      <div className="mx-5 mb-3 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        {siteMetadata.author} | Have a good {currentDayName}!
      </div>
    </footer>
  )
}
