import styled from "styled-components";
import Button from "@mui/material/Button";

function NavBarButtons() {
  return (
    <Container>
      <Button label="Events">
        <p>Reviews</p>
      </Button>
      <Button label="FAQ">
        <p>Challenges</p>
      </Button>
      <Button label="About Us">
        <p>Game </p>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  max-width: 40rem;
  margin: 0px auto;
  left: 0px;
  right: 0px;
  display: flex;
  justify-content: space-between;

  Button {
    padding: 0.7rem 1.7rem;
    color: rgb(255, 255, 255);
    background-color: rgb(53, 53, 53);
    border: 2px solid white;
    border-radius: 0.625rem;
  }

  p {
    height: 24px;
    left: 418px;
    top: 227px;
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-transform: lowercase;
    line-height: 24px;
    letter-spacing: 0.025em;
    text-transform: capitalize;
    color: #ffffff;
  }
`;

export default NavBarButtons;
