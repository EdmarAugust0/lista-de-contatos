import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <Container>
      <p>
        2 contatos do gênero: &ldquo;gênero&rdquo; que se chamam
        &ldquo;Nome&rdquo;
      </p>
      <ul>
        {itens.map((c) => (
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
