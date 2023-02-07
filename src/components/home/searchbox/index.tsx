import { Addon, Container, Input } from "./styles"
import { SearchIcon } from "../../../assets/svg/searchicon"

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