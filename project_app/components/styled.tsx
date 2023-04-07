import styled from "styled-components";

export const LayoutContainer = styled.div`
width: 1440px;
height:2862px;
box-sizing: border-box;
display: block;
font-family: Rubik-Regular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
font-size: 16px;
`;

export const FooterBox = styled.div`
width: 100%;
position:relative;
left:0;
right:0;
display: flex;
justify-content: space-between;
overflow-x: hidden;
top: 2712px;
height: 25rem;
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
width: 160%;
left: 0px;
bottom: 0px;
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
bottom: 3.6rem;
z-index: 1;
`

export const RightContainer=styled.div`
position: absolute;
left: 0px;
bottom: 3.4rem;
z-index: 1;

`

export const AppBar = styled.div`
width: 100%;
background-color: rgb(53, 53, 53);
min-height: 35rem;
position: relative;
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

export const Typography = styled.p`
color: rgb(255, 255, 255);
font-family: Rubik-Bold;
font-size: 1.65rem;
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
  font-family: Quicksand-Regular;
  display: block;
}

ul link{
  margin-top: 0.5rem;
  color: white;
}


`

export const StyledContainer = styled.div`
  input {
    box-sizing: border-box;
   
 
    position: absolute;
    width: 614px;
    height: 67px;
    left: 400px;
    top: 150px;
    color: black;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    font-size: 1.2rem;
    font-family: "Quicksand", sans-serif;
    padding-left: 40px;
  }
`;

export const StyledWrapper = styled.section`
position:absolute;
  top: 176px;
  width: 18.99px;
  height: 18.73px;
  left: 970px;
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
top:140px;
position: relative;
overflow: hidden;


` 
  

export const LeftWaterContainer=styled.div`
position: absolute;
left: 0%;
right: 92.8%;
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
left: 212.85px;
top: 50px;
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
    top: 43rem;
`
