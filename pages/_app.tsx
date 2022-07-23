import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import GlobalStyle from "../themes/globalStyles";
import { ThemeProvider } from "styled-components";

import Theme from "../themes/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
