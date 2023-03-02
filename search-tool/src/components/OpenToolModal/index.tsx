import * as Dialog from '@radix-ui/react-dialog'
import { Content, ModalContainer, Overlay, Title } from './styles'

interface ToolProps {
  color: string
  icon: string
  link: string
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
            <Title>{name}</Title>
            <a href={link} target="_blank" rel="noreferrer">
              Acessar
            </a>
          </div>
        </ModalContainer>

        {/* <h2>ÚLTIMAS FERRAMENTAS VISUALIZADAS</h2> */}
      </Content>
    </Dialog.Portal>
  )
}
