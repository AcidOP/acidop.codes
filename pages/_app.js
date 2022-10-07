import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import Head from 'next/head'

import ScrollTop from '@/components/ScrollTop'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <div>
        {isDevelopment && isSocket && <ClientReload />}
        <Analytics />
        <LayoutWrapper>
          <ScrollTop />
          <Component {...pageProps} />
        </LayoutWrapper>
      </div>
    </>
  )
}
