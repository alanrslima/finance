import "styles/reset.css";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { globalStyles } from "styles/globalCss";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
