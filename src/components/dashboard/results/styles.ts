import { mediaQueries } from '@/src/styles/mediaQueries'
import styled from 'styled-components'
import { Column } from '../../section/column'

export const Container = styled(Column)`
  padding-top: 8px;
`

export const Grid = styled.div`
  display: grid;
  gap: 13px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 225px;
  width: 100%;

  ${mediaQueries('md')`
    grid-template-columns: 1fr 1fr 1fr;
  `};
`

export const TextContainer = styled.div`
  padding-left: 15px;
  width: 100%;

  ${mediaQueries('md')`
    padding-left: 0;
  `};
`
