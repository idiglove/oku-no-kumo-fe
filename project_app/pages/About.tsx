import Button from "@mui/material/Button";
import NavBarButtons from "../components/NavBarButtons";
import Image from "next/image";
import styled from "styled-components";



function About() {
  
  return (
    <Container>
      <div style={{
    backgroundColor:"rgb(53, 53, 53)",
    minHeight: "35rem",
    width:"100%",
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
         <Button style={{padding:"10px",width:"147px", backgroundColor:"white",borderRadius:"10px", color:"black"}}>Log In </Button>
         <Button style={{padding:"10px",width:"147px", backgroundColor:"white",borderRadius:"10px", color:"black"}}>Join Us </Button>
           </div>
      </HeaderContainer>
      <div
            style={{
              position: "absolute",
              top: "162px",
              left: "0",
              bottom: "0",
            }}
          >
            <Image src="/trees_left.png" width={435}  height={400}alt="image" />
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
            position:"absolute",
            left: "1014px",
            bottom: "0",
            top: "162.54px",
              
            }}
          >
            <Image src="/trees_right.png" width={450} height={400}alt="image" />
          </div>
      </NavBarWrapper>
      </div>
    
      <Wrapper>
        <p>We're an interactive community of avid boardgamers - be it in sharing Reviews, participating and competing in Online Battles, achieving Challenges, and more.<br></br> We want you to play more of your favorite board games with friends, family and even potential friends!<br></br>We are in a very early stage of development, thus bugs and hiccups are expected. Because of this, any feedback is welcome to make this place the best! So please contact us to give any feedback here.</p>
      </Wrapper>
     
  <FooterContainer>
<h1>hello </h1>
  </FooterContainer>
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

const Wrapper= styled.div`
p{
margin: 0px auto;
width: 50%;
display: block;
text-align: center;
font-family: Quicksand-Regular;
font-size: 16px;
left: 330px;
top:100px;
}
background-color: rgb(53, 53, 53);
font-family: Quicksand-Regular;
color: white;
height:212px;
position:absolute;
padding: 0px 2rem 2rem;
text-align: center;
width:100%;
box-sizing:border-box;
`
const FooterContainer=styled.div`
display: block;
width:100%;
background-color:green;
`
