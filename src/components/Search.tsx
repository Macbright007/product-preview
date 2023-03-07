import React from 'react'
import { SearchWrapper } from './Styles'

type Props = {}

const Seearch = (props: Props) => {
  return (
    <SearchWrapper>
        <input type="text" placeholder='Search for products' />
    </SearchWrapper>
  )
}

export default Seearch