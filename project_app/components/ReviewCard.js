//import CardActions from "@mui/material/CardActions";
//import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";
import { Card, CardContent, CardActions, Container } from "./styled";

function ReviewCard() {
  return (
    <Card sx={{}}>
      <Container>
        <Image src="/epic.jpg" alt="dont know" width={220} height={105} />
      </Container>
      {/* <CardMedia>
        <Image
          src="/background.jpg"
          alt="dont know"
          width={220}
          height={330}
          quality={100}
        />
      </CardMedia> */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex
        </Typography>
        <p>Strategy</p>
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
        <Image src="/chat.jpg" alt="love" width={10} height={10} />
        <p>403</p>
        <Image src="/love.jpg" alt="love" width={10} height={10} />
        <p>2,540</p>
      </CardActions>
    </Card>
  );
}

export default ReviewCard;
