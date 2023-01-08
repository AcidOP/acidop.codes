import Link from './Link'
import PageTitle from './PageTitle'

export default function Hero() {
  return (
    <div className="flex w-full flex-col md:h-[80vh]">
      <div className="space-y-4 pb-4 text-left md:space-y-5">
        <PageTitle>
          Hi, I'm <span className="text-6xl font-thin text-primary-500 md:text-8xl">Acid</span>
          <span role="img" aria-label="waving hand" className="wave">
            👋🏻
          </span>
        </PageTitle>
        <p className="prose max-w-none pb-4 text-lg leading-7 text-gray-400">
          Hi there! My name is Zeeshan and I'm a high schooler who is obsessed with programming and
          cybersecurity. I am known to beat my keyboard until some useful bit of code comes up
          eventually.
        </p>
        <p className="prose max-w-none pb-4 text-lg leading-7 text-gray-400">
          But don't let my love for computers fool you – I'm a total dork at heart. I love cracking
          jokes (even if they're only funny to me) and making people laugh. I'm also a huge fan of
          memes and puns, so if you're into that kind of thing, we'll definately get along.
        </p>
        <p className="prose max-w-none pb-4 text-lg leading-7 text-gray-400">
          So why am I sharing all of this with you? Well, I started this blog to document my journey
          as a programmer and to share my thoughts and experiences with others. Whether you're a
          fellow programmer or just someone who is interested in the tech world, I hope you'll find
          something here that resonates with you. Thanks for stopping by!
        </p>
        <p className="prose max-w-none pb-4 text-lg leading-7 text-gray-400">
          Read more{' '}
          <Link href="/about" className="text-primary-500 hover:text-primary-400">
            About Me
          </Link>
        </p>
      </div>
    </div>
  )
}
