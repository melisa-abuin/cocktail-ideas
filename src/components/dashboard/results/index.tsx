import { Container, Grid } from './styles'
import { Text } from '@/src/components/section/text'
import { Image } from './image'
import { Loader } from './loader'
import { getCocktailsByIngredient } from '@/src/api/getCocktailsByIngredient'
import { useQuery } from 'react-query'

type Props = {
  ingredient: string
}

export const Results = ({ ingredient }: Props) => {
  const { isFetching, data, error } = useQuery('cocktails', () =>
    getCocktailsByIngredient(ingredient as string)
  )

  if (isFetching) {
    return <Loader />
  }

  if (error) {
    return (
      <Text type="error">Ups, something went wrong! Try again please.</Text>
    )
  }

  return (
    <Container width={700}>
      <Text>Cocktails that you can prepare with "{ingredient}":</Text>
      <Grid>
        {data?.map((cocktail) => (
          <Image key={cocktail.idDrink} {...cocktail} />
        ))}
      </Grid>
    </Container>
  )
}
