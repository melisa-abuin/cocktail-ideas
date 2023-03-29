import styled from 'styled-components'
import { ReactNode } from 'react'

type TextType = 'error' | 'normal' | undefined

interface Props {
  children: ReactNode
  type?: TextType
}

const getTextColor = (type: TextType) => {
  switch (type) {
    case 'error':
      return '#FF0000'
    case 'normal':
      return '#000000'
    default:
      return '#000000'
  }
}

export const StyledText = styled.p<{ type: TextType }>`
  color: ${({ type }) => getTextColor(type)};
  font-size: 14px;
  text-align: start;
  width: 100%;
`

export const Text = ({ children, type }: Props) => (
  <StyledText type={type}>{children}</StyledText>
)
