import CardComponent from "../components/CardComponent";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Image from "next/image";



export default function PricingContent() {
  return (
    <>
     <HeaderWrapper>
      <Wrapper>
         <div>
            <Image
              src="/logo.svg"
              width={227.77}
              height={150}
              alt="Ain't Board Logo"
            />
          </div>
             <NavbarText>Reviews</NavbarText> 
           <NavBarButtons>
          <Button>LogIn</Button>
          <Button>Join Us</Button>
         </NavBarButtons>
          <StyledLinks>
            <a href="../">Reviews</a>
            <a href="../">Challenges</a>
            <a href="../">Game Night</a>
          </StyledLinks>
           <div style={{ display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5rem",
    paddingBottom: "1rem",
    zIndex: "10"}}>
         <h1 style={{fontSize:"1.25rem",
    color: "rgb(255, 255, 255",
    marginRight: "0.5rem",
    zIndex: "1"}}>Filter By</h1>
        <input type="text" placeholder="Search board game" />
      </div>
       
      </Wrapper>
      <StyledText>Interactive BoardGame <br/>Community</StyledText>
 <Image src="/Tent.png" width={290} height={200} alt="image" />
      <Image src="/fire.png" width={90} height={100} alt="image" /> 
     </HeaderWrapper>
    <Container >
        <CardComponent />
          <CardComponent />
            <CardComponent />
        </Container>
     </>
  );
}

const Container= styled.div`
position: absolute;
width: 1440px;
height: 2562px;
left: 0px;
background: #234C4C;
padding:40px 40px 120px 40px;
margin-right:120px;
display:flex;
flex-direction:row;
`

const HeaderWrapper= styled.div`
width: 1440px;
background-color: rgb(53, 53, 53);
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 24rem;
height: 30.7rem;
`

const Wrapper= styled.div`
width:100%;

`
const StyledLinks= styled.div`
position: absolute;
box-sizing: border-box;
max-width: 40rem;
margin: 0px auto;
top: 30px;
left: 0px;
right: 0px;
display: flex;
justify-content: space-between;
margin: 0px auto;
    a{
padding: 0.625rem 1.5rem;
color: rgb(255, 255, 255);
background-color: rgb(53, 53, 53);
border: 2px solid white;
border-radius: 0.625rem;
text-decoration: none;
    }
`
const StyledText= styled.h1`
position: absolute;
font-size: 1rem;
top: 8rem;
margin: 0px;
left: 3.4rem;
color: rgb(255, 255, 255);
font-family: Rubik-Bold;
z-index: 5;
text-align: center;
  `  
const NavBarButtons= styled.div`
    display: flex;
    position:absolute;
    right:0;
    top:30px;
    flex: 1 1 0%;
    justify-content: flex-end;
    Button{
    margin: 0px 0.5rem;
    width: 5rem;
    min-width: 5rem;
    font-size: 1rem;
    background-color:white;
    padding: 0.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: capitalize;
    color: rgb(0, 0, 0);
    font-family: Rubik-Regular;
    border-radius: 0.625rem;
    }
  `  

  const NavbarText= styled.h1`
    text-align:center;
    font-family: Rubik-Bold;
    font-weight: 700;
    font-size: 3rem;
    color: rgb(255, 255, 255);
    text-align: center;
    margin-top: 0rem;
    
  `