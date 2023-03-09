import * as Dialog from '@radix-ui/react-dialog'
import { Content, ModalContainer, Overlay } from './styles'

interface ToolProps {
  color: string
  icon: string
  link?: string
  name: string
}

export function OpenToolModal({ color, icon, link, name }: ToolProps) {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content variant={color}>
        <ModalContainer variant={color}>
          <img src={icon} alt="" />
          <div>
            <Dialog.Title>{name}</Dialog.Title>
            <a href={link} target="_blank" rel="noreferrer">
              Acessar
            </a>
          </div>
        </ModalContainer>
      </Content>
    </Dialog.Portal>
  )
}
