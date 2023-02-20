import Link from './Link'
import PageTitle from './PageTitle'

export default function Hero() {
  return (
    <div className="flex w-full flex-col ">
      <div className="space-y-4 pb-4 text-left md:space-y-5">
        <PageTitle>
          Hi, I'm <span className="text-6xl text-primary-500 md:text-8xl">Acid</span>
        </PageTitle>
        <p className="prose max-w-none text-lg leading-7 text-gray-400">
          Welcome to my home on the World Wide Web where I share my thoughts and experiences with
          the world. I'm a developer, a blogger, and a student. Here you will mostly find content
          related to tech.
        </p>
        <p className="prose max-w-none text-lg leading-7 text-gray-400">
          I'm the kind of guy to beat my keyboard until some useful bit of code comes up eventually.
          I'm also the kinda guy curious until I get into trouble. I'm a nerd but a cool one.
        </p>
      </div>
      <p className="prose max-w-none text-lg leading-7 text-gray-400">
        Study more about me here: <Link href="/about">About</Link>
      </p>
    </div>
  )
}
