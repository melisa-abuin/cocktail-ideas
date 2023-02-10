import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
`

export const StyledImage = styled.img`
  height: 100%;
  position: absolute;
  opacity: 0.5;
  width: 100%;
`

export const Text = styled.p`
  color: #FFFFFF;
  font-size: 14px;
  text-align: center;
  z-index: 1;
`