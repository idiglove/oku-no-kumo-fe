import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <header>
        <h1>AIN'T BOARD</h1>
        <div>
          <Button>Search Board Game</Button>
          <Button>Login</Button>
          <Button>Join Us!</Button>
        </div>
      </header>
    </Container>
  );
}

const Container = styled.header`
  header {
    background: #353535;
    display: flex;
    position: absolute;
    width: 1440px;
    height: 204px;
  }
  h1 {
    position: absolute;
    width: 227.77px;
    height: 34.34px;
    margin-right: 80px;
    margin-left: 20px;
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

const Button = styled.button`
  color: black;
  font-size: 1em;
  margin: 1em;
  margin-left: 330px;
  padding: 0.25em 1em;
  border: 2px palevioletred;
`;
