import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
  onSelectSortOption: (sortOption: string) => void
  selectedSortOption: string
}

function SortSelector({ onSelectSortOption, selectedSortOption }: Props) {
  const sortOptions = [
    { value: '', label: 'Relevance' },
    { value: 'added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    // { value: '-metacritic', label: 'Popularity' },
    { value: '-metacritic', label: 'Average Rating' }
  ]

  const currentSortOption = sortOptions.find(order => order.value === selectedSortOption)
  return (
    <Menu>
      <MenuButton marginY={3} as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOption?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOptions.map(option => (
          <MenuItem onClick={() => onSelectSortOption(option.value)} key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default SortSelector
