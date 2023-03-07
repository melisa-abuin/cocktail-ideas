import styled from 'styled-components'
import { mediaQueries } from '@/src/styles/mediaQueries'

export const BannerImage = styled.img`
  height: 76px;
  width: 221px;

  ${mediaQueries('md')`
    height: 126px;
    width: 457px;
  `};
`

export const PageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  flex-basis: 40%;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 470px;
  width: 100%;

  ${mediaQueries('md')`
    justify-content: flex-end;
  `};
`

export const Title = styled.h1`
  color: #ff0000;
  font-size: 48px;
  line-height: 48px;
  margin: 40px 0 20px 0;
`
