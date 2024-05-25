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
      genero: enums.Genero.HOMEM,
      id: 1
    },
    {
      nome: 'Ana Beatriz',
      email: 'edmar.tuti@hotmail.com',
      tell: '(31)98250-8412',
      genero: enums.Genero.MULHER,
      id: 2
    },
    {
      nome: 'Ruan Honorato',
      email: 'edmar.tuti@hotmail.com',
      tell: '(31)98250-8412',
      genero: enums.Genero.HOMEM,
      id: 3
    },
    {
      nome: 'Victor Campos',
      email: 'edmar.tuti@hotmail.com',
      tell: '(31)98250-8412',
      genero: enums.Genero.HOMEM,
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
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoExiste) {
        alert('Já existe um contato com este nome!')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
