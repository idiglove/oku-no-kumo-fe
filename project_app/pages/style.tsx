import styled from "styled-components";

export const Container= styled.div`
background-color: rgb(35, 76, 76);
display: flex;
box-sizing: border-box;
align-items: center;
width:100%;
height:753.09px;
justify-content: center;
`
export const HeaderWrapper= styled.div`
width: 1440px;
background-color: rgb(53, 53, 53);
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 14rem;
height: 24.7rem;
`
export  const ReviewBox= styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    button{
    background-color: rgb(250, 250, 235);
    color: rgb(0, 0, 0);
    font-family: Rubik-Regular;
    border-radius: 0.625rem;
    font-size: 1.25rem;
    min-width: 10rem;
    padding: 0.5rem; 
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: capitalize;
    margin: 10rem auto; 
    width: 10rem;
    }
    
  `
export const StyledLinks= styled.div`
position: absolute;
box-sizing: border-box;
max-width: 40rem;
margin: 0px auto;
top: 30px;
left: 0px;
right: 0px;
display: flex;
justify-content: space-between;
margin: 0px auto;
    a{
padding: 0.625rem 1.5rem;
color: rgb(255, 255, 255);
background-color: rgb(53, 53, 53);
border: 2px solid white;
border-radius: 0.625rem;
text-decoration: none;
    }
`

export const NavBarButtons= styled.div`
    display: flex;
    position:absolute;
    right:0;
    top:30px;
    flex: 1 1 0%;
    justify-content: flex-end;
    Button{
    margin: 0px 0.5rem;
    width: 5rem;
    min-width: 5rem;
    font-size: 1rem;
    background-color:white;
    padding: 0.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: capitalize;
    color: rgb(0, 0, 0);
    font-family: Rubik-Regular;
    border-radius: 0.625rem;
    }
  `  

  export const StyledText= styled.h1`
position: absolute;
font-size: 1rem;
top: 8rem;
margin: 0px;
left: 3.4rem;
color: rgb(255, 255, 255);
font-family: Rubik-Bold;
z-index: 5;
text-align: center;
  `  


