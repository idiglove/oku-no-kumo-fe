import React from "react";
import Button from "@mui/material/Button";
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

          <input
            placeholder="Search Board Game"
            InputProps={{
              endAdornment: (
                <Image
                  src="/icons8.svg"
                  width={227.77}
                  height={150}
                  alt="image"
                />
              ),
            }}
          />
          <div
            style={{
              display: "flex",
              zIndex: "1",
              borderRadius: "10px",
              alignItems: "center",
              backgroundColor: "#353535",
            }}
          >
            <Button label="Events">Events</Button>
            <Button label="FAQ">FAQ</Button>
            <Button label="About Us">About Us</Button>
            <Button label="Game night">Game Night</Button>
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
            }}
          >
            <Image src="/bella.png" fill="absolute" alt="image" />
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
            <Image src="/people2.png" fill="absolute" alt="image" />
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
            <Image src="/Finalfire.png" fill="absolute" alt="image" />
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
            <Image src="/finalT.png" fill="absolute" alt="image" />
          </div>
        </>
      </AppBar>
    </>
  );
}

export default Header;
