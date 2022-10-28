import 'styles/reset.css';

import type { AppProps } from 'next/app';
import { globalStyles } from 'styles/globalCss';
import { RootProvider } from 'providers/RootProvider';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <RootProvider>
      <Component {...pageProps} />
    </RootProvider>
  );
}

export default MyApp;
