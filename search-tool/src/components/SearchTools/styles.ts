import styled from 'styled-components'

export const SearchToolsContainer = styled.form`
  display: flex;
  align-items: center;
  margin: 2rem auto 0; //centralizar
  padding: 2rem 4rem;
  width: 100%;

  input {
    flex: 1;
    border-radius: 20px;
    border: 1px solid #d0dce7;
    padding: 1rem;

    :focus {
      box-shadow: 0 0 0 2px #46a6f8;
    }

    &::placeholder {
      color: #757575;
    }
  }
`
