import styled from "styled-components";

export const AppBar = styled.div`
position: absolute;
width: 1440px;
height: 700px;
left: -4px;
top: 0px;
background: #353535;
`
export const Container = styled.div`
 Button{
  width: 144px;
    margin: 20px;
    height: 44px;
    left: 380px;
    top: 50px;
    background: #ffffff;
    border-radius: 10px;
    color: black;
 }
input{
  box-sizing: border-box;
    position:absolute;
    width: 614px;
    height: 67px;
    left: 413px;
    top: 137px;
    backgroundcolor: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
}

p{
  font-family: 'Rubik';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
letter-spacing: 0.025em;

left: 418px;
top: 227px;
}

ButtonGroup{
   display: flex,
  zIndex: 1,
  borderRadius: 10px,
  alignItems: center,
  backgroundColor: #353535,
}

`;

export const Typography = styled.p`
position:absolute;
width: 521px;
height: 86px;
left: 486px;
top: 260px;
font-family: 'Rubik';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 43px;
text-align: center;
text-transform: uppercase;
color: white;
z-index:1;
`

