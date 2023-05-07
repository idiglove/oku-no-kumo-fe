import Footer from "./Footer";
import Header from "./Header";
import ToolBar from "./ToolBar";
import Reviews from "./Reviews";
import Image from "next/image";
import { Typography, LayoutContainer, HomePageContainer } from "./styled";

function Layout(props) {
  return (
    <LayoutContainer>
      <Header
        header={<Typography>Interactive BoardGame Community</Typography>}
      ></Header>
      <ToolBar ToolBar={ToolBar} />
      <div
        style={{
          position: "absolute",
          width: "25rem",
          zIndex: "0",
          left: "0px",
          bottom: "0",
          boxSizing: "borderBox",
          width: "630px",
          height: "472px",
          top: "220px",
        }}
      >
        <Image src="/trees_left.png" fill="none" alt="image" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "296px",
          height: "250px",
          left: "412.31px",
          top: "440px",
        }}
      >
        <Image src="/Tent.png" fill="absolute" alt="image" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "244px",
          height: "109px",
          left: "477px",
          top: "580px",
          bottom: "90.57%",
          zIndex: "0",
        }}
      >
        <Image src="/people.png" fill="absolute" alt="image" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "90.37px",
          height: "105.71px",
          left: "708.46px",
          top: "580px",
        }}
      >
        <Image src="/fire.png" fill="absolute" alt="image" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "651px",
          height: "466px",
          bottom: "0",
          right: "0",
          zIndex: "0",
          top: "230px",
        }}
      >
        <Image src="/trees_right.png" fill="none" alt="image" />
      </div>

      <Reviews />
      <Footer />
    </LayoutContainer>
  );
}

export default Layout;
