import CardComponent from "../components/CardComponent";
import styled from "styled-components";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import{Container,HeaderWrapper,ReviewBox,StyledLinks,NavBarButtons} from "./style";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from "next/image";


const reviews = [
  {
    value: 'Reviews',
    label: 'BoardGame Name',
  },
  {
    value: 'Reviews',
    label: 'Review Type',
  },
  {
    value: 'Reviews',
    label: 'Language',
  },
  {
    value: 'Reviews',
    label: 'Overall Rating',
  },
];
export default function Reviews() {
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
        <Image src="/Tent.png" width={260} height={155} alt="image" />
      <Image src="/fire.png" width={90} height={100} alt="image" /> 
      <InputBar>
        <h1>Filter By</h1>
         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
        <TextField
          select
          style={{backgroundColor:"white",width:"200px"}}
        >
          {reviews.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    </Box>
      </InputBar>
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

const InputBar= styled.div`
position:absolute;
display:flex;
top:300px;
align-items:center;
justify-content:center;
left:40%;

h1{
  font-size: 1.25rem;
    color: rgb(255, 255, 255);
    margin-right: 0.5rem;
    z-index: 1;
}

  `