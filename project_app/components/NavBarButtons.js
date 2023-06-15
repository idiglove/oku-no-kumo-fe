import Button from '@mui/material/Button';
import { NavbarButtonContainer } from './styled';

function NavBarButtons() {
  return (
    <NavbarButtonContainer>
      <Button label="Events">
        <p>Reviews</p>
      </Button>
      <Button label="FAQ">
        <p>Challenges</p>
      </Button>
      <Button label="About Us">
        <p>Game </p>
      </Button>
    </NavbarButtonContainer>
  );
}

export default NavBarButtons;
