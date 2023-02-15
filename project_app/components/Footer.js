import { Box, Wrapper, Container, Text } from "./styled";
import Image from "next/image";

export default function Footer() {
  return (
    <Box>
      <Container>
        <Text>About Us</Text>
        <Text>FAQ</Text>
        <Text>Contact Us</Text>
        <Text>Give Feedback</Text>
      </Container>
      <section>
        <div
          style={{
            width: "227.77px",
            paddingBottom: "1000px",
            zIndex: "1",
            marginLeft: "1100px",
            height: "34.34px",
            left: "1085.14px",
            top: "2800.5px",
            bottom: "100px",
          }}
        >
          <Image src="/logo.svg" alt="love" width={238.2} height={106.1} />
          <p
            style={{
              width: "145px",
              height: "23px",
              left: "1170px",
              top: "2800px",
              fontFamily: "Quicksand",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "22px",
              letterSpacing: "0.025em",
              color: "#CECECE",
            }}
          >
            @ Copyright 2023
          </p>
        </div>
      </section>

      <div
        style={{
          zIndex: "1",
          top: "250px",
          position: "absolute",
        }}
      >
        <Image src="/together.png" width={296} height={110} alt="image" />
      </div>
      <div
        style={{
          left: "1127px",
          top: "210px",
          position: "absolute",
          zIndex: "1",
        }}
      >
        <Image src="/right.png" alt="love" width={312} height={150.37} />
      </div>
      <Wrapper>
        <Image src="/end.png" alt="love" width={1440} height={72.7} />
      </Wrapper>
    </Box>
  );
}
