import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/img/gamechase-logo-nobg.png'
import ThemeSwitch from './ThemeSwitch'
import SearchBar from './SearchBar'

interface Props {
  onSearch: (searchText: string) => void
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack paddingX={10} paddingY={3}>
      <Image src={logo} boxSize={65} />
      <SearchBar onSearch={onSearch} />
      <ThemeSwitch />
    </HStack>
  )
}

export default NavBar
