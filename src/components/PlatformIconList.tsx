import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'
import { MdPhoneIphone } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import { IconType } from 'react-icons'

interface Props {
  platforms: Platform[]
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe
  }

  return (
    <HStack marginY={2} wrap='wrap'>
      {platforms.map(platform => (
        <Icon key={platform.slug} as={iconMap[platform.slug]} color='gray.500'></Icon>
      ))}
    </HStack>
  )
}

export default PlatformIconList
