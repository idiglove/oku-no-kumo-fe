import styled from "styled-components";
import Image from "next/image";

function ToolBar() {
  return (
    <Container>
      <div className="search">
        <div>
          <input type="text" placeholder="Search board game" />
          <div
            style={{
              position: "absolute",
              width: "28.99px",
              height: "28.73px",
              top: "166px",
              right: "350px",
              left: "979px",
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
    left: 400px;
    top: 150px;
    color: black;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    font-size: 1.2rem;
    font-family: "Quicksand", sans-serif;
    padding-left: 40px;
  }
`;

export default ToolBar;
