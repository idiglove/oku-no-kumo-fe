import Grid from "@mui/material/Grid";
import CardComponent from "./CardComponent";
import { Box } from "./styled";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function CardBox() {
  return (
    <Box>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <CardComponent />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
