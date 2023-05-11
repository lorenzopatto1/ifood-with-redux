import { MagnifyingGlass } from '@phosphor-icons/react'
import { Container, SearchIcon } from './styles'

interface SearchIconProps {
  placeholder: string;
}

export const SearchZone = ({ placeholder }: SearchIconProps) => {
  return (
    <Container>
    <SearchIcon>
      <MagnifyingGlass size={24} fill="#ea1d2c" />
    </SearchIcon>
    <form>
      <input type="text" placeholder={placeholder} />
    </form>
  </Container>
  )
}