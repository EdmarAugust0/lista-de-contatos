import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const ListaDeContatos = () => (
  <Container>
    <p>
      2 contatos do gênero: &ldquo;gênero&rdquo; que se chama(m)
      &ldquo;Nome&rdquo;
    </p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </Container>
)

export default ListaDeContatos
