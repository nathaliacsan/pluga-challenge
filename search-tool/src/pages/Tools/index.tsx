import { useEffect, useState } from 'react'
import { requestTools } from '../../services/SearchTools'
import { SearchTools } from '../../components/SearchTools'
import { ToolsContainer, CardsContainer } from './styles'

import * as Dialog from '@radix-ui/react-dialog'
import { OpenToolModal } from '../../components/OpenToolModal'
import { AvailableTools } from '../../components/AvailableTools'

interface Tool {
  app_id: string
  color: string
  icon: string
  link: string
  name: string
}
export function Tools() {
  const [tools, setTools] = useState<Tool[]>([])

  async function loadTools() {
    const data = await requestTools()
    setTools(data)
  }
  useEffect(() => {
    loadTools()
  }, [])

  return (
    <>
      <ToolsContainer>
        <SearchTools />
        <CardsContainer>
          {tools.map((tool) => {
            return (
              <Dialog.Root key={tool.app_id}>
                <Dialog.Trigger asChild>
                  <AvailableTools
                    color={tool.color}
                    icon={tool.icon}
                    name={tool.name}
                  />
                </Dialog.Trigger>
                <OpenToolModal
                  icon={tool.icon}
                  link={tool.link}
                  color={tool.color}
                  name={tool.name}
                />
              </Dialog.Root>
            )
          })}
        </CardsContainer>
      </ToolsContainer>
    </>
  )
}
