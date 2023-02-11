import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Container, AppBar, Wrapper, Typography } from "./styled";
import Image from "next/image";

function Header() {
  return (
    <>
      <AppBar>
        <Container maxWidth="xl">
          <div style={{ position: "absolute", marginLeft: "540px" }}>
            <Button>Login</Button>
            <Button>Join Us!</Button>
          </div>
          <Image
            src="/logo.svg"
            width={227.77}
            height={150}
            left={50}
            right={50}
            alt="image"
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
              marginRight: "500px",
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
          <Image src="/Group2.jpg" width={486.05} height={460.51} alt="image" />
          <Image src="/tent4.jpg" width={226} height={260} alt="image" />
          <Image src="/people.svg" width={134} height={100} alt="image" />
          <Image src="/Fire.jpg" width={92.37} height={105.71} alt="image" />
          <Image src="/Group.jpg" width={500.27} height={420.65} alt="image" />
        </>
      </AppBar>
    </>
  );
}

export default Header;
