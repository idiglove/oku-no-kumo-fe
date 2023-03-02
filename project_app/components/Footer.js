import {
  Box,
  Wrapper,
  ImageContainer,
  LeftContainer,
  RightContainer,
  ProductContainer,
} from "./styled";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const titles = ["About Us", "FAQ", "Contact Us", "Give Feedback"];

  return (
    <Box>
      <ProductContainer>
        {titles.map((title, key) => (
          <Link href="/About" key={key}>
            <ul>{title}</ul>
          </Link>
        ))}
      </ProductContainer>
      <ImageContainer>
        <Image src="/logo.svg" alt="love" width={238.2} height={106.1} />
        <h6>Copyright @2023</h6>
      </ImageContainer>
      <RightContainer>
        <Image src="/together.png" width={296} height={120} alt="image" />
      </RightContainer>
      <LeftContainer>
        <Image src="/right.png" alt="love" width={312} height={160} />
      </LeftContainer>
      <Wrapper>
        <Image src="/end.png" alt="love" width={1440} height={72.7} />
      </Wrapper>
    </Box>
  );
}
