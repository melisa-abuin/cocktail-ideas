import styled from 'styled-components'

type Size = 'medium' | 'small'

export const Addon = styled.div<{ size: Size }>`
  position: absolute;
  right: ${({ size }) => (size === 'medium' ? `24px` : '12px')};
  top: ${({ size }) => (size === 'medium' ? `16px` : '7px')};
`

export const Container = styled.div<{ size: Size }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  max-width: ${({ size }) => (size === 'medium' ? `470px` : '250px')};
  position: relative;
  width: 100%;
`

export const Input = styled.input<{ inputSize: Size }>`
  border: 1px solid #787878;
  border-radius: 30px;
  flex: 1;
  font-size: 16px;
  padding: ${({ inputSize }) =>
    inputSize === 'medium' ? `16px 24px` : '6px 14px'};
`
