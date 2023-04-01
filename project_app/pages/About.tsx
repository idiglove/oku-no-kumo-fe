import Footer from "../components/Footer";
import ToolBar from "../components/ToolBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Image from "next/image";
import styled from "styled-components";

function About() {
  return (
    <Container>
    <HeaderContainer>
            <Image
              src="/logo.svg"
              width={227.77}
              height={150}
              alt="Ain't Board Logo"
            />
            <HeaderButtons>
             <Button>Login</Button>
              <Button>
                Join Us!
              </Button>
            </HeaderButtons>
             <NavLinks>
                <ul>
        <li>Events</li>
        <li>FAQ</li>
        <li>About Us</li>
       </ul>
              </NavLinks> 
    
          <ToolBar/>
      
      </HeaderContainer>
      <Box style={{height:"508.49px",width:"1440px",background:"#353535"}}>

      </Box>
     <FooterContainer>
        <Footer/>
     </FooterContainer>
    </Container>
   
  )
}

export default About
const Container= styled.div`
width: 1440px;
height: 1467px; 

`
const FooterContainer=styled.div`
position:absolute;
width: 1440px;
height: 379px;
left: 0px;
top: 1088px;
background: #353535;

`

const HeaderContainer=styled.div`

position: absolute;
width: 1440px;
height: 312px;
left: 0px;
top: 0px;

background: #353535;

`
const HeaderButtons=styled.button`
width: 162px;
height: 47px;
margin-left:1200px;
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.025em;
color: #000000;
`

const NavLinks=styled.div`
ul{
display: inline-block;
color:white;
position: absolute;
width: 92px;
height: 24px;
left: 851px;
top: 227px;
font-family: 'Rubik';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
letter-spacing: 0.025em;
}


`

