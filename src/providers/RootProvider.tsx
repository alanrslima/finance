import { ChakraProvider, Portal } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { ContinueRefProvider } from 'contexts/ContinueRefContext';
import { RootProviderProps } from './types';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from 'services/queryClient';
import { ToastContainer } from 'react-toastify';

export function RootProvider({ children, session }: RootProviderProps): ReactElement {
  return (
    <ChakraProvider>
      <ContinueRefProvider>
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            {children}
            <Portal>
              <ToastContainer />
            </Portal>
          </QueryClientProvider>
        </SessionProvider>
      </ContinueRefProvider>
    </ChakraProvider>
  );
}
