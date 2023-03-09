import { useState } from 'react'
import ProductCard from './ProductCard'
import { ProductWrapper } from './Styles'
import cart from "../images/shop.png"
import { Product } from './Type'
import Search from './Search'



type Props = {
  openModal: () => void;
  onRemoveProduct: (productId: string) => void;
  products: Product[]
}


const ProductLists = ({ products, openModal, onRemoveProduct }: Props) => {
  const [searchValue, setSearchValue] = useState("")

  // function to handle search input
  const handleSearchChange = (val: string) => {
    setSearchValue(val)
  }


  // function to filter on search
  const filteredProducts = searchValue !== "" ?
    products?.filter((productsItem) => productsItem.name.toLowerCase().includes(searchValue.toLowerCase()))
    : products


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
            <Search onChange={handleSearchChange} searchValue={searchValue} />
            <ProductWrapper>
              {filteredProducts.map((item) => {
                return <ProductCard item={item} DeleteProduct={onRemoveProduct} />
              })}
            </ProductWrapper>
            <div className='btn'>
              <button onClick={openModal}>Click to Add Products</button>
            </div>
          </>
        )
      }
    </>
  )
}

export default ProductLists