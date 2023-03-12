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
        <p>Game Night</p>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  z-index: 1;

  Button {
    margin: 20px;
    height: 46px;

    right: 40px;
    text-transform: capitalize;
    font-family: "Rubik", sans-serif;
    text-transform: capitalize;
    background-color: #353535;
    font-style: normal;
    border: 2px solid #ffffff;
    border-radius: 8px;
  }

  p {
    height: 24px;

    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    text-transform: lowercase;
    line-height: 24px;
    letter-spacing: 0.025em;
    text-transform: capitalize;
  }
`;

export default NavBarButtons;
