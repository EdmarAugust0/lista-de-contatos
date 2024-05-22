import Tarefa from '../../components/Contato'
import { Container } from './styles'

const Contato = [
  {
    nome: 'Edmar Augusto',
    email: 'edmar.tuti@hotmail.com',
    tell: '(31)98250-8412',
    genero: 'mulher'
  },
  {
    nome: 'Edmar Augusto',
    email: 'edmar.tuti@hotmail.com',
    tell: '(31)98250-8412',
    genero: 'mulher'
  },
  {
    nome: 'Edmar Augusto',
    email: 'edmar.tuti@hotmail.com',
    tell: '(31)98250-8412',
    genero: 'homem'
  }
]

const ListaDeContatos = () => (
  <Container>
    <p>
      2 contatos do gênero: &ldquo;gênero&rdquo; que se chamam
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
