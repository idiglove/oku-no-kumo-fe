import Footer from "./Footer";
import Header from "./Header";
import Reviews from "./Reviews";
import styled from "styled-components";
import Global, { GlobalStyle } from "../styles/global";

function Layout() {
  return (
    <LayoutContainer>
      <GlobalStyle />
      <div>
        <Header />
      </div>
      <div>
        <Reviews />
      </div>

      <div>
        <Footer />
      </div>
    </LayoutContainer>
  );
}

export default Layout;

const LayoutContainer = styled.div`
  width: 100%;
  height: 2862px;
  box-sizing: border-box;
  position: absolute;
  padding: 0px;
  margin: 0px;
  font-family: Rubik-Regular, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  font-size: 16px;
`;
