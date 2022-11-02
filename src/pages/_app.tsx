import 'styles/reset.css';
import 'styles/imports';
import 'styles/themes/default/toast.css';
import type { AppProps } from 'next/app';
import { globalStyles } from 'styles/globalCss';
import { RootProvider } from 'providers/RootProvider';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <RootProvider session={pageProps.session}>
      <Component {...pageProps} />
    </RootProvider>
  );
}

export default MyApp;
