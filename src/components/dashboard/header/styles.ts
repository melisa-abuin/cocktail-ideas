import styled from 'styled-components'

export const Container = styled.div<{ basis?: number }>`
  align-items: center;
  display: flex;
  flex-basis: ${({ basis }) => basis ? `${basis}px` : 'auto'};
  flex-direction: row;
`

export const Title = styled.h1`
  color: #FF0000;
  font-size: 24px;
  line-height: 24px;
`