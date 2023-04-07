import { createContext, useState } from 'react';
import '../styles/globals.css'

export const GlobalStateContext = createContext();

function MyApp({ Component, pageProps }) {
    const [token, setToken] = useState(null);

    return (
        <GlobalStateContext.Provider value={{ token, setToken }}>
            <Component {...pageProps} />
        </GlobalStateContext.Provider>
    )
}

export default MyApp
