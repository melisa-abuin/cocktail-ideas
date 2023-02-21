import { Cocktail } from '@/src/types/cocktails'
import { Container, StyledImage, Text } from './styles'

export const Image = ({ strDrink, strDrinkThumb }: Cocktail) => (
  <Container>
    <StyledImage alt="loader" src={strDrinkThumb} />
    <Text>{strDrink}</Text>
  </Container>
)
