import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Image from "next/image";
import styled from "styled-components";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const theme = createTheme();

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container maxWidth="lg">
          <Image
            src="/path94.jpg"
            alt="Some alt text"
            width={150}
            height={150}
            style={{
              background: "#4AA4D8",
              position: "absolute",
              left: "0%",
              right: "92.8%",
              top: "48.41%",
              bottom: "40.47%",
            }}
          />

          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "220px",
                    height: "500px",
                    border: "2px solid #000000",
                    borderRadius: "10px",
                    boxSizing: "border-box",
                    left: "0px",
                    top: "0px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.section`
  width: 1440px;
  height: 2700px;
  left: 0px;
  top: 529px;
  background: #234c4c;
`;

const Typography = styled.h2`
  width: 152px;
  height: 86px;
  left: 34px;
  top: 169px;
  text-align: center;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`;
