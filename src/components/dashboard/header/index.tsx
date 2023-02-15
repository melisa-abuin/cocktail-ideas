import { Container, FixedContainer, Title } from './styles'
import Image from 'next/image'
import { AutoSuggestions } from '../../common/autosuggestions'
import { useRedirectToDashboard } from '@/src/hooks/useRedirectToDashboard'

export const Header = () => {
  const redirectToDashboard = useRedirectToDashboard()

  return (
    <FixedContainer>
      <Container basis={180}>
        <Image
          alt="banner"
          height={42}
          src="/cocktails-single-icon.jpg"
          width={52}
        />
        <Title>Cocktails</Title>
      </Container>
      <Container basis={700}>
        <AutoSuggestions onSelect={redirectToDashboard} size="small" />
      </Container>
    </FixedContainer>
  )
}
