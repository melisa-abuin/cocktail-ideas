import { Cocktail } from '@/src/types/cocktails'
import { Container, StyledImage, Text } from './styles'

type Props = Pick<Cocktail, 'strDrink' | 'strDrinkThumb'> & {
  onClick: () => void
}

export const Image = ({ onClick, strDrink, strDrinkThumb }: Props) => (
  <Container onClick={onClick}>
    <StyledImage alt="drink" src={strDrinkThumb} />
    <Text>{strDrink}</Text>
  </Container>
)
