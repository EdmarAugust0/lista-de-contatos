import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Props } from '.'

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  background-color: ${variaveis.branco};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`

export const Contador = styled.div`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.div`
  font-size: 14px;
`
