import Footer from "./Footer";
import Header from "./Header";
import Reviews from "./Reviews";
import { Typography } from "./styled";
import { LayoutContainer } from "./styled";

function Layout() {
  return (
    <LayoutContainer>
      <Header
        header={<Typography>Interactive BoardGame Community</Typography>}
      />
      <Reviews />
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
