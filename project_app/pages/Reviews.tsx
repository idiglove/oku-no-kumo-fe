import CardComponent from "../components/CardComponent";
import NavBarButtons from "../components/NavBarButtons";
//import AppBar from "@mui/material/AppBar";
import styled from "styled-components";



export default function PricingContent() {
  return (
    <>
     <AppBar>
<NavBarButtons/>
     </AppBar>
     
     <Container>
             <CardComponent/>
             <CardComponent/>
               <CardComponent/>
                 <CardComponent/>
     </Container>
    </>
  
    
  );
}

const Container= styled.div`
position: absolute;
width: 1440px;
height: 2562px;
left: 0px;
top: 529px;
background: #234C4C;
padding:40px 40px 120px 40px;
margin-right:120px;
display:flex;
flex-direction:row;

`

const AppBar= styled.div`
position: absolute;
width: 1440px;
height: 624px;
left: 0px;
top: 0px;
background: #353535;
    
`