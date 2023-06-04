import Grid from '@mui/material/Grid';
import CardComponent from './CardComponent';
import Image from 'next/image';
import RightContainer from './RightContainer';
import LeftContainer from './LeftContainer';
import { ReviewsBox, MazeContainer } from './styled';

const cards = [1, 2];

export default function CardBox() {
  return (
    <ReviewsBox>
      <MazeContainer>
        <Image
          src="/Maze.png"
          fill
          style={{ objectFit: 'cover' }}
          alt="picture of the background"
        />
      </MazeContainer>
      <LeftContainer />
      <Grid
        container
        spacing={2}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '10',
          width: '57%',
          margin: '9rem auto 13rem',
          flexWrap: 'wrap',
          gap: '3rem'
        }}
      >
        {cards.map((card) => (
          <Grid item key={card} md={3}>
            <CardComponent />
          </Grid>
        ))}
      </Grid>
      <RightContainer />
    </ReviewsBox>
  );
}
