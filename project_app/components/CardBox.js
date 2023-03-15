import Grid from "@mui/material/Grid";
import CardComponent from "./CardComponent";
import Box from "@mui/material/Box";

const cards = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

export default function CardBox() {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {cards.map((card) => (
            <Grid item key={card} md={3}>
              <CardComponent />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
