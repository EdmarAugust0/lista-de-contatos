import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contato'

type FiltroState = {
  nomeContato?: string
  categoria: 'genero' | 'todos'
  valor?: enums.Genero
}

const initialState: FiltroState = {
  nomeContato: '',
  categoria: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarNomeContato: (state, action: PayloadAction<string>) => {
      state.nomeContato = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<FiltroState>) => {
      state.categoria = action.payload.categoria
      state.valor = action.payload.valor
    }
  }
})

export const { alterarNomeContato, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
