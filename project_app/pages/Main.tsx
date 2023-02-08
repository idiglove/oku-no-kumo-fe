import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ReviewCard from "../components/ReviewCard";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Wrapper} from "./styled";

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
                <ReviewCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Wrapper>
    </ThemeProvider>
  );
}

