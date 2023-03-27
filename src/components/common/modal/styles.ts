import styled from 'styled-components'
import { mediaQueries } from '@/src/styles/mediaQueries'

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid #fdc2c2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
  width: 100%;
`

export const IconContainer = styled.div`
  cursor: pointer;
`

export const ModalContainer = styled.div`
  background-color: #ffffff;
  border-radius: 0;
  box-sizing: border-box;
  height: 100%;
  max-width: unset;
  padding: 32px 40px;
  width: 100%;
  z-index: 11;

  ${mediaQueries('md')`
    border-radius: 5px;
    height: auto;
    max-width: 700px;

  `};
`

export const PageBackground = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 10;
`

export const Title = styled.label`
  color: #ff0000;
  font-size: 24px;
`
