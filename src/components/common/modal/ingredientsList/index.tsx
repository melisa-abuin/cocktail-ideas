import { Column } from '@/src/components/section/column'
import { Cocktail } from '@/src/types/cocktails'
import { Container } from './styles'
import { Text } from '@/src/components/section/text'

export const IngredientsList = (props: Cocktail) => (
  <Container>
    <Column>
      {Object.entries(props)
        .filter(([key, value]) => key.startsWith('strMeasure') && !!value)
        .map(([_, value]) => (
          <Text type="error">{value}</Text>
        ))}
    </Column>

    <Column>
      {Object.entries(props)
        .filter(([key, value]) => key.startsWith('strIngredient') && !!value)
        .map(([_, value]) => (
          <Text>{value}</Text>
        ))}
    </Column>
  </Container>
)
