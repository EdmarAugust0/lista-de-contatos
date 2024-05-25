import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Form, Opcao, Opcoes } from './styles'
import { cadastrar } from '../../store/reducers/contatos'

import * as enums from '../../utils/enums/Contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tell, setTell] = useState('')
  const [genero, setGenero] = useState(enums.Genero.MULHER)

  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastrar({
        nome,
        email,
        tell,
        genero
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form as="form" onSubmit={adicionarContato}>
        <Campo
          as="input"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          as="input"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <Campo
          as="input"
          value={tell}
          onChange={(evento) => setTell(evento.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <Opcoes>
          <p>Gênero</p>
          {Object.values(enums.Genero).map((genero) => (
            <Opcao as="div" key={genero}>
              <input
                value={genero}
                type="radio"
                name="genero"
                onChange={(evento) =>
                  setGenero(evento.target.value as enums.Genero)
                }
                id={genero}
                defaultChecked={genero === enums.Genero.MULHER}
              />{' '}
              <label htmlFor={genero}>{genero}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar as="button" type="submit">
          Adicionar
        </BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
