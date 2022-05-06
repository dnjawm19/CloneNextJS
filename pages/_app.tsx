import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../src/components/NavBar'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import 'inter-ui/inter.css'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Wrapper>
        <Header />
        <NavBar />
        <Component {...pageProps} />
        <Footer/>
      </Wrapper>
    </>
  )
}

export default MyApp
