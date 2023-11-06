import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/img/gamechase-logo-nobg.png'
import ThemeSwitch from './ThemeSwitch'
import SearchBar from './SearchBar'

function NavBar() {
  return (
    <HStack paddingX={10} paddingY={3}>
      <Image src={logo} boxSize={65} />
      <SearchBar />
      <ThemeSwitch />
    </HStack>
  )
}

export default NavBar
