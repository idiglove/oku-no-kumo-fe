import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <Container>
      <section>
        <h1>Ain't Board</h1>
        <div className="buttons">
          <button
            style={{ width: "488px", height: "49.08px", marginLeft: "100px" }}
          >
            <input style={{ width: "400px", height: "30px" }} />
            <SearchIcon />
          </button>
          <button>Login</button>
          <button>Join Us!</button>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
  h1 {
    width: 227.77px;
    height: 34.34px;
    color: #ffffff;
    padding-left: 60px;
    text-transform: uppercase;
  }
  .buttons {
    display: flex;
    padding-left: 200px;
    margin-top: 15px;
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
