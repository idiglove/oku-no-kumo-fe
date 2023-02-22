import React from "react";
import NavBarButtons from "./NavBarButtons";
import ToolBar from "./ToolBar";
import { Container, AppBar, Typography, StyledButtons } from "./styled";
import Image from "next/image";

function Header() {
  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
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
          <div style={{ marginLeft: "20px" }}>
            <StyledButtons>Login</StyledButtons>
            <StyledButtons style={{ backgroundColor: "rgb(250, 250, 235)" }}>
              Join Us!
            </StyledButtons>
          </div>

          <div>
            <ToolBar />
          </div>
          <div>
            <NavBarButtons />
          </div>
        </Container>
        <>
          <Typography>Interactive BoardGame Community</Typography>
          <div
            style={{
              position: "absolute",
              width: "629.05px",
              height: "471.51px",
              top: "204px",
              left: "0",
              bottom: "0",
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
              top: "422px",
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
              top: "560px",
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
              top: "557.57px",
            }}
          >
            <Image src="/fire.png" fill="absolute" alt="image" />
          </div>
          <div
            style={{
              position: "absolute",
              width: "651.27px",
              height: "464.65px",
              left: "789.04px",
              bottom: "0",
              top: "217.54px",
              right: "0",
              zIndex: "0",
            }}
          >
            <Image src="/trees_right.png" fill="none" alt="image" />
          </div>
        </>
      </AppBar>
    </>
  );
}

export default Header;
