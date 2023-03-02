import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

interface BackgroundHeighlightProps {
  variant?: string
}

export const Content = styled(Dialog.Content)<BackgroundHeighlightProps>`
  width: 60vw;
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.variant};
  border: 1px solid ${(props) => props.variant};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); //centraliza na tela
`

export const ModalContainer = styled.div<BackgroundHeighlightProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin-bottom: 40px;

  img {
    border-radius: 50%;
    max-width: 100px;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    color: #fff;
  }

  a {
    border: 1px solid ${(props) => props.variant};
    display: block;
    width: 160px;
    height: 40px;
    padding: 10px 5px;
    background-color: #fff;
    color: ${(props) => props.variant};
    border-radius: 15px;
    text-decoration: none;
    text-align: center;

    :hover {
      background: #e1dede;
    }
  }
`

export const Title = styled(Dialog.Title)`
  text-align: center;
`

export const LastToolsContainer = styled.div`
  width: 100%;
  background: #fff;
`
