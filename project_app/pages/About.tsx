import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ProductContainer,ImageContainer } from '../components/styled';
import{NavbarText} from "./style";
import styled from "styled-components";
import Image from "next/image";


 
 function About() {
   return (
  <AboutContainer>
    <HeaderWrapper>
      <Header header={<NavbarText>About Us</NavbarText>}/> 
         <div
        style={{
          position: "absolute",
          width: "25rem",
          zIndex: "0",
          left: "0px",
          bottom: "0",
          top: "220px",
        }}
      >
        <Image src="/trees_left.png" width={630} height={472} alt="image" />
      </div>
       <div
        style={{
          position: "absolute",
          left: "412.31px",
          top: "440px",
        }}
      >
        <Image src="/Tent.png" width={296} height={250} alt="image" />
      </div>
      <div
        style={{
          position: "absolute",
          left: "477px",
          top: "580px",
          bottom: "90.57%",
          zIndex: "0",
        }}
      >
        <Image src="/people.png" width={244} height={109}alt="image" />
      </div>
         <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          zIndex: "0",
          top: "14.4rem",
        }}
      >
        <Image src="/trees_right.png" width={651} height={466}alt="image" />
      </div>
     </HeaderWrapper>
    <AboutWrapper>
       <p>
        Were an interactive community of avid boardgamers - be it in sharing Reviews, 
        participating <br></br>
        and competing in Online Battles, achieving Challenges, and more.
        <br></br>
    We want you to play more of your favorite board games with friends, family
     and even potential friends!
      <br>
     </br>
    We are in a very early stage of development, thus bugs and hiccups are expected.
    Because of this,<br></br> any feedback is welcome to make this place the best! So please contact us to give any feedback here.
      <br>
      </br>
    </p>
   </AboutWrapper> 
<FooterContainer>

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
 const AboutWrapper=styled.div`
    background-color: rgb(53, 53, 53);
    color: white;
    padding: 0px 2rem 2rem;
    text-align: center;
    height:250px;
    
 p{
position: absolute;
text-align: center;
margin: 0px auto;
width: 50%;
display: block;
left:380px;
top: 800px;
font-family: Quicksand-Regular;
font-size: 16px;
line-height: 30px;
 color: #FFFFFF;
 }
`
const FooterContainer=styled.div`
position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20rem;
    background-color:grey;
 `

 export default About;