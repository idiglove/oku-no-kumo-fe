import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import styled from "styled-components";
import Image from "next/image";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const theme = createTheme();

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            {cards.map((card) => (
              <Grid item key={card} xs={8} sm={6} md={3}>
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
                    <Image
                      src="/Rectangle.jpg"
                      alt="alt text"
                      width={35}
                      height={35}
                      style={{
                        border: "1px solid #A69084",
                      }}
                    />

                    <Button size="small">Strategy</Button>
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

const Typography = styled.text`
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
