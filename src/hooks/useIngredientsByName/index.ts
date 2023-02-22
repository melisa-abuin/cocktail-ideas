import { getIngredientsByName } from '@/src/api/getIngredientsByName'
import { useQuery } from 'react-query'

type Props = {
  name: string
  enabled: boolean
}

export const useIngredientsByName = ({ name, enabled }: Props) =>
  useQuery(['ingredients', name], () => getIngredientsByName(name), {
    enabled,
  })
