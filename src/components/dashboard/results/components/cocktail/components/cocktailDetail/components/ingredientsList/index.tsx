import { Cocktail } from '@/src/types/cocktails'
import { Text } from '@/src/components/section/text'
import { Container } from './styles'
import { useMemo } from 'react'

type Props = Cocktail & { type: 'Measure' | 'Ingredient' }

export const IngredientsList = (props: Props) => {
  const ingredientsData = useMemo(
    () =>
      Object.entries(props).filter(
        ([key, value]) => key.startsWith(`str${props.type}`) && !!value
      ),
    []
  )

  return (
    <Container>
      {ingredientsData.map(([key, value]) => (
        <Text key={key} type={props.type === 'Measure' ? 'error' : 'normal'}>
          {value}
        </Text>
      ))}
    </Container>
  )
}
