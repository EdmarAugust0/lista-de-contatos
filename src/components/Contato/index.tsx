import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { Dados } from '../../styles'
import { editar, remover } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

import * as S from './styles'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  tell: tellOriginal,
  genero,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tell, setTell] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
  }, [nomeOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (tellOriginal.length > 0) {
      setTell(tellOriginal)
    }
  }, [tellOriginal])

  function cancelaEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTell(tellOriginal)
  }

  return (
    <S.Card>
      <label>Nome:</label>
      <Dados
        disabled={!estaEditando}
        as="textarea"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      >
        Nome do Contato
      </Dados>
      <label>E-mail:</label>
      <Dados
        disabled={!estaEditando}
        as="textarea"
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      >
        {email}
      </Dados>
      <label>Telefone:</label>
      <Dados
        disabled={!estaEditando}
        as="textarea"
        value={tell}
        onChange={(evento) => setTell(evento.target.value)}
      >
        {tell}
      </Dados>
      <S.GeneroTag as="p" genero={genero}>
        {genero}
      </S.GeneroTag>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              as="button"
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    email,
                    tell,
                    genero,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelarExcluir as="button" onClick={cancelaEdicao}>
              Cancelar
            </S.BotaoCancelarExcluir>
          </>
        ) : (
          <>
            <S.Botao as="button" onClick={() => setEstaEditando(true)}>
              Editar
            </S.Botao>
            <S.BotaoCancelarExcluir
              as="button"
              onClick={() => dispatch(remover(id))}
            >
              Excluir
            </S.BotaoCancelarExcluir>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
