import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarNomeContato } from '../../store/reducers/filtro'
import { Botao, Campo } from '../../styles'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { nomeContato } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              as="input"
              type="text"
              placeholder="Buscar"
              value={nomeContato}
              onChange={(evento) =>
                dispatch(alterarNomeContato(evento.target.value))
              }
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Genero.HOMEM}
                categoria="genero"
                legenda="Homem"
              />
              <FiltroCard
                valor={enums.Genero.MULHER}
                categoria="genero"
                legenda="Mulher"
              />
            </S.Filtros>
            <FiltroCard categoria="todos" legenda="Todos" />
          </>
        ) : (
          <Botao as="button" type="button" onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
