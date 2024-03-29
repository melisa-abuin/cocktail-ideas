import { useState } from 'react'
import { SearchBox } from '../searchbox'
import { Container, Label, Option, Options } from './styles'
import { useIngredientsByName } from '@/src/hooks/useIngredientsByName'

interface Props {
  label?: string
  onSelect: (value: string) => void
  size?: 'medium' | 'small'
}

export const AutoSuggestions = ({
  label,
  onSelect,
  size = 'medium',
}: Props) => {
  const [value, setValue] = useState('')
  const [showOptions, setShowOptions] = useState(false)
  const [isSelecting, setIsSelecting] = useState(false)

  const { data } = useIngredientsByName({
    name: value,
    enabled: !!value && value.length > 1,
  })

  const handleChange = (value: string) => {
    setShowOptions(true)
    setValue(value)
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
    <Container onBlur={handleOnBlur} size={size}>
      {!!label && <Label>{label}</Label>}

      <Container size={size}>
        <SearchBox onChange={handleChange} value={value} size={size} />
        {data && showOptions && (
          <Options
            onMouseEnter={shouldKeepOptionsOpen}
            onMouseLeave={shouldCloseOptions}
            size={size}
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
    </Container>
  )
}
