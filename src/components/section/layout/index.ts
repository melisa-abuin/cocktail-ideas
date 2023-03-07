import { mediaQueries } from '@/src/styles/mediaQueries'
import styled from 'styled-components'

export const Layout = styled.div`
  box-sizing: border-box;
  height: 100vh;
  padding: 0 20px 0 20px;
  width: 100vw;

  ${mediaQueries('md')`
    padding: 0;
  `};
`
