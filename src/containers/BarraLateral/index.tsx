import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo as="input" type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Homem" contador={7} />
        <FiltroCard legenda="Mulher" contador={13} ativo />
      </S.Filtros>
      <FiltroCard legenda="Todos" contador={20} />
    </div>
  </S.Aside>
)

export default BarraLateral
