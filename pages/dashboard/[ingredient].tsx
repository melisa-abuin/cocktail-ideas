import { Column } from '@/src/components/section/column'
import { Header } from '@/src/components/dashboard/header'
import { Results } from '@/src/components/dashboard/results'

export default function Dashboard() {
  return (
    <Column>
      <Header />
      <Results />
    </Column>
  )
}
