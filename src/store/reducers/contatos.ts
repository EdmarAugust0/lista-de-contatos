import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

import * as enums from '../../utils/enums/Contato'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato(
      'Edmar Augusto',
      'edmar.tuti@hotmail.com',
      '(31)98250-8412',
      enums.Genero.MULHER,
      1
    ),
    new Contato(
      'Edmar Augusto',
      'edmar.tuti@hotmail.com',
      '(31)98250-8412',
      enums.Genero.HOMEM,
      2
    ),
    new Contato(
      'Edmar Augusto',
      'edmar.tuti@hotmail.com',
      '(31)98250-8412',
      enums.Genero.MULHER,
      3
    ),
    new Contato(
      'Edmar Augusto',
      'edmar.tuti@hotmail.com',
      '(31)98250-8412',
      enums.Genero.MULHER,
      4
    ),
    new Contato(
      'Edmar Augusto',
      'edmar.tuti@hotmail.com',
      '(31)98250-8412',
      enums.Genero.HOMEM,
      5
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((contato) => contato.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions

export default contatosSlice.reducer
