import styled from 'styled-components'
import { Column } from '../../section/column'

export const Container = styled(Column)`
  padding-top: 8px;
`

export const Grid = styled.div`
  display: grid;
  gap: 13px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 225px;
`

export const Text = styled.p`
  color: #000000;
  font-size: 14px;
  text-align: start;
  width: 100%;
`
