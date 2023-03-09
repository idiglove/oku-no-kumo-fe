import Image from "next/image";
import { StyledContainer } from "./styled";

function ToolBar() {
  return (
    <div>
      <StyledContainer>
        <input type="text" placeholder="Search board game" />
        <section
          style={{
            top: "170px",
            left: "970px",
            position: "absolute",
          }}
        >
          <Image src="/search.png" width={18.99} height={18.73} alt="image" />
        </section>
      </StyledContainer>
    </div>
  );
}

export default ToolBar;
