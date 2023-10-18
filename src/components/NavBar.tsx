import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/img/gamechase-logo-nobg.png'
import ThemeSwitch from './ThemeSwitch'

function NavBar() {
  return (
    <HStack justifyContent={'space-between'} paddingInline={10}>
      <Image src={logo} boxSize={65} className='mt-3' />
      <ThemeSwitch />
    </HStack>
  )
}

export default NavBar
