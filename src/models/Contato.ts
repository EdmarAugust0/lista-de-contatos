import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  email: string
  tell: string
  genero: enums.Genero
  id: number

  constructor(
    nome: string,
    email: string,
    tell: string,
    genero: enums.Genero,
    id: number
  ) {
    this.nome = nome
    this.email = email
    this.tell = tell
    this.genero = genero
    this.id = id
  }
}

export default Contato
