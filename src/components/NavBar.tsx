import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/img/gamechase-logo-nobg.png'

function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize={65} className='m-3' />
      <Text>GameChase</Text>
    </HStack>
  )
}

export default NavBar
