import styled from "styled-components";

export const Box = styled.div`
height: 379px;
background: #353535;
position:relative;
`;


export const Wrapper = styled.div`
background: #76AAA4;
bottom:0;
position:absolute;
height:50px;
width:100%;
`;

export const ImageContainer= styled.div`
display:flex;
position:absolute;
right:0;
top:2;

  h6{
height: 10px;
font-family: 'Quicksand', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 0.67em;
color: #CECECE;
  }

`

export const LeftContainer=styled.div`
position:absolute;
right:0;
bottom:0;
z-index:100;
`

export const RightContainer=styled.div`
bottom:0;
position:absolute;
z-index:100;
`

export const AppBar = styled.div`
height: 700px;
position:relative;
background: #353535;
`
export const Container= styled.div`
  Button{
   width: 144px;
   margin:20px;
   height: 44px;
   border:2px;
   background: #ffffff;
   font-family: 'Rubik', sans-serif;
   font-weight:400;
   text-transform:capitalize;
   border-radius: 10px;
   color: black; 
  }
`;

export const Typography = styled.p`


height: 86px;
left: 486px;

font-family: 'Rubik';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 43px;
text-align: center;
text-transform:uppercase;
color: white;
z-index:1;
`
export const ProductContainer=styled.ul`
ul{
  color:white;
  font-family:Quicksand-Regular;
}
color:white;
font-family:Quicksand-Regular;
margin-top:60px;
margin-left: 40px;
list-style: none;
display: block;
font-weight: 500px;
box-sizing: border-box;
`

export const StyledContainer = styled.div`
position:relative;
left:340px;
  input {
    box-sizing: border-box;
    width: 614px;
     height: 67px; 
    color: black;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    font-size: 1.2rem;
    font-family: "Quicksand", sans-serif;
   
  }
`;

export const StyledWrapper = styled.section`
position:absolute;
  height: 18.67px;
  width:18.67px;

`;


