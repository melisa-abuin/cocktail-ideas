import styled from 'styled-components'

type Size = 'medium' | 'small'

export const Container = styled.div<{ size: Size }>`
  display: flex;
  flex-direction: column;
  max-width: ${({ size }) => (size === 'medium' ? `470px` : '250px')};
  position: relative;
  width: 100%;
`

export const Options = styled.div<{ size: Size }>`
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({ size }) => (size === 'medium' ? `50px` : '32px')};
  width: 100%;
`
export const Option = styled.div`
  cursor: pointer;
  font-size: 14px;
  padding: 6px 12px;
`
