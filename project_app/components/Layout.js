import Footer from "./Footer";
import Header from "./Header";
import ToolBar from "./ToolBar";
import Reviews from "./Reviews";
import HomePage from "./HomePage";
import {
  Typography,
  LayoutContainer,
  StyledContainer,
  ProductContainer,
  FooterBox,
} from "./styled";

function Layout(props) {
  return (
    <LayoutContainer>
      <Header
        header={<Typography>Interactive BoardGame Community</Typography>}
      ></Header>
      <ToolBar toolbar={<StyledContainer />} />
      <HomePage />
      <Reviews />
      <Footer footer={<FooterBox />} />
    </LayoutContainer>
  );
}

export default Layout;
