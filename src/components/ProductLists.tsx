import { useState } from 'react'
import ProductCard from './ProductCard'
import { ProductWrapper } from './Styles'
import cart from "../images/shop.png"

type Props = {
  uploads: {
    name: string,
    price: number
  }[]
}


const ProductLists = () => {
  const [uploads, setUploads] = useState([
    // {
    //   name: "shoe",
    //   price: 200
    // },
    // {
    //   name: "shoees",
    //   price: 300
    // },
    // {
    //   name: "shoes",
    //   price: 400
    // }
  ])

  return (
    <>
      {uploads.length == 0 ?
        (
          <div className="empty-cart">
            <img src={cart} className="img-fluid" alt="cart" />
            <h3>No products to preview yet</h3>
            <p style={{ color: "grey" }}>
              Add products to display
            </p>
             <button>Click to Add Products</button>
          </div>
        ) : (
          <ProductWrapper>
            {uploads.map((item) => {
              return <ProductCard item={item} />
            })}
          </ProductWrapper>
        )
      }
    </>
  )
}

export default ProductLists