import Image from 'next/image';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Card, StyledText } from './styled';

function CardComponent() {
  // @todo - alt for the images will be coming from the BE
  return (
    <Card>
      <div>
        <Image src="/background.png" width={220} height={105} alt="image" />
      </div>
      <CardContent>
        <StyledText>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...."
        </StyledText>
      </CardContent>
      <CardActions>
        <Image src="/Dice.png" width={35} height={35} alt="image" />
        <div style={{ marginLeft: '100px' }}>
          <Image src="/chat.png" width={12} height={12} alt="image" />
          <Image src="/love.png" width={12} height={12} alt="image" />
        </div>
      </CardActions>
    </Card>
  );
}

export default CardComponent;
