import '../styles/globals.css'
import Head from 'next/head'
import Header1 from '../components/Header/Header1'
//import Header from '../components/Header/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Head>
          <title>Happy 29!</title>
          <link rel="icon" href="/Pacman.png" />
        </Head>
        <Header1 />
        <Component {...pageProps} />
        </div>
  )
}

export default MyApp
