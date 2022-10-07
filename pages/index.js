import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
    </>
  )
}
