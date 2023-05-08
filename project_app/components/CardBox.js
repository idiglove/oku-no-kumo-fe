import Grid from "@mui/material/Grid";
import CardComponent from "./CardComponent";
import Image from "next/image";
import {
  ReviewsBox,
  LeftWaterContainer,
  RightWaterContainer,
  MazeContainer,
} from "./styled";
const cards = [1, 2];

export default function CardBox() {
  return (
    <ReviewsBox>
      <MazeContainer>
        <Image
          src="/Maze.png"
          fill
          style={{ objectFit: "cover" }}
          alt="picture of the background"
        />
      </MazeContainer>
      <LeftWaterContainer>
        <Image
          src="/left_review.png"
          width={103.74}
          height={343.85}
          alt="image"
        />
      </LeftWaterContainer>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "10",
          width: "57%",
          margin: "9rem auto 13rem",
          flexWrap: "wrap",
          gap: "3rem",
        }}
      >
        {cards.map((card) => (
          <Grid item key={card} md={3}>
            <CardComponent />
          </Grid>
        ))}
      </Grid>
      <RightWaterContainer>
        <Image
          src="/right_review.png"
          width={132.09}
          height={353.24}
          alt="image"
        />
      </RightWaterContainer>
    </ReviewsBox>
  );
}
