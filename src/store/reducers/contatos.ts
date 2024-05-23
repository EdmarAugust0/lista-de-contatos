import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Edmar Augusto',
      email: 'edmar.tuti@hotmail.com',
      tell: '(31)98250-8412',
      genero: enums.Genero.MULHER,
      id: 1
    },
    {
      nome: 'Ana Beatriz',
      email: 'edmar.tuti@hotmail.com',
      tell: '(31)98250-8412',
      genero: enums.Genero.HOMEM,
      id: 2
    },
    {
      nome: 'Ruan Honorato',
      email: 'edmar.tuti@hotmail.com',
      tell: '(31)98250-8412',
      genero: enums.Genero.MULHER,
      id: 3
    },
    {
      nome: 'Victor Campos',
      email: 'edmar.tuti@hotmail.com',
      tell: '(31)98250-8412',
      genero: enums.Genero.MULHER,
      id: 4
    },
    {
      nome: 'Gabriel Diniz',
      email: 'edmar.tuti@hotmail.com',
      tell: '(31)98250-8412',
      genero: enums.Genero.HOMEM,
      id: 5
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
