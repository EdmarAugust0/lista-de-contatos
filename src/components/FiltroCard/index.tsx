import { ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  categoria: 'genero' | 'todos'
  valor?: enums.Genero
  children?: ReactNode
}

const FiltroCard = ({ legenda, valor, categoria }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmaCategoria = filtro.categoria === categoria
    const mesmoValor = filtro.valor === valor

    return mesmaCategoria && mesmoValor
  }

  const contarContatos = () => {
    if (categoria === 'todos') return contatos.itens.length
    if (categoria === 'genero') {
      return contatos.itens.filter((item) => item.genero === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        categoria,
        valor
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card as="div" ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
