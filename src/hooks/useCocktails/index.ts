import { getCocktailsByIngredient } from '@/src/api/getCocktailsByIngredient'
import { useQuery } from 'react-query'

export const useCocktails = (ingredient: string) =>
  useQuery(['cocktails', ingredient], () =>
    getCocktailsByIngredient(ingredient)
  )
