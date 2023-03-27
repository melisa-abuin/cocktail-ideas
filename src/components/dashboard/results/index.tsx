import { Container, Grid, TextContainer } from './styles'
import { Text } from '@/src/components/section/text'
import { Loader } from './components/loader'
import { useCocktailsByIngredient } from '@/src/hooks/useCocktailsByIngredient'
import { Cocktail } from './components/cocktail'
import { ErrorMessage } from '../../common/errorMessage'

interface Props {
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
        <Text>
          Cocktails that you can prepare with <strong>{ingredient}</strong>:
        </Text>
      </TextContainer>

      <Grid>
        {data?.map((cocktail) => (
          <Cocktail key={cocktail.idDrink} {...cocktail} />
        ))}
      </Grid>
    </Container>
  )
}
