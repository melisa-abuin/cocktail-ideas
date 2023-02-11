import { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { createGlobalStyle } from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
