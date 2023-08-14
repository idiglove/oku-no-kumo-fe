import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

export default function BasicAccordion() {
  return (
    <AccordianWrapper>
      <Accordion style={{backgroundColor:"rgb(53, 53, 53)",width:"50%",marginLeft:"300px",border: "2px solid white"}}>
        <AccordionSummary
       expandIcon={<ExpandMoreIcon style={{color:"white"}}/>}
        >
        <Typography>FAQ 1</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion style={{backgroundColor:"rgb(53, 53, 53)",width:"50%",marginLeft:"300px",border: "2px solid white"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color:"white"}} />}
        >
        <Typography>FAQ 1</Typography>
        </AccordionSummary>
            <Typography>
              FAQ Content here <br></br>
              We are in a very early stage of development, thus bugs and hiccups
              are expected.<br></br>
              Because of this want any feedback is welcome to make this place
              the best! So please contact us with any feedback.
              <br></br>
          </Typography>
      </Accordion>
</AccordianWrapper>
  );
}

const AccordianWrapper= styled.div`
width:100%;
border-color:white;
padding-top:20px;
background-color:rgb(53, 53, 53);
`

const Typography=styled.p`
color:white;
`