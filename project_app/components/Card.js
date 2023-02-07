import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "next/image";
import styled from "styled-components";

function CardGame() {
  return (
    <Card sx={{}}>
      <CardMedia
        component="img"
        image="https://source.unsplash.com/random"
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex
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
        <p>Strategy</p>
      </CardActions>
    </Card>
  );
}

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

const Card = styled.div`
  flexdirection: column;
  width: 220px;
  height: 380px;
  border: 2px solid #000000;
  borderradius: 10px;
  boxsizing: border-box;
  left: 0px;
  top: 0px;
  background: white;
`;

export default CardGame;
