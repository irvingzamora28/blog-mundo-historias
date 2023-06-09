import '@/css/tailwind.css'
import '@/css/prism.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import HomeLayoutWrapper from '@/components/HomeLayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { useRouter } from 'next/router'
import GeneralLayoutWrapper from '@/components/GeneralLayoutWrapper'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const isHomePage = router.pathname === '/'
  const Layout = isHomePage ? HomeLayoutWrapper : GeneralLayoutWrapper

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
