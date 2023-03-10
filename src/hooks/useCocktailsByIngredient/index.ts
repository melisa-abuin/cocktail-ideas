import { getCocktailsByIngredient } from '@/src/api/getCocktailsByIngredient'
import { useQuery } from 'react-query'

export const useCocktailsByIngredient = (ingredient: string) =>
  useQuery(['cocktails', ingredient], () =>
    getCocktailsByIngredient(ingredient)
  )
