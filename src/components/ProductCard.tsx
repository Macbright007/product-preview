import React from 'react'
import { CardContainer, CardContent, ImgCard } from "./Styles";

type Props = {
  item:{
    name: string,
    price: number
  }
}

const ProductCard = ({item}: Props) => {
  return (
    <CardContainer>
    <ImgCard>
      {/* <img src={pic.image} alt="pic" /> */}
      {/* <MdDeleteForever
        style={{
          position: "absolute",
          top: 20,
          right: 5,
          fontSize: 33,
          color: "#AB263A",
          cursor: "pointer",
        }}
        onClick={() => handleDelete(pic)}
      /> */}
    </ImgCard>
    <CardContent>
      <h2>{item.name}</h2>
      <p>{item.price}</p>
    </CardContent>
  </CardContainer>
  )
}

export default ProductCard