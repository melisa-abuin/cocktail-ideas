import { Container } from './styles'
import Image from 'next/image'

export const Loader = () => (
  <Container>
    <Image alt="loader" height={200} src="/loading-dots.gif" width={325} />
  </Container>
)
