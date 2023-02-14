import { Addon, Container, Input } from './styles'
import { SearchIcon } from '@/src/assets/svg/searchicon'
import { ChangeEvent } from 'react'

type Props = {
  value?: string
  onChange: (value: string) => void
  size?: 'medium' | 'small'
}

export const SearchBox = ({ onChange, size = 'medium', value }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <Container size={size}>
      <Input
        inputSize={size}
        onChange={handleChange}
        placeholder="Type ingredient"
        value={value}
      />
      <Addon size={size}>
        <SearchIcon />
      </Addon>
    </Container>
  )
}
