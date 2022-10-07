import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="my-8 flex flex-col items-center">
      <div className="mb-3 flex space-x-4">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
        <SocialIcon kind="github" href={siteMetadata.github} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} />
      </div>
      <div className="mb-2 flex space-x-2 text-sm text-gray-400">
        <div>Copyright</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <Link href="/">{siteMetadata.title}</Link>
      </div>
    </footer>
  )
}
