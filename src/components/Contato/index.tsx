import { useState } from 'react'

import { Dados } from '../../styles'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

type Props = {
  nome: string
  email: string
  tell: string
  genero: enums.Genero
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
      <S.GeneroTag as="p" genero={genero}>
        {genero}
      </S.GeneroTag>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarExcluir
              as="button"
              onClick={() => setEstaEditando(false)}
            >
              Cancelar
            </S.BotaoCancelarExcluir>
          </>
        ) : (
          <>
            <S.Botao as="button" onClick={() => setEstaEditando(true)}>
              Editar
            </S.Botao>
            <S.BotaoCancelarExcluir>Excluir</S.BotaoCancelarExcluir>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
