import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import { ProductContainer } from '../components/styled';
import FaqWrapper from "../components/FaqWrapper"

import {
  NavbarText,
  AboutWrapperContainer,
  AboutFooterContainer,
  AboutHeaderWrapper
} from './style';

function Faq() {
  return (
    <AboutWrapperContainer>
      <AboutHeaderWrapper>
        <Header header={<NavbarText>FAQ</NavbarText>} />
        <HomePage />
      </AboutHeaderWrapper>
       {/* <InputField /> */}
       <FaqWrapper/>
      <AboutFooterContainer>
        <ProductContainer />
        <Footer />
      </AboutFooterContainer>
    </AboutWrapperContainer>
  );
}

export default Faq