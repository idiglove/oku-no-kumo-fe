import CustomAccordion from './Accordion'; 
import styled from 'styled-components';

export default function BasicAccordion() {
  return (
    <AccordianWrapper>
     <CustomAccordion
        title="FAQ 1"
        content={
    <div></div>
        }
      />
       <CustomAccordion
        title="FAQ 2"
        content={
          <>
            FAQ Content here <br />
            We are in a very early stage of development, thus bugs and hiccups are expected.
            <br />
            Because of this want any feedback is welcome to make this place the best!
            So please contact us with any feedback.
            <br />
          </>
        }
      />

    </AccordianWrapper>
  );
}

const AccordianWrapper= styled.div`
width:100%;
border-color:white;
padding-top:20px;
background-color:rgb(53, 53, 53);
`

