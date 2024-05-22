import { useState } from 'react'

import { Dados } from '../../styles'

import * as S from './styles'

type Props = {
  nome: string
  email: string
  tell: string
  genero: string
}

const Contato = ({ email, genero, nome, tell }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <label>Nome:</label>
      <Dados as="textarea" value={nome}>
        Nome do Contato
      </Dados>
      <label>E-mail:</label>
      <Dados as="textarea" value={email}>
        {email}
      </Dados>
      <label>Telefone:</label>
      <Dados as="textarea" value={tell}>
        {tell}
      </Dados>
      <S.GeneroTag>{genero}</S.GeneroTag>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>Salvar</S.Botao>
            <S.Botao as="button" onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.Botao>
          </>
        ) : (
          <>
            <S.Botao as="button" onClick={() => setEstaEditando(true)}>
              Editar
            </S.Botao>
            <S.Botao>Excluir</S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
