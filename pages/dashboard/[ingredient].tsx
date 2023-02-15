import { Column } from '@/src/components/section/column'
import { Header } from '@/src/components/dashboard/header'
import { Results } from '@/src/components/dashboard/results'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const router = useRouter()
  const { ingredient } = router.query

  return (
    <Column>
      <Header />
      <Results ingredient={ingredient as string} />
    </Column>
  )
}
