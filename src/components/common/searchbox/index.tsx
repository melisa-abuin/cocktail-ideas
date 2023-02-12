import { Addon, Container, Input } from './styles'
import { SearchIcon } from '@/src/assets/svg/searchicon'
import { ChangeEvent } from 'react'

type Props = {
  defaultValue?: string
  onChange: (value: string) => void
  size?: 'medium' | 'small'
}

export const SearchBox = ({
  defaultValue,
  onChange,
  size = 'medium',
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <Container size={size}>
      <Input
        defaultValue={defaultValue}
        inputSize={size}
        onChange={handleChange}
        placeholder="Type ingredient"
      />
      <Addon size={size}>
        <SearchIcon />
      </Addon>
    </Container>
  )
}
