import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import Header from '@/config'
import Layout from '@/components/Layout'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        {/* <Header /> */}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
export default App
