import Footer from "../components/Footer";
import NavBarButtons from "../components/NavBarButtons";
import ToolBar from "../components/ToolBar";
import Button from "@mui/material/Button";
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
              
       <ul>
        <li>Events</li>
        <li>FAQ</li>
        <li>About Us</li>
       </ul>
          <ToolBar/>
      
      </HeaderContainer>
      
        <FooterContainer>
         
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
left: 1046px;
top: 50px;
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

