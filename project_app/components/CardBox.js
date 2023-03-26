import Grid from "@mui/material/Grid";
import CardComponent from "./CardComponent";
import Image from "next/image";
import { ReviewsBox } from "./styled";
const cards = [1, 2];

export default function CardBox() {
  return (
    <>
      <ReviewsBox>
        <Image
          src="/path.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="picture of the background"
        />
        <Image src="/left_review.png" width={12} height={12} alt="image" />
        <Grid container spacing={2} style={{ display: "flex" }}>
          {cards.map((card) => (
            <Grid item key={card} md={3}>
              <CardComponent />
            </Grid>
          ))}
        </Grid>
        <Image src="/right_review.png" width={12} height={12} alt="image" />
      </ReviewsBox>
    </>
  );
}
