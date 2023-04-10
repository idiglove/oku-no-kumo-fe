import CardComponent from "../components/CardComponent";
import styled from "styled-components";
import Image from "next/image";

const cards = [1, 2,3,4,5,6];

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
          <StyledLinks>
<a href="../">Reviews</a>
<a href="../">Challenges</a>
<a href="../">Game Night</a>
          </StyledLinks>
            <h1>Reviews</h1> 
      </Wrapper>
                
     
      <StyledText>Interactive BoardGame <br/>Community</StyledText>
       <Image src="/Tent.png" width={300} height={200} alt="image" />
         <Image src="/fire.png" width={90} height={90} alt="image" />
    
    
     </HeaderWrapper>
    <Container >
      <div></div>

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
min-height: 18rem;
height: 24.7rem;
`

const Wrapper= styled.div`
width:100%;

`
const StyledLinks= styled.div`
/* position: absolute; */
max-width: 40rem;
margin: 0px auto;
left: 0px;
right: 0px;
display: flex;
justify-content: space-between;
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
