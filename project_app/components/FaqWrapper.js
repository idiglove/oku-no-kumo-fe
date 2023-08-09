import { AboutContainer } from './styled';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function FaqWrapper({ label = 'FAQ1' }) {
  return (
    <AboutContainer>
      <Box component="form">
        <div>
          <TextField
            label={label}
            select
            sx={{
              backgroundColor: 'rgb(53, 53, 53)',
              border: '3px solid white',
              color: 'white',
              width: '500px',
              marginTop: '80px'
            }}
            InputLabelProps={{
              sx: {
                color: 'white',
                textTransform: 'capitalize',
                justifyContent: 'center'
              }
            }}
          ></TextField>
        </div>
        <div>
          <TextField
            label={label}
            select
            sx={{
              backgroundColor: 'rgb(53, 53, 53)',
              border: '3px solid white',
              width: '500px'
            }}
            InputLabelProps={{
              sx: {
                color: 'white',
                textTransform: 'capitalize',
                justifyContent: 'center'
              }
            }}
          >
            <div
              style={{
                backgroundColor: 'rgb(53, 53, 53)',
                color: 'white',
                height: '100%',
                width: '100%'
              }}
            >
              FAQ Content here -<br></br>
              We are in a very early stage of development, thus bugs and hiccups
              are expected.<br></br>
              Because of this want any feedback is welcome to make this place
              the best! So please contact us with any feedback.
              <br></br>
              <br></br> any feedback is welcome to make this place the best! So
              please contact us to give any feedback here.
              <br></br>
            </div>
          </TextField>
        </div>
      </Box>
    </AboutContainer>
  );
}

export default FaqWrapper;
