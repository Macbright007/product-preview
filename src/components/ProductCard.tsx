import React from 'react'
import { CardContainer, CardContent, ImgCard } from "./Styles";
import { Product } from './Type'

type Props = {
  item: Product
  DeleteProduct: (productId:string) => void
}

const ProductCard = ({ item, DeleteProduct }: Props) => {
  return (
    <CardContainer>
      <ImgCard>
        <img src={item.image} alt="pic" />
        <span
        onClick={() => DeleteProduct(item.id)}
        >
          X
        </span>
      </ImgCard>
      <CardContent>
        <h2>{item.name}</h2>
        <p>{item.price}</p>
      </CardContent>
    </CardContainer>
  )
}

export default ProductCard