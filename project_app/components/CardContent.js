import { Container } from "./styled";
import Image from "next/image";

function CardContent() {
  return (
    <Container>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua...."
      </p>
      <Image src="/Dice.png" width={35} height={35} alt="image" />
    </Container>
  );
}

export default CardContent;
