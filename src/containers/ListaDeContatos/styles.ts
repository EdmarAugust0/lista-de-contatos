import styled from 'styled-components'

export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }
`
export const Resultado = styled.p`
  display: block;
  margin-top: 40px;
  font-size: 18px;
  font-weight: bold;
`
