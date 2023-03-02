import { Card } from './styles'

interface ToolsProps {
  color: string
  icon: string
  name: string
}

export function AvailableTools({ color, icon, name }: ToolsProps) {
  return (
    <Card variant={color}>
      <img src={icon} alt="" />
      <button>{name}</button>
    </Card>
  )
}
