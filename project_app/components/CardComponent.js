import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";

function CardComponent() {
  return (
    <div>
      <Card>
        <div>
          <Image src="/background.png" width={216} height={105} alt="image" />
        </div>

        <CardContent>
          <Typography>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...."
          </Typography>
        </CardContent>
        <CardActions>
          <Image src="/Dice.png" width={35} height={35} alt="image" />
          <div>
            <Typography gutterBottom variant="h5" component="h2">
              Heading
            </Typography>
            <Image src="/chat.png" width={12} height={12} alt="image" />
            <Image src="/love.png" width={12} height={12} alt="image" />
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

export default CardComponent;
