import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCropImageUrl from '../services/image-url'

function GenreList() {
  const { data, isLoading, error } = useGenres()

  if (error) return null

  if (isLoading)
    return (
      <HStack justifyContent='center' alignItems='center' height='100%'>
        <Spinner />
      </HStack>
    )

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
