import { mediaQueries } from '@/src/styles/mediaQueries'
import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;

  ${mediaQueries('md')`
    border-radius: 10px;
  `};
`

export const StyledImage = styled.img`
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  position: absolute;
  width: 100%;
`

export const Text = styled.p`
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  z-index: 1;
`
