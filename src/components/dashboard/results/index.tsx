import { Grid, Text } from "./styles"
import { Column } from "../../section/column"
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import { getCocktailsByIngredient } from "@/src/api/getCocktailsByIngredient"
import { Drinks } from "@/src/types/drinks"

export const Results = () => {
  const router = useRouter()
  const { ingredient } = router.query
  const [ drinks, setDrinks ] = useState<Drinks | null>([])

  useEffect(() => {
    const fetchCocktails = async () => {
      const result = await getCocktailsByIngredient(ingredient as string)

      setDrinks(result)
    }

    fetchCocktails()
  }, [ingredient])

  return (
    <Column>
      <Text>Cocktails that you can prepare with "{ingredient}":</Text>
      <Grid>
        {ingredient}
      </Grid>
    </Column>
  )
}