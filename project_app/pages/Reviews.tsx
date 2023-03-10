import CardBox from "../components/CardBox";
import styled from "styled-components";
import Header from "../components/Header";




export default function Main() {
  return (
    <>
    <Header/>
        <Container>
          <CardBox/>
        </Container>
        </>
  );
}

const Container = styled.section`
position:absolute;
padding-top:100px;
width: 1440px;
height: 2560px;
left: 0px;
top: 529px;
background: #234C4C;
`;