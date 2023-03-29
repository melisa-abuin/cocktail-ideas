import { getCocktailById } from '@/src/api/getCocktailById'
import { useQuery } from 'react-query'

export const useCocktailById = (id: string) =>
  useQuery(['cocktail', id], () => getCocktailById(id), {
    select: (res) => (res ? res[0] : null),
  })
