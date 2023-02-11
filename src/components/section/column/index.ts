import styled from 'styled-components'

export const Column = styled.div<{ width?: number }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: ${({ width }) => (width ? `${width}px` : 'none')};
  width: 100%;
`
