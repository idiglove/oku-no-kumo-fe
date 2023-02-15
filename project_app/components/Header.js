import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "./ButtonGroup";
import ToolBar from "./ToolBar";
import { Container, AppBar, Typography } from "./styled";
import Image from "next/image";

function Header() {
  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
          <div style={{ position: "absolute", marginLeft: "700px" }}>
            <Button>Login</Button>
            <Button>Join Us!</Button>
          </div>
          <Image
            src="/logo.svg"
            width={227.77}
            height={150}
            left={50}
            right={50}
            alt="Ain't Board Logo"
          />
          <div>
            <ToolBar />
          </div>
          <div>
            <ButtonGroup />
          </div>
        </Container>
        <>
          <Typography>Interactive BoardGame Community</Typography>
          <div
            style={{
              position: "absolute",
              width: "629px",
              height: "471px",
              top: "215px",
              left: "0",
              bottom: "0",
            }}
          >
            <Image src="/trees_left.png" fill="absolute" alt="image" />
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
              top: "550px",
            }}
          >
            <Image src="/people.png" fill="absolute" alt="image" />
          </div>
          <div
            style={{
              position: "absolute",
              width: "90.37px",
              height: "120.71px",
              left: "708.46px",
              top: "557.57px",
            }}
          >
            <Image src="/fire.png" fill="absolute" alt="image" />
          </div>
          <div
            style={{
              position: "absolute",
              width: "629px",
              height: "472px",
              bottom: "0",
              top: "228px",
              right: "0",
              zIndex: "0",
            }}
          >
            <Image src="/trees_right.png" fill="absolute" alt="image" />
          </div>
        </>
      </AppBar>
    </>
  );
}

export default Header;
