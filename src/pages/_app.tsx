import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Igor Gonçalo</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
