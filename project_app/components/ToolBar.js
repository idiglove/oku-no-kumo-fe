import styled from "styled-components";
import Image from "next/image";

function ToolBar() {
  return (
    <Container>
      <div className="search">
        <div>
          <input />
          <h1>Search Board Game </h1>
          <div
            style={{
              position: "absolute",
              width: "26.99px",
              height: "28.73px",
              left: "980px",
            }}
          >
            <Image src="/search.png" fill="absolute" alt="image" />
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  input {
    box-sizing: border-box;
    position: absolute;
    width: 614px;
    height: 67px;
    left: 413px;
    top: 137px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }

  h1 {
    position: absolute;
    width: 273px;
    height: 27px;
    left: 421px;
    top: 140px;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.065em;
    color: #afa5a5;
  }
  Image{
   
            width: 26.99px,
            height: 28.73px,
  }
`;

export default ToolBar;
