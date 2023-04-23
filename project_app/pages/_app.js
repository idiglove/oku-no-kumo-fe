import "../styles/globals.css";
import { createContext, useState } from "react";

export const GlobalStateContext = createContext();

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState(null);

  return (
    <GlobalStateContext.Provider value={{ token, setToken }}>
      <Component {...pageProps} />
    </GlobalStateContext.Provider>
  );
}

export default MyApp;
