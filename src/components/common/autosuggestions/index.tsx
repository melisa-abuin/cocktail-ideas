import { useState } from 'react'
import { SearchBox } from '../searchbox'
import { useQuery } from 'react-query'
import { Container, Option, Options } from './styles'
import { getIngredientsByName } from '@/src/api/getIngredientsByName'

type Props = {
  onSelect: (value: string) => void
  size?: 'medium' | 'small'
}

export const AutoSuggestions = ({ onSelect, size }: Props) => {
  const [value, setValue] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [isSelecting, setIsSelecting] = useState(false)

  const { data, refetch } = useQuery(
    'ingredients',
    () => getIngredientsByName(value),
    {
      enabled: !!value && value.length > 1,
    }
  )

  const handleChange = (value: string) => {
    setShowOptions(true)
    setValue(value)
    refetch()
  }

  const handleOnBlur = () => (isSelecting ? null : setShowOptions(false))

  const shouldCloseOptions = () => setIsSelecting(false)
  const shouldKeepOptionsOpen = () => setIsSelecting(true)

  const handleSelectOption = (option: string) => {
    setValue(option)
    setShowOptions(false)
    onSelect(option)
  }

  return (
    <Container onBlur={handleOnBlur}>
      <SearchBox onChange={handleChange} value={value} size={size} />
      {data && showOptions && (
        <Options
          onMouseEnter={shouldKeepOptionsOpen}
          onMouseLeave={shouldCloseOptions}
        >
          {data.map((suggestions) => (
            <Option
              key={suggestions.idIngredient}
              onClick={() => handleSelectOption(suggestions.strIngredient)}
            >
              {suggestions.strIngredient}
            </Option>
          ))}
        </Options>
      )}
    </Container>
  )
}
