import { Cocktail } from '@/src/types/cocktails'
import { Container, StyledImage, Text } from './styles'

export const Image = ({ strDrink, strDrinkThumb }: Cocktail) => (
  <Container>
    <StyledImage alt="drink" src={strDrinkThumb} />
    <Text>{strDrink}</Text>
  </Container>
)
