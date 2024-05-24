import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'
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

  return (
    <Container>
      <p>
        2 contatos do gênero: &ldquo;gênero&rdquo; que se chamam &ldquo;
        {nomeContato}&rdquo;
      </p>
      <ul>
        {filtraContatos().map((c) => (
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
    </Container>
  )
}

export default ListaDeContatos
