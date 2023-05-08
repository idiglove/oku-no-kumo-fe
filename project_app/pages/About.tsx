import React from 'react';
import Header from "../components/Header";
import{NavbarText} from "./style";
import styled from "styled-components";
import Footer from "../components/Footer";
import Image from "next/image";


 
 function About() {
   return (
  <AboutContainer>
    <HeaderWrapper>
      <Header header={<NavbarText>About Us</NavbarText>}/> 
     </HeaderWrapper>
   {/* <AboutWrapper>
       <p>
        Were an interactive community of avid boardgamers - be it in sharing Reviews, participating and competing in Online Battles, achieving Challenges, and more.
        <br>
        </br>
    We want you to play more of your favorite board games with friends, family and even potential friends!
    We are in a very early stage of development, thus bugs and hiccups are expected.
     <br>
     </br>
    Because of this, any feedback is welcome to make this place the best! So please contact us to give any feedback here.
      <br>
      </br>
    </p>
   </AboutWrapper>
<FooterContainer>

</FooterContainer> */}
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
background-color: rgb(53, 53, 53);
min-height: 35rem;
position: relative;
display: block;
font-family: Rubik-Bold;
position: relative;
z-index: 5;
text-align: center;


 `
const AboutWrapper=styled.div`
background-color: rgb(53, 53, 53);
font-family: Quicksand-Regular;
color: white;
height:531px;
text-align: center;

p{
position: absolute;
margin: 0px auto;
width: 50%;
display: block;
width: 1266px;
height: 1017px;
left: 91px;
top: 714px;
font-family: 'Quicksand';
font-size: 16px;
line-height: 30px;
color: #FFFFFF;
}

 `

const FooterContainer=styled.div`
position: absolute;
width: 1440px;
height: 379px;
left: 0px;
top: 1088px;
 `

 export default About;