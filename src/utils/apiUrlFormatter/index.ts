import { apiBaseUrl } from "@/src/constants/api"

type Props = {
  entity: 'cocktail' | 'ingredient'
  param: string
}

export const apiUrlFormatter = ({ entity, param }: Props) => {
  switch(entity){
    case 'cocktail':
      return `${apiBaseUrl}/search.php?s=${param}`
    case 'cocktail':
      return `${apiBaseUrl}/search.php?i=${param}`
    default:
      return apiBaseUrl
  }
}