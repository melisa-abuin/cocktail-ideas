import { mediaQueries } from '@/src/styles/mediaQueries'
import styled from 'styled-components'
import { Row } from '../../section/row'

export const Container = styled.div<{ pl?: number; isClickable?: boolean }>`
  align-items: center;
  cursor: ${({ isClickable }) => (isClickable ? `pointer` : 'auto')};
  display: flex;
  flex-direction: row;
  padding-left: 10px;

  ${mediaQueries('md')`
    padding-left: 25px;
  `};
`

export const FixedContainer = styled(Row)`
  background-color: #ffffff;
  box-shadow: 0px 5px 5px 2px rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
  padding: 0 10px;
  position: sticky;
  top: 0;
  z-index: 10;
`

export const Title = styled.h1`
  color: #ff0000;
  display: none;
  font-size: 24px;
  line-height: 24px;

  ${mediaQueries('md')`
    display: inline;
  `};
`
