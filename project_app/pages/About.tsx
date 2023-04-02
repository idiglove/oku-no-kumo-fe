import Button from "@mui/material/Button";
import Wrapper from "@mui/material/Button";
import NavBarButtons from "../components/NavBarButtons";
import Image from "next/image";
import styled from "styled-components";
import Footer from "../components/Footer";

function About() {
  
  return (
    <Container>
      <div style={{
    backgroundColor:"rgb(53, 53, 53)",
    minHeight: "35rem",
    }}>
         <NavBarWrapper>
        <HeaderContainer>
            <Image
              src="/logo.svg"
              width={227.77}
              height={150}
              alt="Ain't Board Logo"
            />
            <NavBarButtons/>
           <div style={{display:"flex",flex: "1 1 0%",justifyContent:"flex-end",margin:"30px"}}>
         <Button style={{padding:"10px"}}>Log In </Button>
         <Button>Join Us </Button>
           </div>
      </HeaderContainer>
      <div
            style={{
              position: "absolute",
              width: "629.05px",
              height: "400.51px",
              top: "162px",
              left: "0",
              bottom: "0",
            }}
          >
            <Image src="/trees_left.png" layout="fill" alt="image" />
          </div>
          <div
            style={{
              position: "absolute",
              width: "296px",
              height: "200px",
              left: "412.31px",
              top: "360px",
            }}
          >
            <Image src="/Tent.png" layout="fill" alt="image" />
          </div>
             <div>
            <StyledText>About Us</StyledText>
            <p style={{color:"white",zIndex:"10",textAlign:"center"}}>Be a part of the best boardgame community.
Make reviews and strategies. Join challenges and earn powerups to get new avatars.</p>
      </div>
           <div
            style={{
              position: "absolute",
             
              height: "400.65px",
              left: "789.04px",
              bottom: "0",
              top: "162.54px",
              right: "0",
              zIndex: "100",
            }}
          >
            <Image src="/trees_right.png" layout="fill" alt="image" />
          </div>
      </NavBarWrapper>
       
      </div>
    </Container>
   
  )
}

export default About
const Container= styled.div`
width: 100%;
display:block;
box-sizing:border-box;
height: 1172px; 
`
const HeaderContainer=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgb(53, 53, 53);
height: 8rem;
position: static;
width: 100%;

`
const NavBarWrapper=styled.div`
display: block;
height: 8rem;
width:100%;
`

const StyledText= styled.h1`
color: rgb(255, 255, 255);
font-family: Rubik-Bold;
font-size: 1.75rem;
text-transform: uppercase;
position: relative;
text-align: center;
margin-top: 5rem;
`