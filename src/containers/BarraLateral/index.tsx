import { useDispatch, useSelector } from 'react-redux'

import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarNomeContato } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Contato'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { nomeContato } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
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
      </div>
    </S.Aside>
  )
}

export default BarraLateral
