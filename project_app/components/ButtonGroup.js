import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

function ButtonGroup() {
  return (
    <Container>
      <IconButton label="Events">
        <p>Events</p>
      </IconButton>
      <IconButton label="FAQ">
        <p>FAQ</p>
      </IconButton>
      <IconButton label="About Us">
        <p>About Us</p>
      </IconButton>
      <IconButton label="Game night">
        <p>Game Night</p>
      </IconButton>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  width: 652px;
  height: 24px;
  left: -1px;
  top: 169px;

  IconButton {
    z-index: 1;
    width: 153px;
    height: 44px;
    left: 930px;
    top: 216px;
    background: #353535;
    border: 2px solid #ffffff;
    border-radius: 10px;
  }
`;
export default ButtonGroup;
