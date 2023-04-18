import Image from "next/image";
import { StyledContainer, StyledWrapper } from "./styled";

function ToolBar(props) {
  return (
    <div>
      <StyledContainer>
        <input type="text" placeholder="Search board game" />
        <StyledWrapper>
          <section>
            <Image src="/search.png" fill="absolute" alt="image" />
          </section>
        </StyledWrapper>
      </StyledContainer>
    </div>
  );
}

export default ToolBar;
