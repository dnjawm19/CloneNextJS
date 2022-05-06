import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import 'inter-ui/inter.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
