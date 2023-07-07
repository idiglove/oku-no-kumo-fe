import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from "../components/ContactForm";
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
        <Header header={<NavbarText></NavbarText>} />
        <ContactForm/>
      </AboutHeaderWrapper>
      <AboutFooterContainer>
        <ProductContainer />
        <Footer />
      </AboutFooterContainer>
    </AboutWrapperContainer>
  );
}

export default Contact
