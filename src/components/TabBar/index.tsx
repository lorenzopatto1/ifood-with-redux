import { House, MagnifyingGlass, Scroll, User } from '@phosphor-icons/react'
import { Container, Content, UserSettings } from './styles'
import { Link } from 'react-router-dom'

export const TabBar = () => {
  return (
    <Container>
      <Content>
        <Link to="/">
          <div>
            <House size={22} />
            <p>Início</p>
          </div>
        </Link>
        <Link to="/">
          <div>
            <MagnifyingGlass size={22}/>
            <p>Busca</p>
          </div>
        </Link>
        <Link to="/">
        <div>
          <Scroll size={22} />
          <p>Pedidos</p>
          </div>
        </Link>
        <UserSettings>
        <User size={22} />
          Perfil
        </UserSettings>
      </Content>
    </Container>
  )
}