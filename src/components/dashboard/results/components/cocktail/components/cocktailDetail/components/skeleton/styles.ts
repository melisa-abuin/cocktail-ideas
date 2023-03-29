import styled from 'styled-components'
import { mediaQueries } from '@/src/styles/mediaQueries'

export const Container = styled.div`
  height: 200px;
  padding: 20px 0;
  position: relative;
  width: 100%;

  ${mediaQueries('md')`
    width: 324px;
  `};
`
