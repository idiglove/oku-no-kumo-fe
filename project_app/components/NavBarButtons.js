import Button from '@mui/material/Button';
import { NavbarButtonContainer } from './styled';
import Link from 'next/link';

function NavBarButtons() {
  return (
    <NavbarButtonContainer>
      <Link href="/Reviews">
        <Button label="Events">
          <p>Reviews</p>
        </Button>
      </Link>
      <Button label="FAQ">
        <p>Challenges</p>
      </Button>
    </NavbarButtonContainer>
  );
}

export default NavBarButtons;
