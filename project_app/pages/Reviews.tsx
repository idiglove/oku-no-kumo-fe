import CardBox from "../components/CardBox";
import styled from "styled-components";




export default function Main() {
  return (
    <>
     <Container>
          <CardBox/>
        </Container>  
    </>
      
  );
}

const Container=styled.div`
background: #234C4C;
padding-left:60px;

`;
