import { useState, useEffect } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'

function GameGrid() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')

  interface Game {
    id: number
    name: string
  }

  interface GameListResponse {
    count: number
    results: Game[]
  }

  useEffect(() => {
    apiClient
      .get<GameListResponse>('/games')
      .then(res => setGames(res.data.results))
      .catch(err => setError(err.message))
    console.log(error)
  }, [])

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}

export default GameGrid