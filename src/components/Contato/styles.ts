import styled from 'styled-components'

import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contato'

type TagProps = {
  genero?: enums.Genero
}

function retornaCorDeFundo(props: TagProps): string {
  if ('genero' in props) {
    if (props.genero === enums.Genero.MULHER) return variaveis.verde
    return variaveis.roxo
  }
  return ''
}

export const Card = styled.div`
  background-color: ${variaveis.cinzaClaro};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-top: 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
`

export const GeneroTag = styled.span<TagProps>`
  padding: 4px 8px;
  margin-bottom: 8px;
  color: ${variaveis.branco};
  background-color: ${(props) => retornaCorDeFundo(props)};
  font-weight: bold;
  font-size: 10px;
  border-radius: 8px;
  width: 50px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  background-color: #2f3640;
  color: ${variaveis.branco};
  padding: 8px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verdeClaro};
`

export const BotaoCancelarExcluir = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
