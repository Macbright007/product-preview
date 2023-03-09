import React from 'react'
import { SearchWrapper } from './Styles'

type SearchProps = {
  onChange: (val: string) => void
  searchValue: string
}

const Search = ({ onChange, searchValue }: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <SearchWrapper>
      <input type="search" placeholder='Search for products' onChange={handleChange} />
    </SearchWrapper>
  )
}

export default Search