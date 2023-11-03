import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/img/gamechase-logo-nobg.png'
import ThemeSwitch from './ThemeSwitch'

function NavBar() {
  return (
    <HStack justifyContent={'space-between'} paddingX={10} paddingY={3}>
      <Image src={logo} boxSize={65} />
      <ThemeSwitch />
    </HStack>
  )
}

export default NavBar
