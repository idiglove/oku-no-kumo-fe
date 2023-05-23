import styled from "styled-components";

export const LayoutContainer = styled.div`
width: 100%;
position:absolute;
box-sizing: border-box;
display: block;
font-family: Rubik-Regular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
font-size: 16px;
`;

export const FooterBox = styled.div`
width: 100%;
position:absolute;
display: flex;
justify-content: space-between;
height: 20rem;
box-sizing: border-box;
background-color: rgb(53, 53, 53);
`;



export const HomePageContainer = styled.div`
box-sizing: border-box;
width:100%;
min-height:35rem;
display: block;
`;

export const NavBarWrapper= styled.div`
width: 100%;
height:8rem;
box-sizing: border-box;
display: block;
`
export const Wrapper = styled.div`
position: absolute;
width:100%;
bottom: 0px;
left: 0px;
right:0px;
z-index: 0; 
`;

export const ImageContainer= styled.div`
width: 229.86px;
height: 67.5px;
left: 100px;
margin-left:600px;
box-sizing: border-box;
margin-top:30px;
h6{
  display:block;
text-align: right;
margin-top: 0.2rem;
width: 140px;
height: 23px;
left: "1090.14px";
top: 2864px;
font-family: 'Quicksand', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 0.67em;
line-height: 22px;
letter-spacing: 0.025em;
color: #CECECE;
}
`

export const LeftContainer=styled.div`
position: absolute;
right: 0px;
bottom: 3.0rem;
z-index: 1;
`

export const RightContainer=styled.div`
position: absolute;
left: 0px;
bottom: 3.2rem;
z-index: 1;

`

export const AppBar = styled.div`
width: 100%;
background-color: rgb(53, 53, 53);
min-height: 43rem;
box-sizing: border-box;
display: block;

`
export const Container= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgb(53, 53, 53);
height: 8rem;
padding: 0px 3.5rem;
position: static;
z-index: 9999;
top: -9rem;
  
  Button{
   width: 144px;
   margin:20px;
   height: 44px;
   border:2px;
   background: #ffffff;
   font-family: 'Rubik', sans-serif;
   font-weight:400;
   text-transform:capitalize;
   border-radius: 10px;
   color: black; 
  }
`;

export const Typography = styled.h1`
color: rgb(255, 255, 255);
font-family: 'Rubik', sans-serif;
font-weight: bold;
font-size: 1.75rem;
text-transform: uppercase;
position: relative;
z-index: 5;
text-align: center;
margin-block: 0px;
top: 150px;
`

export const ProductContainer=styled.div`
ul {
  list-style: none;
  font-family: Rubik-Regular, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  display: block;
 
}
a{
  color:white;
  text-decoration:none;
}
ul link{
  margin-top: 0.5rem;
  color: white;
}
`

export const StyledContainer = styled.div`
 
input {
  position:absolute;
 margin: 0px auto;
 padding-left:50px;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;
    width: 614px;
 height: 67px;
 top: 137px;
color: black;
background: #ffffff;
 border: 1px solid rgba(71, 50, 50, 0.05);
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 10px;
font-size: 1.2rem;
 font-family: "Quicksand", sans-serif;
  } 
`; 



export const StyledWrapper = styled.section`
  position:absolute;
 left: 62%;
  top: 165px;
  width: 18.99px;
  height: 18.73px;
`;

export const Card= styled.div`
width: 220px;
height: 330px;
bottom:10px;
border: 2px solid #000000;
background:#f5f5df;
border-radius: 10px;
`



export const StyledText= styled.div`
width: 152px;
height: 86px;
left: 44px;
top: 169px;
font-family: 'Rubik';
text-align:center;
margin-top:20px;
padding-left:30px;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #000000;
`
export const ReviewsBox= styled.div`
width: 100%;
min-height: 67rem;
background-color: rgb(53, 53, 53);
display:block;
box-sizing: border-box;
z-index: 10;
position: relative;
overflow: hidden;
` 
  

export const LeftWaterContainer=styled.div`
position: absolute;
left: 0%;
bottom: 40.47%;
background: #73D1E9;
transform: matrix(1, 0, 0, -1, 0, 0);
`


export const RightWaterContainer=styled.div`
position: absolute;
left: 90.83%;
right: 0%;
bottom: 42.35%;
background: #73D1E9;
transform: matrix(1, 0, 0, -1, 0, 0);
`


export const MazeContainer=styled.div`
position:absolute;
width: 1014.05px;
height: 1005.01px;
left: 80.85px;
top: 50px;
right: 0px;
text-align: center;
margin: 0 auto;
`


export const HeaderButtons=styled.div`
display: flex;
flex: 1 1 0%;
justify-content: flex-end;
`
export const HomePageNav=styled.div`
height: 10rem;
    background-color: rgb(53, 53, 53);
    width: 100%;
    position: absolute;
`

export const AboutContainer = styled.div`
  background-color: rgb(53, 53, 53);
  color: white;
  padding: 0px 2rem 2rem;
  text-align: center;
  height: 250px;

  p {
    position: absolute;
    text-align: center;
    margin: 0px auto;
    width: 50%;
    display: block;
    left: 380px;
    top: 800px;
    font-family: Quicksand-Regular;
    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
  }
`;