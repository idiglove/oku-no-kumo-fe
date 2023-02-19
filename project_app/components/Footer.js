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
      <section
        style={{
          zIndex: "0",
          display: "block",
          width: "229.86px",
          height: "67.5px",
          top: "2819.5px",
          bottom: "100px",
          marginBottom: "100px",
        }}
      >
        <div
          style={{
            width: "227.77px",
            marginBottom: "800px",
            zIndex: "1",
            marginLeft: "1100px",
            height: "34.34px",
            left: "1085.14px",
          }}
        >
          <Image src="/logo.svg" alt="love" width={238.2} height={106.1} />
          <p
            style={{
              width: "145px",
              height: "23px",
              left: "1170px",
              top: "3000px",
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
