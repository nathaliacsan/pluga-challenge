import styled from 'styled-components'

export const ToolsContainer = styled.main`
  width: 100%;
`

export const CardsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto; //centralizar
  padding: 1.5rem; // conteudo nao grudar nas laterais

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`
