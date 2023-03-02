import { useEffect, useState } from 'react'
import { requestTools } from '../../services/SearchTools'
import { SearchTools } from '../../components/SearchTools'
import { ToolsContainer, CardsContainer } from './styles'

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
              <div key={tool.app_id}>
                <AvailableTools
                  color={tool.color}
                  icon={tool.icon}
                  name={tool.name}
                  link={tool.link}
                />
              </div>
            )
          })}
        </CardsContainer>
      </ToolsContainer>
    </>
  )
}
