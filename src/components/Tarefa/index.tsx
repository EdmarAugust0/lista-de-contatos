import * as S from './styles'

const Tarefa = () => (
  <S.Card>
    <S.Nome as="textarea">Nome do Contato</S.Nome>
    <S.Email as="textarea">edmar.tuti@hotmail.com</S.Email>
    <S.Tell as="textarea">(31)98250-8412</S.Tell>
    <S.GeneroTag>Mulher</S.GeneroTag>

    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Excluir</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)

export default Tarefa
