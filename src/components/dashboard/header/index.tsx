import { Container, FixedContainer, Title } from './styles'
import Image from 'next/image'
import { SearchBox } from '../../common/searchbox'

type Props = {
  ingredient: string
}

export const Header = ({ ingredient }: Props) => {
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
        <SearchBox defaultValue={ingredient} size="small" />
      </Container>
    </FixedContainer>
  )
}
