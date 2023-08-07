import { AboutContainer } from './styled';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

function FaqWrapper() {
  return (
    <AboutContainer>
      <Box component="form">
        <div>
          <TextField
            select
            label="FAQ1"
            style={{ width: '500px', color: 'white', marginTop: '80px' }}
          ></TextField>
        </div>
        <div>
          <TextField
            select
            label="FAQ1"
            style={{
              width: '500px',
              height: '200px',
              color: 'white'
            }}
          >
            <p style={{ backgroundColor: 'rgb(53, 53, 53)', color: 'white' }}>
              FAQ Content here -<br></br>
              We are in a very early stage of development, thus bugs and hiccups
              are expected.<br></br>
              Because of this want any feedback is welcome to make this place
              the best! So please contact us with any feedback.
              <br></br>
              <br></br> any feedback is welcome to make this place the best! So
              please contact us to give any feedback here.
              <br></br>
            </p>
          </TextField>
        </div>
      </Box>
    </AboutContainer>
  );
}
const MenuItem = styled.div`
  /* color: white; */
`;

const Box = styled.div``;

export default FaqWrapper;
