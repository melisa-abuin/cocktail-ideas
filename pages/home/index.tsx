import { Column } from '@/src/components/section/column'
import { Header } from '@/src/components/home/header'
import { AutoSuggestions } from '@/src/components/common/autosuggestions'
import { useRedirectToDashboard } from '@/src/hooks/useRedirectToDashboard'

export default function Home() {
  const redirectToDashboard = useRedirectToDashboard()

  return (
    <Column>
      <Header />
      <AutoSuggestions onSelect={redirectToDashboard} />
    </Column>
  )
}
