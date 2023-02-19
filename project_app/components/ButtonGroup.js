import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

function ButtonGroup() {
  return (
    <Container>
      <Button label="Events">
        <p>Events</p>
      </Button>
      <Button label="FAQ">
        <p>FAQ</p>
      </Button>
      <Button label="About Us">
        <p>About Us</p>
      </Button>
      <Button label="Game night">
        <p>Game Night</p>
      </Button>
    </Container>
  );
}

const Container = styled.div`
position:absolute;
 box-sizing: border-box;
  z-index: 1;
  height: 30px;
  left: 70px;
  top: 1px;
 

  Button {
    width: 140px;
    margin: 20px;
    height: 46px;
    left: 310px;
    top: 190px;
    text-transform:capitalize;
    background-color: #353535;
    font-family: 'Rubik', sans-serif;
    text-transform:capitalize;
    color: #FFFFFF
    font-style: normal;
    border: 2px solid #ffffff;
    border-radius: 8px;
  }
  p{

height: 24px;
left: 418px;
top: 227px;
font-family: 'Rubik', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 20px;
text-transform:lowercase;
line-height: 24px;
letter-spacing: 0.025em;
text-transform:capitalize;
color: #FFFFFF;
  }
`;
export default ButtonGroup;
