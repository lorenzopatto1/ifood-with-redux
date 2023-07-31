import { House, MagnifyingGlass, Scroll, User } from '@phosphor-icons/react'
import { Container, Content } from './styles'

export const TabBar = () => {
  return (
    <Container>
      <Content>
        <div>
          <House size={22} />
          Início
        </div>
        <div>
          <MagnifyingGlass size={22}/>
          Busca
          </div>
        <div>
          <Scroll size={22} />
          Pedidos
          </div>
        <div>
        <User size={22} />
          Perfil
        </div>
      </Content>
    </Container>
  )
}