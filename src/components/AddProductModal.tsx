import React, { useState } from 'react'
import { Background, InnerForm, FormWrapper, InnerContent, FormContent } from './Styles'
import { Product } from './Type'
import { v4 as uuid } from 'uuid';

type Props = {
  onSubmit: (product: Product) => void
  close: () => void
}



const AddProductModal = ({ onSubmit, close }: Props) => {

  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("") 
  const [previewImage, setPreviewImage] = useState<string >()
  const [loading, setLoading] = useState(false);


  // function to get product name
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value)
  }

  // function to get product price
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(e.target.value)

  }

// function to get prouctd image
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLInputElement;
    const file = target.files?.[0];
    setPreviewImage(URL.createObjectURL(file as Blob))
  }

  // function to submit
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit({
      id: uuid(),
      name: productName,
      price: Number(productPrice),
      image: previewImage
    })
    close()
  }

  
  return (
    <Background>
      <FormWrapper onSubmit={handleSubmit}>
        <span className='close' onClick={close}>X</span>
        <h1><span>Upload</span> Product</h1>
        <FormContent>
          <div className='left__side'>
            <InnerContent>
              <div className='img-container'>
                {previewImage && <img src={previewImage} alt="" />}
              </div>
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleImageUpload}
              />
            </InnerContent>
          </div>
          <div className='right__side'>
            <InnerForm>
              <label htmlFor="username">Product-Name:</label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="place enter product name"
                value={productName}
                onChange={handleNameChange}
              />
            </InnerForm>
            <InnerForm>
              <label htmlFor="username">Product-Price:</label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="place enter product price"
                value={productPrice}
                onChange={handlePriceChange}
              />
            </InnerForm>
          </div>
        </FormContent>

        <div className='btn__btn'>
          {/* <button>Upload</button> */}
          <button disabled={loading}>{loading ? "Uploading..." : "Upload"}</button>
        </div>
      </FormWrapper>
    </Background>

  )
}

export default AddProductModal