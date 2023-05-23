import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import { ProductContainer } from '../components/styled';
import AboutWrapper from '../components/AboutWrapper';
import {
  NavbarText,
  AboutWrapperContainer,
  AboutFooterContainer,
  AboutHeaderWrapper
} from './style';

function About() {
  return (
    <AboutWrapperContainer>
      <AboutHeaderWrapper>
        <Header header={<NavbarText>About Us</NavbarText>} />
        <HomePage />
      </AboutHeaderWrapper>
      <AboutWrapper />
      <AboutFooterContainer>
        <ProductContainer />
        <Footer />
      </AboutFooterContainer>
    </AboutWrapperContainer>
  );
}

export default About;
