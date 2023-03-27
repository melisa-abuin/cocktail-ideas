import { Container } from './styles'
import Image from 'next/image'

export const Skeleton = () => (
  <Container>
    <Image
      alt="skeleton-loader"
      fill
      sizes="100vw"
      src="/loading-skeleton.gif"
    />
  </Container>
)
