import Button from "@mui/material/Button";
import NavBarButtons from "../components/NavBarButtons";
import { AppBar ,NavBarWrapper,HeaderButtons,Container} from "../components/styled";
import { StyledText,Wrapper } from "./style";
import Image from "next/image";
import styled from "styled-components";


function About() {
  return (
    <>
    <AppBar>
    <NavBarWrapper>
      <Container>
         <div>
            <Image
              src="/logo.svg"
              width={227.77}
              height={150}
              alt="Ain't Board Logo"
            />
          </div>
         <HeaderButtons>
       <Button>Login</Button>
        <Button style={{ backgroundColor: "rgb(250, 250, 235)" }}>
        Join Us!
        </Button>
     </HeaderButtons>
      <div>
      <NavBarButtons />
      </div>
      </Container>
         <div
            style={{
             position: "absolute",
            zIndex: "0",
            left: "0px",
            bottom: "0",
            }}
          >
            <Image src="/trees_left.png" width={400} height={420}alt="image" />
          </div>
          <div
            style={{
              position: "absolute",
              left: "412.31px",
              top: "360px",
            }}
          >
            <Image src="/Tent.png" width={267} height={198}alt="image" />
          </div>
             <div>
            <StyledText>About Us</StyledText>
            <p style={{color:"white",zIndex:"100",textAlign:"center",padding:"10px"}}>Be a part of the best boardgame community.
            Make reviews and strategies. Join challenges and earn powerups to get new avatars.</p>
           </div>
         <div
         style={{
          position: "absolute",
            bottom: "0",
            right: "0",
            zIndex: "0",
              
         }}
       >
       <Image src="/trees_right.png" width={400} height={390}alt="image" /> 
       </div>
     
    </NavBarWrapper>  
  
  </AppBar>

   <Wrapper>
     <p>We're an interactive community of avid boardgamers - be it in sharing Reviews, participating and competing in Online Battles, achieving Challenges, and more.<br>
     </br> We want you to play more of your favorite board games with friends, family and even potential friends!<br>
     </br>We are in a very early stage of development, thus bugs and hiccups are expected. Because of this, any feedback is welcome to make this place the best! So please contact us to give any feedback here.
     <br></br>
     </p>
     
     </Wrapper> 
     <FooterContainer>
  
     </FooterContainer>
</>  
  )
}

export default About


const FooterContainer=styled.div`
    height: 25rem;
    background-color: rgb(53, 53, 53);
    top: 1rem;
`