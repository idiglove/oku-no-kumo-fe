import Footer from "./Footer";
import Header from "./Header";
import Reviews from "./Reviews";

function Layout() {
  return (
    <div
      style={{
        padding: "0px",
        margin: "0px",
      }}
    >
      <Header />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Layout;
