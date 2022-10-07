import Link from './Link'
import PageTitle from './PageTitle'

export default function Hero() {
  return (
    <div className="flex w-full flex-col">
      <div className="space-y-4 pb-4 text-left md:space-y-5">
        <PageTitle>
          Hi, I'm <span className="text-7xl font-thin text-primary-500">Acid</span>
          <span role="img" aria-label="waving hand" className="wave">
            👋🏻
          </span>
        </PageTitle>
        <p className="prose max-w-none pb-4 text-lg leading-7 text-gray-400">
          I'm a high schooler by day, and a developer by night. I'm interested in cybersecurity,
          full stack development and designing. I'm currently learning React and Next.js. I have
          build many projects using React and Next.js.{' '}
          <p className="pt-4">
            Read more about me here -&gt;{' '}
            <Link href="/about" className="text-blue-500 hover:text-blue-600">
              About
            </Link>
          </p>
        </p>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Have a good read and enjoy your stay! <br />-
          <Link href="/about">
            <span className="text-primary-600 dark:text-primary-500">Acid</span>
          </Link>
        </p>
      </div>
    </div>
  )
}
