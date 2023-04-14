import CardComponent from "../components/CardComponent";
import NavBarButtons from "../components/NavBarButtons";
import { HeaderButtons } from "../components/styled";
import styled from "styled-components";
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import{Container,HeaderWrapper,ReviewBox,Wrapper,NavbarText,InputBar} from "./style";
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
     <NavBarButtons/>
     <HeaderButtons>
       <Button>Login</Button>
        <Button style={{ backgroundColor: "rgb(250, 250, 235)" }}>
              Join Us!
            </Button>
     </HeaderButtons>
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


