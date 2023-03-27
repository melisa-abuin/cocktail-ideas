import { CloseIcon } from '@/src/assets/svg/closeIcon'
import { PropsWithChildren } from 'react'
import {
  Body,
  Header,
  IconContainer,
  ModalContainer,
  PageBackground,
  Title,
} from './styles'

interface Props {
  closeModal: () => void
  isOpen: boolean
  title: string
}

export const Modal = ({
  children,
  closeModal,
  isOpen,
  title,
}: PropsWithChildren<Props>) => {
  if (!isOpen) {
    return null
  }

  return (
    <PageBackground>
      <ModalContainer>
        <Header>
          <Title>{title}</Title>

          <IconContainer onClick={closeModal}>
            <CloseIcon />
          </IconContainer>
        </Header>

        <Body>{children}</Body>
      </ModalContainer>
    </PageBackground>
  )
}
