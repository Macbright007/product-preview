import React from 'react'
import { Nav } from './Styles'

type Props = {
  openModal: () => void;
}

const Header = ({openModal}: Props) => {
  return (
    <Nav>
        <h1>logo</h1>
        <button onClick={openModal}>Add Product</button>
    </Nav>
  )
}

export default Header