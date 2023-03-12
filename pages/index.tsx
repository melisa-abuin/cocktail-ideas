import { Column } from '@/src/components/section/column'
import { Header } from '@/src/components/home/header'
import { AutoSuggestions } from '@/src/components/common/autosuggestions'
import { useRedirectToDashboard } from '@/src/hooks/useRedirectToDashboard'
import { Layout } from '@/src/components/section/layout'
import Head from 'next/head'

export default function Home() {
  const redirectToDashboard = useRedirectToDashboard()

  return (
    <>
      <Head>
        <title>Cocktails - Home Page</title>
      </Head>

      <Layout>
        <Column justifyContent="flex-start">
          <Header />

          <AutoSuggestions
            label="Do you have drinks at home but don't know what to prepare? Tell us which
        ones and we will find the cocktail for you"
            onSelect={redirectToDashboard}
          />
        </Column>
      </Layout>
    </>
  )
}
