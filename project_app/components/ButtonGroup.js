import React from "react";
import styled from "styled-components";

//import IconButton from "@mui/material/IconButton";

function ButtonGroup() {
  return (
    <div>
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
    </div>
  );
}

const IconButton = styled.div`
 display: flex,
  position:absolute,
  zIndex: 1,
  borderRadius: 10px,
  alignItems: center,
  backgroundColor: #353535,
  `;
export default ButtonGroup;
