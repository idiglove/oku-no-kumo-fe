import AccordionLayout from "./Accordion";
import styled from 'styled-components';

export default function BasicAccordion() {
  return (
    <AccordianWrapper>
      <AccordionLayout/>
    </AccordianWrapper>
  );
}

const AccordianWrapper= styled.div`
width:100%;
border-color:white;
padding-top:20px;
background-color:rgb(53, 53, 53);
`

