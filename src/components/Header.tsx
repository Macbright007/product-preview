import React from 'react'
import { Nav } from './Styles'

type Props = {}

const Header = (props: Props) => {
  return (
    <Nav>
        <h1>logo</h1>
        <button>Add Product</button>
    </Nav>
  )
}

export default Header