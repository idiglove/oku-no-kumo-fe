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
              width: "18.99px",
              height: "18.73px",
              top: "170px",
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
    left: 400px;
    top: 150px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    font-size: 1.2rem;
    font-family: "Quicksand", sans-serif;
    padding-left: 100px;
  }
`;

export default ToolBar;
