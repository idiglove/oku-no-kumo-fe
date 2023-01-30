import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

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
            <input
              placeholder="Search board game"
              style={{ width: "400px", height: "30px" }}
            />
            <SearchIcon />
            <div className="buttons">
              {" "}
              <button>Events</button>
              <button>FAQ</button>
              <button>About Us</button>
              <button>Game Night</button>
            </div>
          </button>
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
  h3 {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    display: inline-block;
    letter-spacing: 0.025em;
    color: #ffffff;
    padding: 30px;
  }
`;
