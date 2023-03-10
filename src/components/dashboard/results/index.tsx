import { Container, Grid, TextContainer } from './styles'
import { Text } from '@/src/components/section/text'
import { Image } from './image'
import { Loader } from './loader'
import { ErrorMessage } from './errorMessage'
import { useCocktailsByIngredient } from '@/src/hooks/useCocktailsByIngredient'

type Props = {
  ingredient: string
}

export const Results = ({ ingredient }: Props) => {
  const { isFetching, data, error } = useCocktailsByIngredient(
    ingredient as string
  )

  if (isFetching) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage />
  }

  return (
    <Container width={700}>
      <TextContainer>
        <Text>Cocktails that you can prepare with "{ingredient}":</Text>
      </TextContainer>
      <Grid>
        {data?.map((cocktail) => (
          <Image key={cocktail.idDrink} {...cocktail} />
        ))}
      </Grid>
    </Container>
  )
}
