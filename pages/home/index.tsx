import { Column } from '@/src/components/section/column'
import { Header } from '@/src/components/home/header'
import { SearchBox } from '@/src/components/common/searchbox'

export default function Home() {
  return (
    <Column>
      <Header />
      <SearchBox />
    </Column>
  )
}
