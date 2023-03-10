import styled from 'styled-components'

export const Column = styled.div<{
  justifyContent?: 'center' | 'flex-start' | 'flex-end'
  width?: number
}>`
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent ?? 'center'};

  max-width: ${({ width }) => (width ? `${width}px` : 'none')};
  width: 100%;
`
