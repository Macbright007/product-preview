import { resolve } from 'path'
import React, { useState } from 'react'
import { Background, InnerForm, FormWrapper, InnerContent, FormContent } from './Styles'
import { Product } from './Type'

type Props = {
  onSubmit: (product: Product) => void
  close: () => void
}



const AddProductModal = ({ onSubmit, close }: Props) => {

  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState("")
  const [productImage, setProductImage] = useState<File>()
  const [previewImage, setPreviewImage] = useState<string>()
  const [loading, setLoading] = useState(false);


  // function to get product name
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value)
  }

  // function to get product price
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(e.target.value)

  }

  // function to get product image
  // const handleImageUpload = (e?:HTMLInputEvent) => {
  //   const files: any = e.target.files[0]
  //   if(files.length) {
  //     setProductImage(files[0])
  //   }
  // }

  // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (e.target.files && e.target.files.length > 0) { 
  //       const file = e.target.files[0]
  //       setProductImage(file);
  //     }
  // }

  // const toBase64=(file: File)=> {
  //   new Promise((resolve, reject)=> {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload=()=> resolve(reader.result);
  //     reader.onerror =(error)=> reject(error)
  //     return reader;
  //   })
  // }

  // const onImageChange=(e:React.ChangeEvent<HTMLInputElement>)=> {
  //   if(!e.target.files) return
  //   const base64file = toBase64(e.target.files[0])
  //   if(e.target.files && e.target.files[0]) {
  //     setProductImage(base64file)
  //   }
  // }




  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLInputElement;
    const file = target.files?.[0];
    setProductImage(file)
    setPreviewImage(URL.createObjectURL(file as Blob))
  }

  // const dataForm = {
  //   name: productName,
  //   price: productPrice,
  //   image: productImage
  // }
  // function to submit
  // const handleSubmit = () => 
  //   onSubmit({
  //     name: productName,
  //     price: productPrice,
  //     image: productImage
  //   })
  // }

  return (
    <Background>
      <FormWrapper>
        <span className='close' onClick={close}>X</span>
        <h1><span>Upload</span> Product</h1>
        <FormContent>
          <div className='left__side'>
            <InnerContent>
              {previewImage && <img src={previewImage} alt="" />} 
              <input
                type="file"
                name="image"
                id="image"
                // onChange={onImageChange}
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
                type="text"
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