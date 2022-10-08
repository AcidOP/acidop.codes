import SimpleAnalytics from './SimpleAnalytics'
import GoogleAnalytics from './GoogleAnalytics'
import siteMetadata from '@/data/siteMetadata'

const Analytics = () => {
  return (
    <>
      {siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
      {siteMetadata.analytics.googleAnalyticsId && <GoogleAnalytics />}
    </>
  )
}

export default Analytics
