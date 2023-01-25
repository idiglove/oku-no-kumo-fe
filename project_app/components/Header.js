import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <header>
        <h1>AIN'T BOARD</h1>
        <button>Search Board Game</button>
        <button>Login</button>
        <button>Join Us!</button>
        <h3>Events</h3>
        <h3>FAQ</h3>
        <h3>Boardgames</h3>
      </header>
    </Container>
  );
}

const Container = styled.header`
  header {
    background: #353535;
    position: absolute;
    width: 1440px;
    height: 204px;
  }
  h1 {
    position: absolute;
    width: 227.77px;
    height: 34.34px;
  }
  h3 {
    position: absolute;
    width: 79px;
    height: 30px;
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height */

    letter-spacing: 0.025em;

    color: black;
  }
`;
