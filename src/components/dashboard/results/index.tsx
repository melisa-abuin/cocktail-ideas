import { Grid, Text } from './styles'
import { Column } from '../../section/column'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getCocktailsByIngredient } from '@/src/api/getCocktailsByIngredient'
import { Cocktails } from '@/src/types/cocktails'
import { Image } from './Image'

export const Results = () => {
  const router = useRouter()
  const { ingredient } = router.query
  const [cocktails, setCocktails] = useState<Cocktails | null>([])

  useEffect(() => {
    const fetchCocktails = async () => {
      const result = await getCocktailsByIngredient(ingredient as string)

      setCocktails(result)
    }

    fetchCocktails()
  }, [ingredient])

  return (
    <Column width={700}>
      <Text>Cocktails that you can prepare with "{ingredient}":</Text>
      <Grid>
        {cocktails?.map((cocktail) => (
          <Image key={cocktail.idDrink} {...cocktail} />
        ))}
      </Grid>
    </Column>
  )
}
