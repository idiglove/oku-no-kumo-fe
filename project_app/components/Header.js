import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Container } from "./styled";
import Image from "next/image";

function Header() {
  return (
    <>
      <AppBar
        style={{
          height: "432px",
          backgroundColor: "#353535",
          width: "1440px",
          position: "absolute",
        }}
      >
        <Container maxWidth="xl">
          <h1>AIN'T BOARD</h1>
          <section>
            <Button>Login</Button>
            <Button>Join Us!</Button>
            <input placeholder="Search Board Game" />
            <Stack
              direction="row"
              spacing={4}
              style={{
                padding: "140px",
                borderRadius: "200px",
                marginLeft: "400px",
              }}
            >
              <Chip label="Events" variant="outlined" />
              <Chip label="FAQ" variant="outlined" />
              <Chip label="About Us" variant="outlined" />
              <Chip label="Game night" variant="outlined" />
            </Stack>
            <main
              className="images"
              style={{
                backgroundColor: "#353535",
                height: "432px",
                width: "1440px",
                position: "absolute",
              }}
            >
              <h3
                style={{
                  padding: "40px",
                  width: "521px",
                  height: "86px",
                  left: "486px",
                  top: "300px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: "43px",
                  textTransform: "uppercase",
                  color: "#ffffff",
                }}
              >
                Interactive BoardGame Community
              </h3>
              <Image src="/Vector.jpg" width={300} height={400} alt="image" />
              <Image src="/trees.jpg" width={300} height={400} alt="image" />
              <Image src="/tent3.jpg" width={100} height={200} alt="image" />
              <Image src="/tent.jpg" width={100} height={200} alt="image" />
              <Image src="/Vector.jpg" width={200} height={380} alt="image" />
              <Image src="/trees.jpg" width={300} height={380} alt="image" />
            </main>
          </section>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
