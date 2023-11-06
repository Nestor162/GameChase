import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

function ThemeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <>
      <HStack>
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} colorScheme='blue' />
        <Text whiteSpace='nowrap'>{colorMode === 'dark' ? 'Dark 🌛' : 'Light ☀️'}</Text>
      </HStack>
    </>
  )
}

export default ThemeSwitch
