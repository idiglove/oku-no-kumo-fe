import React from "react";
import NavBarButtons from "./NavBarButtons";
import Button from "@mui/material/Button";
import {
  Container,
  AppBar,
  Typography,
  NavBarWrapper,
  HeaderButtons,
} from "./styled";
import Image from "next/image";

function Header(props) {
  return (
    <>
      <AppBar>
        <NavBarWrapper>
          <Container>
            <div>
              <Image
                src="/logo.svg"
                width={227.77}
                height={150}
                left={50}
                right={50}
                alt="Ain't Board Logo"
              />
            </div>
            <HeaderButtons>
              <Button>Login</Button>
              <Button style={{ backgroundColor: "rgb(250, 250, 235)" }}>
                Join Us!
              </Button>
            </HeaderButtons>
            <div>
              <NavBarButtons />
            </div>
          </Container>
        </NavBarWrapper>
        <Typography>{props.header}</Typography>
      </AppBar>
    </>
  );
}

export default Header;
