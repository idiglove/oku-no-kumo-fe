import React from 'react';
import Header from "../components/Header";
import{NavbarText} from "./style";
import styled from "styled-components";
import {FooterBox} from "../components/styled";
import Image from "next/image";


 
 function About() {
   return (
  
     <AboutContainer>
   <HeaderWrapper>
      <Header header={<NavbarText>About Us</NavbarText>}/> 
   </HeaderWrapper>
   <AboutWrapper>
      {/* <div
        style={{
          position: "absolute",
          width: "25rem",
          zIndex: "0",
          left: "0px",
          bottom: "0",
        }}
      >
        <Image src="/trees_left.png" width={630} height={472} alt="image"/>
      </div>
        <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          zIndex: "0",
        }}
      >
        <Image src="/trees_right.png" width={651} height={466} alt="imageNext" />
      </div> */}
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
  
<FooterBox/>
  
  </AboutContainer>
    
   )
 }

const AboutContainer=styled.div`
width: 100%;
    padding: 0px;
    margin: 0px;
    font-family: Rubik-Regular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;

height: 1112px;
box-sizing: border-box;
display:box;
font-size: 16px;
 `
const HeaderWrapper=styled.div`
width: 100%;
background-color: rgb(53, 53, 53);
font-family: Rubik-Bold;
font-size: 1.75rem;
height:557px;

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
/* font-style: normal;
font-weight: 700; */
font-size: 16px;
line-height: 30px;
color: #FFFFFF;
}

 `

const FooterContainer=styled.div`
background-color:pink;
height:400px;
width:100%;
 `

 export default About;