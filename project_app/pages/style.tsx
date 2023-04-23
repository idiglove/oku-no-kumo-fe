import styled from "styled-components";


export  const ReviewBox= styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    box-sizing: border-box;
    background-color: rgb(35, 76, 76);
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
    margin: 5rem auto;  
    width: 10rem;
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

export const NavbarText= styled.h1`
text-align:center;
font-family: Rubik-Bold;
font-weight: 700;
font-size: 3rem;
color: rgb(255, 255, 255);
text-align: center;
margin-top: 0rem; 

  `

export const InputBar= styled.div`
position:absolute;
display:flex;
top:460px;
align-items:center;
justify-content:center;
left:40%;

h1{
  font-size: 1.25rem;
    color: rgb(255, 255, 255);
    margin-right: 0.5rem;
    z-index: 1;
}

  `
