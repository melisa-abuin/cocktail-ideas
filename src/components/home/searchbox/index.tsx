import { Addon, Container, Input } from "./styles"
import { SearchIcon } from "@/src/assets/svg/searchicon"

export const SearchBox = () => {
  return (
    <Container>
      <Input placeholder="Type ingredient" />
      <Addon>
        <SearchIcon />
      </Addon>
    </Container>
  )
}