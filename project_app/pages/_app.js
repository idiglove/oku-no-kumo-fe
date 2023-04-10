// import '../styles/globals.css'

export const GlobalStateContext = createContext();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
