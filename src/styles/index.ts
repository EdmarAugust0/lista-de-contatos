import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Dados = styled.textarea`
  font-size: 18px;
  font-weight: bold;
  background-color: transparent;
  border: none;
  resize: none;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }
`
export const Titulo = styled.h2`
  display: block;
  margin: 40px 0px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: ${variaveis.branco};
  border-radius: 8px;
  font-weight: bold;
  color: ${variaveis.cinza};
  border-color: ${variaveis.cinza};
  width: 100%;
`
export const Botao = styled.button`
  font-size: 12px;
  font-weight: bold;
  background-color: #2f3640;
  color: ${variaveis.branco};
  padding: 8px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verdeClaro};
`

export default EstiloGlobal
