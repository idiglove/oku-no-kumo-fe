import { Box, Wrapper, Container } from "./styled";
import Image from "next/image";

export default function Footer() {
  return (
    <Box>
      <Container>
        <ul
          style={{
            marginTop: "40px",
            width: "146px",
            left: "117px",
            top: "2777px",
            listStyle: "none",
            fontFamily: "Quicksand-Regular",
            color: "white",
            display: "block",
            fontWeight: "500px",
            boxSizing: "border-box",
          }}
        >
          <li
            style={{
              width: "146px",
              height: "24px",
              fontWeight: "500",
              fontSize: "20px",
              top: "2906px",
              letterSpacing: "0.025em",
              lineHeight: "24px",
              fontFamily: "Rubik",
            }}
          >
            About Us
          </li>
          <li
            style={{
              marginTop: "10px",
              width: "146px",
              height: "24px",
              fontWeight: "500",
              fontSize: "20px",
              top: "2906px",
              letterSpacing: "0.025em",
              lineHeight: "24px",
              fontFamily: "Rubik",
            }}
          >
            FAQ
          </li>
          <li
            style={{
              marginTop: "10px",
              width: "146px",
              height: "24px",
              fontWeight: "500",
              fontSize: "20px",
              top: "2906px",
              letterSpacing: "0.025em",
              lineHeight: "24px",
              fontFamily: "Rubik",
            }}
          >
            Contact Us
          </li>
          <li
            style={{
              marginTop: "10px",
              width: "146px",
              height: "24px",
              fontWeight: "500",
              fontSize: "20px",
              top: "2906px",
              letterSpacing: "0.025em",
              lineHeight: "24px",
              fontFamily: "Rubik",
            }}
          >
            Give Feedback
          </li>
        </ul>
      </Container>

      <div
        style={{
          width: "229.86px",
          height: "67.5px",
          left: "1085.14px",
          top: "2819.5px",
          marginTop: "40px",
          boxSizing: "border-box",
        }}
      >
        <Image src="/logo.svg" alt="love" width={238.2} height={106.1} />
        <h6>@ Copyright 2023</h6>
      </div>

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
