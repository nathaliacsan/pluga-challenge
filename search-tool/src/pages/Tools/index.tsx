import { useEffect, useState } from 'react'
import { requestTools } from '../../services/SearchTools'
import { SearchForm } from './components/SearchForm'
import { ToolsContainer, CardsContainer, Card } from './styles'

import * as Dialog from '@radix-ui/react-dialog'
import { OpenToolModal } from '../../components/OpenToolModal'

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
        <SearchForm />
        <CardsContainer>
          {tools.map((tool) => {
            return (
              <Dialog.Root key={tool.app_id}>
                <Dialog.Trigger asChild>
                  <Card variant={tool.color}>
                    <img src={tool.icon} alt="" />
                    <button>{tool.name}</button>
                  </Card>
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
