import React from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Container, AppBar, Grid, Wrapper, Text } from "./styled";
import Image from "next/image";

function Header() {
  return (
    <>
      <AppBar>
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

            <Grid>
              <Text> Interactive BoardGame Community</Text>
              <main
                className="images"
                style={{
                  height: "432px",
                  width: "1440px",
                  position: "absolute",
                  background: "#353535",
                }}
              >
                <Wrapper>
                  <Image
                    src="/Vector.jpg"
                    width={300}
                    height={400}
                    alt="image"
                  />
                  <Image
                    src="/trees.jpg"
                    width={200}
                    height={463}
                    alt="image"
                  />
                  <Image
                    src="/tent3.jpg"
                    width={100}
                    height={200}
                    alt="image"
                  />
                  <Image src="/tent.jpg" width={100} height={200} alt="image" />
                  <Image
                    src="/trees.jpg"
                    width={274.18}
                    height={422.36}
                    alt="image"
                  />
                  <Image
                    src="/Vector.jpg"
                    width={200}
                    height={380}
                    alt="image"
                  />
                  <Image
                    src="/trees.jpg"
                    width={200}
                    height={380}
                    alt="image"
                  />
                </Wrapper>
              </main>
            </Grid>
          </section>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
