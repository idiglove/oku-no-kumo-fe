import Grid from '@mui/material/Grid';
import CardComponent from './CardComponent';
import Image from 'next/image';
import {
  ReviewsBox,
  LeftWaterContainer,
  RightWaterContainer,
  MazeContainer
} from './styled';
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
      <LeftWaterContainer>
        <svg
          width="104"
          height="345"
          viewBox="0 0 104 345"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
          class="water-left"
        >
          <path
            d="M 71.3509 263.532 C 104.683 257.198 116.359 193.468 86.839 165.235 C 57.3206 137.003 49.3718 102.128 48.2366 55.6283 C 47.5009 25.4775 19.5597 8.59641 0 0.450623 V 344.3 C 29.2896 330.468 43.3868 268.841 71.3509 263.532Z"
            fill="#73D1E9"
          ></path>
          <path
            d="M 0 344.3 V 304.5 C 22.4563 293.784 33.2939 246.53 54.7633
        242.453 C 80.3892 237.586 89.3651 188.589 66.6716 166.886 C 43.9777
        145.181 37.8666 118.37 36.994 82.6228 C 36.429 59.488 15.0331 46.5173 0
        40.2417 V 0.450623 C 19.5597 8.59641 47.5009 25.4775 48.2366 55.6283 C
        49.3718 102.128 57.3206 137.003 86.839 165.235 C 98.5143 176.401 103.746
        193.121 103.742 209.646 C 103.736 234.901 91.5 259.703 71.3509 263.532 C
        43.3868 268.841 29.2896 330.468 0 344.3 Z"
            fill="rgb(74, 164, 216)"
          ></path>
        </svg>
      </LeftWaterContainer>

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
      <RightWaterContainer>
        <svg
          width="133"
          height="354"
          viewBox="0 0 133 354"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="water-right"
        >
          <path
            d="M 85.2974 46.4435 C 40.9992 57.1066 -28.6097 86.4306 14.4227 134.414 C 57.4525 182.399 54.921 193.063 63.7812 245.045 C 70.8457 286.499 98.8434 324.55 133 353.817 V 0.579712 C 122.107 20.842 106.252 41.3991 85.2974 46.4435 Z"
            fill="rgb(115, 209, 233)"
          ></path>
          <path
            d="M 133 353.817 C 98.8438 324.55 70.8461 286.499 63.7816
          245.045 C 54.9214 193.063 57.4529 182.399 14.4231 134.414 C 4.92545
          123.824 0.914364 114.144 0.907723 105.371 C 0.883817 74.3963 50.7762
          54.7524 85.2978 46.4435 C 106.252 41.3991 122.108 20.842 133 0.579681
          V 353.817 Z M 124.464 35.4471 C 123.606 35.4471 122.582 36.2451
          121.365 37.9193 C 121.365 37.9193 111.819 55.0142 78.4007 63.0586 C
          44.9802 71.1029 -8.48902 84.1765 30.6586 121.383 C 69.8061 158.588
          48.8 184.733 78.4007 209.872 C 107.999 235.013 76.4881 261.156 100.361
          301.379 C 104.439 308.252 107.877 311.337 110.773 311.337 C 124.827
          311.337 126.14 238.704 126.14 173.672 C 126.14 102.921 132.357 35.4471
          124.464 35.4471 Z"
            fill="rgb(74, 164, 216)"
          ></path>
        </svg>
      </RightWaterContainer>
    </ReviewsBox>
  );
}
