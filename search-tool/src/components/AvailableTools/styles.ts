import styled from 'styled-components'

interface BorderHeighlightProps {
  variant?: string
}

export const Card = styled.div<BorderHeighlightProps>`
  height: 180px;
  width: 100%;
  max-width: 176px;
  border: 1px solid #d0dce7;
  background: ${(props) => props.variant};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  transition: border 0.3s;

  &:hover {
    border: 5px solid #fff;

    button {
      color: #fff;
    }
  }

  img {
    border-radius: 50%;
    max-width: 55px;
  }

  button {
    color: #fff;
    justify-content: center;
    display: flex;
    width: 100%;
    border: 0;
    background: transparent;

    cursor: pointer;
    transition: color 0.3s;
  }
`
