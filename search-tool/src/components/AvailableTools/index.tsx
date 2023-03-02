import { Card } from './styles'

import * as Dialog from '@radix-ui/react-dialog'
import { OpenToolModal } from '../OpenToolModal'

interface ToolsProps {
  color: string
  icon: string
  link: string
  name: string
}

export function AvailableTools({ color, icon, link, name }: ToolsProps) {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Card variant={color}>
            <img src={icon} alt="" />
            <button>{name}</button>
          </Card>
        </Dialog.Trigger>
        <OpenToolModal
          openModal
          icon={icon}
          link={link}
          color={color}
          name={name}
        />
      </Dialog.Root>
    </>
  )
}
