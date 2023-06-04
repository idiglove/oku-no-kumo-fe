import Image from 'next/image';
import { StyledContainer, StyledWrapper } from './styled';

function ToolBar(props) {
  return (
    <StyledContainer>
      <input type="text" placeholder="Search board game" />
      <StyledWrapper>
        <Image src="/search.png" fill="absolute" alt="image" />
      </StyledWrapper>
    </StyledContainer>
  );
}

export default ToolBar;
