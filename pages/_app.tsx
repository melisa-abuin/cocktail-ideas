import { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { createGlobalStyle } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <main className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </main>
    </>
  )
}

export default MyApp
