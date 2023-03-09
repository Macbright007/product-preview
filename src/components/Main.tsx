import React from 'react'
import Footer from './Footer'
import Header from './Header'
import AddProductModal from './AddProductModal'
import ProductLists from './ProductLists'
import { useState } from 'react';
import { Product } from './Type'


const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState<Product[]>([
   

  ])
 

  const openModal = () => {
    setShowModal((prev) => !prev);
  };


  const addProducts = (product: Product) => {
    setProducts((state) => ([...state, product]))
  }

  const removeProduct = (productId:string | undefined) => {
      const updatedProducts = products.filter((x) => x.id !== productId)
        setProducts(updatedProducts);
    
  }
  // function to close modal
  const handleCloseModal = () => {
    setShowModal(false)
  }


  return (
    <div>
      <Header openModal={openModal} />
      <ProductLists openModal={openModal} products={products} onRemoveProduct={removeProduct} />
      {showModal &&
        <AddProductModal
          close={handleCloseModal}
          onSubmit={addProducts}
        />}
      <Footer />
    </div>
  )
}

export default Main