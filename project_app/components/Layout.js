import Footer from "./Footer";
import Header from "./Header";
import Reviews from "./Reviews";
import { LayoutContainer } from "./styled";

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Reviews />
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
