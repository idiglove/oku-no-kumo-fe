import React from "react";
import AppBar from "@mui/material/AppBar";
import Image from "next/image";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

function Header() {
  return (
    <>
      <AppBar
        style={{ height: "412px", backgroundColor: "#353535", width: "1440px" }}
      >
        <Container maxWidth="xl">
          <h1 className="u-text--center">AIN'T BOARD</h1>
          <section>
            <Button>Login</Button>
            <Button>Join Us!</Button>
            <input placeholder="Search Board Game" />
            <Stack
              direction="row"
              spacing={3}
              style={{ padding: "140px", borderRadius: "100px" }}
            >
              <Chip label="Events" variant="outlined" />
              <Chip label="FAQ" variant="outlined" />
              <Chip label="About Us" variant="outlined" />
              <Chip label="Game night" variant="outlined" />

              <div>
                <h3>Interactive BoardGame Community</h3>
              </div>
            </Stack>
          </section>
        </Container>
      </AppBar>
      <Card>
        <Image src="/Vector.jpg" width={520} height={280} alt="image" />
      </Card>
    </>
  );
}

const Container = styled.div`
  h1 {
    position: absolute;
    width: 227.77px;
    height: 34.34px;
    left: 50px;
    top: 50px;
    color: white;
  }
  .chip {
    padding-left: 180px;
    height: 44px;
    border-radius: 50px;
    left: 387px;
  }
  section {
    color: white;
    text-align: center;
    align: center;
  }
  input {
    box-sizing: border-box;
    position: absolute;
    width: 614px;
    height: 67px;
    left: 413px;
    top: 137px;
    backgroundcolor: #ffffff;
  }
  Button {
    width: 182px;
    margin: 10px;
    height: 47px;
    left: 500px;
    top: 50px;
    background: #ffffff;
    border-radius: 10px;
    color: black;
  }
  Box {
    box-sizing: border-box;
    position: absolute;
    width: 84px;
    height: 22px;
    left: 387px;
    top: 217px;
    border: 2px solid #ffffff;
    border-radius: 10px;
    backgroundcolor: blue;
  }

  Stack {
    box-sizing: border-box;
    position: absolute;
    width: 124px;
    height: 34px;
    left: 387px;
    top: 100px;

    border: 2px solid #ffffff;
  }
  h3 {
    padding: 40px;
    width: 521px;
    height: 86px;
    left: 486px;
    top: 300px;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 43px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

export default Header;
