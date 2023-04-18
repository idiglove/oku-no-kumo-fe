import React from "react";
import NavBarButtons from "./NavBarButtons";
import ToolBar from "./ToolBar";
import Button from "@mui/material/Button";
import {
  Container,
  AppBar,
  Typography,
  NavBarWrapper,
  HeaderButtons,
  HomePageContainer,
} from "./styled";
import Image from "next/image";

function Header(props) {
  return (
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
            <ToolBar ToolBar={ToolBar} />
          </div>
          <div>
            <NavBarButtons />
          </div>
        </Container>
      </NavBarWrapper>
      <HomePageContainer>
        <Typography>{props.header}</Typography>

        <div
          style={{
            position: "absolute",
            width: "25rem",
            zIndex: "0",
            left: "0px",
            bottom: "0",
            boxSizing: "borderBox",
            width: "630px",
            height: "472px",
          }}
        >
          <Image src="/trees_left.png" fill="none" alt="image" />
        </div>
        <div
          style={{
            position: "absolute",
            width: "296px",
            height: "250px",
            left: "412.31px",
            top: "440px",
          }}
        >
          <Image src="/Tent.png" fill="absolute" alt="image" />
        </div>
        <div
          style={{
            position: "absolute",
            width: "244px",
            height: "109px",
            left: "477px",
            top: "572px",
            bottom: "78.57%",
            zIndex: "0",
          }}
        >
          <Image src="/people.png" fill="absolute" alt="image" />
        </div>
        <div
          style={{
            position: "absolute",
            width: "90.37px",
            height: "105.71px",
            left: "708.46px",
            top: "580px",
          }}
        >
          <Image src="/fire.png" fill="absolute" alt="image" />
        </div>
        <div
          style={{
            position: "absolute",
            width: "651px",
            height: "466px",
            bottom: "0",
            right: "0",
            zIndex: "0",
          }}
        >
          <Image src="/trees_right.png" fill="none" alt="image" />
        </div>
      </HomePageContainer>
    </AppBar>
  );
}

export default Header;
