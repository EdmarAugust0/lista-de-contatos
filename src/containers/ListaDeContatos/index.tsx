import Contato from '../../components/Contato'
import { Container } from './styles'

import * as enums from '../../utils/enums/Contato'

const contatos = [
  {
    nome: 'Edmar Augusto',
    email: 'edmar.tuti@hotmail.com',
    tell: '(31)98250-8412',
    genero: enums.Genero.MULHER
  },
  {
    nome: 'Edmar Augusto',
    email: 'edmar.tuti@hotmail.com',
    tell: '(31)98250-8412',
    genero: enums.Genero.MULHER
  },
  {
    nome: 'Edmar Augusto',
    email: 'edmar.tuti@hotmail.com',
    tell: '(31)98250-8412',
    genero: enums.Genero.HOMEM
  },
  {
    nome: 'Edmar Augusto',
    email: 'edmar.tuti@hotmail.com',
    tell: '(31)98250-8412',
    genero: enums.Genero.MULHER
  },
  {
    nome: 'Edmar Augusto',
    email: 'edmar.tuti@hotmail.com',
    tell: '(31)98250-8412',
    genero: enums.Genero.HOMEM
  }
]

const ListaDeContatos = () => (
  <Container>
    <p>
      2 contatos do gênero: &ldquo;gênero&rdquo; que se chamam
      &ldquo;Nome&rdquo;
    </p>
    <ul>
      {contatos.map((t) => (
        <li key={t.nome}>
          <Contato
            nome={t.nome}
            email={t.email}
            tell={t.tell}
            genero={t.genero}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeContatos
