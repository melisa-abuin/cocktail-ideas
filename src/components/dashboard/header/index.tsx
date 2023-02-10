import { Container, Title } from "./styles"
import Image from "next/image"
import { Row } from "../../section/row"
import { SearchBox } from "../../common/searchbox"

export const Header = () => {
  return (
    <Row>
      <Container basis={290}>
        <Image alt="banner" height={42} src="/cocktails-single-icon.jpg" width={52} />
        <Title>Cocktails</Title>
      </Container>
      <Container basis={700}>
        <SearchBox />
      </Container>
    </Row>
  )
}