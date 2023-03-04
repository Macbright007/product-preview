import React from 'react'
import Footer from './Footer'
import Header from './Header'
import ProductLists from './ProductLists'

type Props = {}

const Main = (props: Props) => {
  return (
    <div>
        <Header />
        <ProductLists />
        <Footer />
    </div>
  )
}

export default Main