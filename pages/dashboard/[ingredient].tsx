import { Column } from '@/src/components/section/column'
import { Header } from '@/src/components/dashboard/header'
import { Results } from '@/src/components/dashboard/results'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Dashboard() {
  const router = useRouter()
  const { ingredient } = router.query

  return (
    <>
      <Head>
        <title>Cocktails - Results</title>
      </Head>

      <Column>
        <Header />
        <Results ingredient={ingredient as string} />
      </Column>
    </>
  )
}
