import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import Layout from '../../components/layout/Layout'

function FirstPost () {
  return (
    <Layout>
      <Head>
        <title>First Post</title>

        {/* FIXME: "Error: next/script shouldn't be used inside next/head" */}
        <Script
          src='https://connect.facebook.net/en_US/sdk.js'
          strategy='lazyOnload'
          onLoad={() =>
            console.log('script loaded correctly, window.FB has been populated')}
        />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
} export default FirstPost
