import styled from "styled-components"

// styling for navbar
export const Nav = styled.nav`
    // border: 2px solid black;
    padding: 7px 0px;
    //  background-image: linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9));
     background: linear-gradient(125deg, #000 57.7%, #960018 57.7%);
    display: flex;
    justify-content: space-around;

     h1{
        color: #fff;
        text-transform: uppercase;
     }

     button{
        padding: 7px 20px;
        border: none;
        border-radius: 5px;
        font-weight: 700;
        cursor: pointer;
     }

     button:hover{
        background: #000;
        color: white;
     }
`

// styling for productlist and product card
export const ProductWrapper = styled.section`
//   border: 2px solid red;
  width: 100%;
  max-width: 900px;
  margin: 6rem auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

export const CardContainer = styled.div`
  // border: 2px solid black;
  margin-top: 30px;
  padding: 10px;
  width: 100%;
  max-width: 250px;
`;
export const ImgCard = styled.div`
    border: 2px solid rgba(0, 0, 0, 0.803);
    border-radius: 25px;
    border-top: 0;
    border-bottom: 0;
    padding: 7px;
    height: 40vh;
    width: 100%;
    max-width: 230px;
    position: relative;
  

    img{
        min-height: 100%;
        width: 100%;
        border-radius: 25px;
        object-fit: cover;
    }
`;
export const CardContent = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.803);
  text-align: center;
  font-weight: 700;
  margin-top: 15px;
  border-radius: 25px;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  display: flex;
  justify-content: space-around;

  p{
    margin-top: 8px;
  }
`;

// styling for footer

export const FooterWrapper = styled.footer`
    background: linear-gradient(125deg, #fff 57.7%, #000 57.7%);
    text-align: center;
    padding: 10px 0;
    border: 2px solid black;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 0px;

    p{
        // color: white;
        font-weight: 700;
        font-size: 18px;
    }
`