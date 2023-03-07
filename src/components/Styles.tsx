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

// styling for search component
export const SearchWrapper = styled.form`
    //  border: 2px solid black;
     width: 100%;
     max-width: 600px;
     margin: 2rem auto;

     input[type=text]{
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        // border-radius: 7px;
        outline: none;
        padding: 9px 7px;
        width: 100%;
      }
      input[type=text]::placeholder{
        padding-left: 7px;
        font-size: 14px;
        font-weight: 700;
      }
`

// styling for productlist and product card
export const ProductWrapper = styled.section`
//   border: 2px solid red;
  width: 100%;
  max-width: 900px;
  margin: 4.3rem auto;
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

export const FormWrapper = styled.form`
    // border: 2px solid black;
    // background: blue;
    // padding: 5rem;
    // max-width: 600px;
    // margin: auto;
    // position: fixed;
    // top: 0;
    // left: 40%;

    width: 800px;
    height: 50vh;
    padding: 3rem;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    position: fixed;
    top: 17%;
    z-index: 10;
    border-top-right-radius: 15px;
    
    .close{
        position: fixed;
        top: 17%;
        right: 20.8%;
        background: red;
        color: #fff;
        font-weight: 800;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-right-radius: 15px;
        cursor: pointer;
    }

    .close:hover{
        background: #770737;
    }
    h1{
        text-transform: uppercase;
        font-size: 20px;
        font-weight: 700;
    }
    h1 span{
        color: skyblue;
    }
    .left__side{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    .right__side{
        width: 50%;
        margin: 2rem 2rem 0 0;
    }

    .btn__btn{
        width: 100%;
        max-width: 200px;
        margin: 1rem auto;
    }

    .btn__btn button{
        width: 100%;
        padding: 10px;
        border-radius: 7px;
        border:none;
        cursor: pointer;
        background: skyblue;
        font-weight: 700;
        text-transform: uppercase;
    }

    .btn__btn button:hover{
        background:rgb(4, 71, 98);
        color: #fff;
    }
`

export const FormContent = styled.div`
    border-radius: 10px;
    // border: 2px solid black;
    display: flex;
    justify-content: space-between;
`
export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerForm = styled.div`
    padding: 1rem;
    // margin-bottom: 20px;

    label{
        color: grey;
        font-weight: 700;
    }
    input[type=text]{
        border-radius: 7px;
        border: 2px solid grey;
        padding: 10px;
        margin-top: 7px;
        width: 95%;
    }
    input:focus{
        outline: none;
    }
`
export const InnerContent = styled.div`
    border: 3px dotted gray;
    width: 100%;
    height: 30vh;
    max-width: 600px;
    border-radius: 20px;
    background: #e6ecfc;
    // margin-top: 2rem;
   
    padding: 30px;

    label{
        color: grey;
        font-weight: 700;
        text-align: center;
    }
    input[type=file]{
        padding: 10px;
        margin-top: 7rem;
        width: 100%;
    }
    input:focus{
        outline: none;
    }
    `