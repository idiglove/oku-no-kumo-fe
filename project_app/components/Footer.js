import {
  FooterBox,
  Wrapper,
  ImageContainer,
  LeftContainer,
  RightContainer,
  ProductContainer
} from './styled';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer(props) {
  const titles = [
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'FAQ',
      link: '/faq'
    },
    {
      name: 'Contact Us',
      link: '/contact'
    }
  ];
  return (
    <FooterBox>
      <ProductContainer>
        {titles.map((title) => (
          <ul key={title}>
            <Link href={title.link}>{title.name}</Link>
          </ul>
        ))}
      </ProductContainer>
      <ImageContainer>
        <div>
          <Image src="/logo.svg" alt="love" width={238.2} height={106.1} />
          <h6>Copyright @2023</h6>
        </div>
      </ImageContainer>
      <RightContainer>
        <Image src="/together.png" width={296} height={120} alt="image" />
      </RightContainer>
      <LeftContainer>
        <Image src="/right.png" alt="love" width={312} height={160} />
      </LeftContainer>
      <Wrapper>
        <Image
          src="/end.png"
          alt="love"
          style={{ width: '100%' }}
          width={1440}
          height={60}
        />
      </Wrapper>
      {props.footer}
    </FooterBox>
  );
}
