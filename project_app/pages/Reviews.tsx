import CardComponent from "../components/CardComponent";
import Header from "../components/Header";
import MenuItem from '@mui/material/MenuItem';
import{ReviewBox,NavbarText,InputBar} from "./style";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from "next/image";
import Link from 'next/link';

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
     <Header header={<NavbarText>Reviews</NavbarText>}/> 
       <InputBar>
        <div
          style={{
         position:"absolute",
         marginRight:"1400px",
            marginBottom:"-90px",
        
          }}
        >
          <Image src="/Tent.png" width={300} height={300} alt="image"/>
        </div>
          <div
          style={{
            position: "absolute",
            marginRight:"1000px",
            marginBottom:"-240px",
          }}
        >
          <Image src="/fire.png" width={100}  height={150}alt="image" />
        </div>
       
        <h1>Filter By</h1>
         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
        <TextField
          select
          style={{backgroundColor:"white",width:"400px"}}
        >
          {reviews.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       
         </Box>
          </InputBar>
      <ReviewBox>
        <Link href="/createreview">
         <button>Create a Review</button> 
         </Link>
          <CardComponent />
      </ReviewBox>  
    </>
  );
}


