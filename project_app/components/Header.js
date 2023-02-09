import React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import SearchIconWrapper from "@mui/icons-material/Search";
import { Container, AppBar, Wrapper, Typography } from "./styled";
import Image from "next/image";

function Header() {
  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
          <h1>AIN'T BOARD</h1>
          <div
            style={{
              marginLeft: "540px",
              alignItems: "center",
            }}
          >
            <Button>Login</Button>
            <Button>Join Us!</Button>
          </div>

          <input placeholder="Search Board Game" />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <div
            style={{
              display: "flex",
              padding: "60px",
              marginRight: "400px",
              alignItems: "center",
            }}
          >
            <Button label="Events">Events</Button>
            <Button label="FAQ">FAQ</Button>
            <Button label="About Us">About Us</Button>
            <Button label="Game night">Game Night</Button>
          </div>
        </Container>
        <>
          <Wrapper>
            <Typography style={{ alignItems: "center" }}>
              Interactive BoardGame Community
            </Typography>
            <Image src="/Vector.jpg" width={200} height={400} alt="image" />
            <Image src="/trees.jpg" width={200} height={463} alt="image" />
            <Image src="/tent3.jpg" width={100} height={200} alt="image" />
            <Image src="/tent.jpg" width={100} height={200} alt="image" />
            <Image
              src="/trees.jpg"
              width={200.18}
              height={422.36}
              alt="image"
            />
            <Image src="/Vector.jpg" width={200} height={380} alt="image" />
            <Image src="/trees.jpg" width={200} height={380} alt="image" />
            <Image src="/trees.jpg" width={200} height={380} alt="image" />
          </Wrapper>
        </>
      </AppBar>
    </>
  );
}

export default Header;
