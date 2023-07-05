import Header from '../components/Header';
import Footer from '../components/Footer';
import { ProductContainer } from '../components/styled';
import {
  NavbarText,
  AboutWrapperContainer,
  AboutFooterContainer,
  AboutHeaderWrapper
} from './style';

function Contact() {
  return (
    <AboutWrapperContainer>
      <AboutHeaderWrapper>
        <Header header={<NavbarText>Contact Us</NavbarText>} />
      </AboutHeaderWrapper>
      <AboutFooterContainer>
        <ProductContainer />
        <Footer />
      </AboutFooterContainer>
    </AboutWrapperContainer>
  );
}

export default Contact
