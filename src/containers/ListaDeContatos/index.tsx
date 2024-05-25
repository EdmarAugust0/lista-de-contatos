import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { nomeContato, categoria, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (nomeContato !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(nomeContato.toLowerCase()) >= 0
      )

      if (categoria === 'genero') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.genero === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      nomeContato !== undefined && nomeContato.length > 0
        ? `que se
  chamam "${nomeContato}"`
        : ''

    if (categoria === 'todos') {
      mensagem = `${quantidade} contato(s) no total ${complementacao}`
    } else {
      mensagem = `${quantidade} contato(s) do gênero: "${valor}" ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltragem(contatos.length)

  return (
    <MainContainer>
      <Titulo>{mensagem}</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contato
              nome={c.nome}
              email={c.email}
              tell={c.tell}
              genero={c.genero}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
