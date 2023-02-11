import { Container, FixedContainer, Title } from './styles'
import Image from 'next/image'
import { Row } from '../../section/row'
import { SearchBox } from '../../common/searchbox'

export const Header = () => {
  return (
    <FixedContainer>
      <Container basis={180}>
        <Image
          alt="banner"
          height={42}
          src="/cocktails-single-icon.jpg"
          width={52}
        />
        <Title>Cocktails</Title>
      </Container>
      <Container basis={700}>
        <SearchBox size="small" />
      </Container>
    </FixedContainer>
  )
}
