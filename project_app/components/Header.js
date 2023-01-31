import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Vector from "../assets/Vector.svg";

export default function Header() {
  return (
    <Container>
      <section>
        <h1>Ain't Board</h1>
        <div className="buttons">
          <button
            style={{
              width: "488px",
              height: "49.08px",
              marginLeft: "100px",
              marginRight: "60px",
            }}
          >
            <input placeholder="Search board game" />
            <SearchIcon />
          </button>
          <div className="buttonTypes">
            <button>Events</button>
            <button>FAQ</button>
            <button>About Us</button>
            <button>Game Night</button>
          </div>

          <button style={{ marginRight: "30px" }}>Login</button>
          <button>Join Us!</button>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  h1 {
    font-size: 24px;
    color: #ffffff;
    padding-left: 60px;
    text-transform: uppercase;
  }
  input {
    position: absolute;
    width: 318px;
    height: 31px;
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: 0.065em;
    border-style: none;
    color: #afa5a5;
  }
  .buttons {
    display: flex;
    padding-left: 200px;
    margin-top: 15px;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.025em;
    color: #ffffff;
  }

  .buttonTypes {
    box-sizing: border-box;
    position: absolute;
    display: flex;
    width: 124px;
    height: 44px;
    left: 387px;
    top: 217px;
    border: 2px solid #ffffff;
    border-radius: 10px;
  }
  section {
    width: 1440px;
    height: 204px;
    background: #353535;
    position: absolute;
    display: flex;
  }
  button {
    width: 162px;
    height: 47px;
    background: #ffffff;
    border-radius: 10px;
  }
`;
