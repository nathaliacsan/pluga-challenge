import { Card } from './styles'

import * as Dialog from '@radix-ui/react-dialog'
import { OpenToolModal } from '../OpenToolModal'

interface ToolsProps {
  color: string
  icon: string
  link: string
  name: string
  openModal?: boolean
}

export function AvailableTools({
  color,
  icon,
  link,
  name,
  openModal = false,
}: ToolsProps) {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Card variant={color}>
            <img src={icon} alt="" />
            <button>{name}</button>
          </Card>
        </Dialog.Trigger>
        {openModal ? (
          <OpenToolModal icon={icon} link={link} color={color} name={name} />
        ) : null}
      </Dialog.Root>
    </>
  )
}
