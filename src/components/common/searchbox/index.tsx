import { Addon, Container, Input } from './styles'
import { SearchIcon } from '@/src/assets/svg/searchicon'

type Props = {
  defaultValue?: string
  size?: 'medium' | 'small'
}

export const SearchBox = ({ defaultValue, size = 'medium' }: Props) => {
  return (
    <Container size={size}>
      <Input
        defaultValue={defaultValue}
        inputSize={size}
        placeholder="Type ingredient"
      />
      <Addon size={size}>
        <SearchIcon />
      </Addon>
    </Container>
  )
}
