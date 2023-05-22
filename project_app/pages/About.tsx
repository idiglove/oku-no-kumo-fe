import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from '../components/HomePage';
import {ProductContainer} from "../components/styled";
import AboutWrapper from "../components/AboutWrapper";
import{NavbarText} from "./style";
import styled from "styled-components";



 function About() {
   return (
  <AboutContainer>
    <HeaderWrapper>
      <Header header={<NavbarText>About Us</NavbarText>}/> 
      <HomePage/>
    </HeaderWrapper>
    <AboutWrapper/>
   <FooterContainer>
     <ProductContainer/>
    <Footer/> 
   </FooterContainer>
    </AboutContainer>
    
   )
 }

const AboutContainer=styled.div`  
position: relative;
box-sizing: border-box;
height: 1112px;
width: 100%;
padding: 0px;
margin: 0px;
font-size: 16px;
 `
const HeaderWrapper=styled.div`
width: 100%;
font-size: 1.75rem;
background-color: rgb(53, 53, 53);
min-height: 35rem;
position: relative;
display: block;
font-family: Rubik-Bold;
position: relative;
z-index: 5;
text-align: center;

 `

const FooterContainer = styled.div`
position:relative; 
background-color: rgb(53, 53, 53);
width:100%;
`



 export default About;

