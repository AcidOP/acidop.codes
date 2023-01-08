import Link from './Link'
import PageTitle from './PageTitle'

export default function Hero() {
  return (
    <div className="flex w-full flex-col">
      <div className="space-y-4 pb-4 text-left md:space-y-5">
        <PageTitle>
          Hi, I'm <span className="text-6xl font-thin text-primary-500 md:text-8xl">Acid</span>
          <span role="img" aria-label="waving hand" className="wave">
            👋🏻
          </span>
        </PageTitle>
        <h2 className="prose max-w-none py-4 text-3xl leading-7 text-gray-300">
          Known to beat my keyboard until some useful bit of code comes up eventually.
        </h2>
        <p className="prose max-w-none pb-3 text-lg leading-7 text-gray-400">
          My name is Zeeshan and I'm a high schooler who is obsessed with programming and
          cybersecurity. I love to break things and play with fire, so naturally I love programming.
          (Did you get the javascript reference? 😁)
        </p>
        <p className="prose max-w-none pb-3 text-lg leading-7 text-gray-400">
          But don't let my love for computers fool you – I'm a total dork at heart. I love cracking
          jokes (even if they're only funny to me) and making people laugh. I'm also a huge fan of
          memes and puns, so if you're into that kind of thing, we'll definately get along.
        </p>
        <p className="prose max-w-none pb-3 text-lg leading-7 text-gray-400">
          So if you're looking for a programming resource that won't make you fall asleep at your
          keyboard, even at a cost of a few brain cells 🧠, you've come to the right place! Thanks
          for stopping by, and don't be afraid to <Link href="/contact">reach out</Link> if you have
          any questions or just want to connect. I'm always up for a good conversation and cheap
          laughs.
        </p>
        <p className="prose max-w-none pb-3 text-lg leading-7 text-gray-400">
          Read more{' '}
          <Link href="/about" className="text-primary-500 hover:text-primary-400">
            About Me
          </Link>
        </p>
      </div>
    </div>
  )
}
