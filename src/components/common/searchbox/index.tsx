import { Addon, Container, Input } from './styles'
import { SearchIcon } from '@/src/assets/svg/searchicon'

type Props = {
  size?: 'medium' | 'small'
}

export const SearchBox = ({ size = 'medium' }: Props) => {
  return (
    <Container size={size}>
      <Input inputSize={size} placeholder="Type ingredient" />
      <Addon size={size}>
        <SearchIcon />
      </Addon>
    </Container>
  )
}
