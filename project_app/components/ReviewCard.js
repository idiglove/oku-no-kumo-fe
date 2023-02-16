import Image from "next/image";
import { Card } from "./styled";

function ReviewCard() {
  return (
    <Card>
      <Image src="/Card.png" alt="dont know" width={220} height={330} />
    </Card>
  );
}

export default ReviewCard;
