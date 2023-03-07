import { useState } from 'react'
import ProductCard from './ProductCard'
import { ProductWrapper } from './Styles'
import cart from "../images/shop.png"
import { Product } from './Type'
import Search from './Search'


type Props = {
  openModal: () => void;
  products: Product[]
}


const ProductLists = ({ products, openModal }: Props) => {


  return (
    <>
      {products.length === 0 ?
        (
          <div className="empty-cart">
            <img src={cart} className="img-fluid" alt="cart" />
            <h3>No products to preview yet</h3>
            <p style={{ color: "grey" }}>
              Add products to display
            </p>
            <button onClick={openModal}>Click to Add Products</button>
          </div>
        ) : (
          <>
            <Search />
            <ProductWrapper>
              {products.map((item) => {
                return <ProductCard item={item} />
              })}
            </ProductWrapper>
          </>
        )
      }
    </>
  )
}

export default ProductLists