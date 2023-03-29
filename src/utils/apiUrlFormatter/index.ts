import { apiBaseUrl } from '@/src/constants/api'

interface Props {
  entity: 'cocktail' | 'ingredient'
  param: string
}

export const apiUrlFormatter = ({ entity, param }: Props) => {
  switch (entity) {
    case 'cocktail':
      return `${apiBaseUrl}/search.php?s=${param}`
    case 'ingredient':
      return `${apiBaseUrl}/search.php?i=${param}`
    default:
      return apiBaseUrl
  }
}
