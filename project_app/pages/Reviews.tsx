import CardComponent from "../components/CardComponent";
import Header from "../components/Header";
import MenuItem from '@mui/material/MenuItem';
import{ReviewBox,NavbarText,InputBar} from "./style";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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

      <ReviewBox>
         <button>Create a Review</button> 
          <CardComponent />
      </ReviewBox>   
    </>
  );
}


