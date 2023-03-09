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
  const titles = [
    {
      name: "About",
      link: "/About",
    },
    {
      name: "FAQ",
      link: "/Faq",
    },
    {
      name: "Contact Us",
      link: "/Contact",
    },
    {
      name: "Give Feedback",
      link: "/Feedback",
    },
  ];
  return (
    <Box>
      <ul>
        <ProductContainer>
          {titles.map((title) => (
            <li>
              <Link href={title.link}>{title.name}</Link>
            </li>
          ))}
        </ProductContainer>
      </ul>
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
