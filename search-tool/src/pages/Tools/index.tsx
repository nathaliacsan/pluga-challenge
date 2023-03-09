import { useEffect, useState } from 'react'
import { requestTools } from '../../services/SearchTools'
import { SearchTools } from '../../components/SearchTools'
import {
  ToolsContainer,
  CardsContainer,
  Card,
  Pagination,
  PaginationButton,
  PaginationItem,
} from './styles'

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
  const [total, setTotal] = useState<number>(66) // TODO tirar mock
  const [limit, setLimit] = useState<number>(12) // TODO tirar mock
  const [pages, setPages] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)

  async function loadTools() {
    const data = await requestTools(currentPage, limit)
    setTools(data)
    getNumberOfPages()
  }

  function getNumberOfPages() {
    const totalPages = Math.ceil(total / limit)

    const arrayPages: number[] = []
    for (let i = 1; i <= totalPages; i++) {
      arrayPages.push(i)
    }
    setPages(arrayPages)
  }

  useEffect(() => {
    loadTools()
  }, [currentPage])

  return (
    <>
      <ToolsContainer>
        <SearchTools />
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
        <Pagination>
          <PaginationButton>
            {pages.map((page) => (
              <PaginationItem key={page} onClick={() => setCurrentPage(page)}>
                {page}
              </PaginationItem>
            ))}
          </PaginationButton>
        </Pagination>
      </ToolsContainer>
    </>
  )
}
