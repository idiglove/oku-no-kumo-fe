import CardComponent from "../components/CardComponent";
import styled from "styled-components";
import Button from "@mui/material/Button";
import{Container,HeaderWrapper,ReviewBox,StyledLinks,NavBarButtons,StyledText} from "./style";
import Image from "next/image";



export default function PricingContent() {
  return (
  <>
   <HeaderWrapper>
      <Wrapper>
            <Image
              src="/logo.svg"
              width={227.77}
              height={150}
              alt="Ain't Board Logo"
            />
             <NavbarText>Reviews</NavbarText> 
                {/* <CSSStyledText>
            <h1>Filter By</h1>
            <input type="text" placeholder="Search board game" />
          </CSSStyledText> */}
            
        <Image src="/Tent.png" width={260} height={150} alt="image" />
      <Image src="/fire.png" width={90} height={100} alt="image" /> 
           <NavBarButtons>
          <Button>LogIn</Button>
          <Button>Join Us</Button>
         </NavBarButtons>
          <StyledLinks>
            <a href="../">Reviews</a>
            <a href="../">Challenges</a>
            <a href="../">Game Night</a>
          </StyledLinks>
      </Wrapper>
     </HeaderWrapper>
    <Container >
      <ReviewBox>
         <button>Create a Review</button> 
          <CardComponent />
      </ReviewBox>
        </Container>
  </>
  );
}



const Wrapper= styled.div`
width:100%;

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

const CSSStyledText= styled.div`
display: flex;
align-items: center;
justify-content:center;
margin-top: 5rem;
padding-bottom:1rem;
z-index: 10;
h1{
  font-size:1.25rem;
    color: rgb(255, 255, 255);
    margin-right: 0.5rem;
    z-index: 1;
}
`