import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCropImageUrl from '../services/image-url'

function GenreList() {
  const { data } = useGenres()
  return (
    <List>
      {data.map(genre => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image src={getCropImageUrl(genre.image_background)} boxSize='32px' borderRadius={8} />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenreList