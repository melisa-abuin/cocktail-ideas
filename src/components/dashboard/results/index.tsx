import { Container, Grid } from './styles'
import { Text } from '@/src/components/section/text'
import { Image } from './image'
import { Loader } from './loader'
import { ErrorMessage } from './errorMessage'
import { useCocktails } from '@/src/hooks/useCocktails'

type Props = {
  ingredient: string
}

export const Results = ({ ingredient }: Props) => {
  const { isFetching, data, error } = useCocktails(ingredient as string)

  if (isFetching) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage />
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
