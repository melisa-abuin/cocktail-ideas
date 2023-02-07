import { Column } from "@/src/components/section/column"
import { Header } from "@/src/components/home/header"
import { SearchBox } from "@/src/components/home/searchbox"

export default function Home() {
  return (
    <Column>
      <Header />
      <SearchBox />
    </Column>
  )
}