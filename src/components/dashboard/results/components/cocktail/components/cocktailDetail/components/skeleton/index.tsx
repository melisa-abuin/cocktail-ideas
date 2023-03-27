import { Container } from './styles'
import Image from 'next/image'

export const Skeleton = () => (
  <Container>
    <Image
      alt="skeleton-loader"
      height={200}
      src="/loading-skeleton.gif"
      width={325}
    />
  </Container>
)
