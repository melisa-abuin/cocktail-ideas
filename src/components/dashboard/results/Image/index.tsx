import { Cocktail } from '@/src/types/cocktails'
import { Container, StyledImage, Text } from './styles'

export const Image = ({ idDrink, strDrink, strDrinkThumb }: Cocktail) => (
  <Container key={idDrink}>
    <StyledImage alt="banner" src={strDrinkThumb} />
    <Text>{strDrink}</Text>
  </Container>
)
