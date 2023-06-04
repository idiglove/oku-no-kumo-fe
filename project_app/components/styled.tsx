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
min-height: ${(props) => props.height || '43rem'};
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
/* padding-left:28%; */
align-items:center;
justify-content:center;
margin:auto;
display:flex;
box-sizing:border-box;

input {
position:absolute;
box-sizing:border-box;
padding-left:30px;
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
letter-spacing: 0.065em;
font-size: 1.2rem;
align-items: center;
font-family: "Quicksand", sans-serif;
  } 
`; 



export const StyledWrapper = styled.section`
position:absolute; 
margin-left:560px;
  top: 160px;
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
position:relative;
z-index:100;
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
z-index: 100;
position: relative;
overflow: hidden;
` 
  

export const LeftWaterContainer=styled.div`
position: absolute;
left: 0%;
bottom: 40.47%;
fill: #73D1E9;
`


export const RightWaterContainer=styled.div`
position: absolute;
left: 90.83%;
right: 0%;
bottom: 42.35%;
fill: #73D1E9;
`


export const MazeContainer=styled.div`
position:absolute;
width: 1014.05px;
height: 1005.01px;
left: 80.85px;
top: 50px;
z-index:99;
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

export const LoginTitle = styled.span`
  color: #ffffff;
  line-height: 63.99px;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
`;

export const LoginDialog = styled.div`
  background-color: #234c4c;
  width: 30%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const LoginButton = styled.button`
  margin-top: 1rem;
  background-color: rgb(250, 250, 235);
  color: rgb(0, 0, 0);
  font-family: Rubik, sans-serif;
  border-radius: 0.625rem;
  font-size: 1.25rem;
  min-width: 10rem;
  padding: 0.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: capitalize;
`;

export const DialogText = styled.h6`
  color: rgb(255, 255, 255);
  font-family: 'Rubik', sans-serif;
  text-align: left;
  margin-bottom: 2rem;
`;

export const DialogTitle = styled.h3`
  background-color: #2b4040;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  padding: 1rem;
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  text-align: left;
`;


export const UserLoginLayout = styled.div`
  width: 100%;
  margin-top:10%;
  text-align: center;
  border-radius: 0.625rem;
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const FormContainer = styled.div`
  padding: 2rem;
`;

export const NavbarButtonContainer = styled.div`
  position: absolute;
  max-width: 40rem;
  margin: 0px auto;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;

  Button {
    padding: 0.7rem 1.7rem;
    color: rgb(255, 255, 255);
    background-color: rgb(53, 53, 53);
    border: 2px solid white;
    border-radius: 0.625rem;
  }

  p {
    height: 24px;
    left: 418px;
    top: 227px;
    font-family: 'Rubik', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-transform: lowercase;
    letter-spacing: 0.025em;
    text-transform: capitalize;
    color: #ffffff;
  }
`;


